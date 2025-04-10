const GPTResearcher = (() => {
  const init = () => {
    // Not sure, but I think it would be better to add event handlers here instead of in the HTML
    //document.getElementById("startResearch").addEventListener("click", startResearch);
    document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)

    updateState("initial")
  }

  const changeSource = () => {
    const report_source = document.querySelector('select[name="report_source"]').value
    if (report_source === "sources") {
      document.getElementById("sources").style.display = "block"
    } else {
      document.getElementById("sources").style.display = "none"
    }
  }

  let dispose_socket = null
  const startResearch = () => {
    document.getElementById("output").innerHTML = ""
    document.getElementById("reportContainer").innerHTML = ""
    dispose_socket?.()

    const imageContainer = document.getElementById("selectedImagesContainer")
    imageContainer.innerHTML = ""
    imageContainer.style.display = "none"

    updateState("in_progress")

    addAgentResponse({
      output: "🤔 Thinking about research questions for the task...",
    })

    dispose_socket = listenToSockEvents()
  }

  const listenToSockEvents = () => {
    const { protocol, host, pathname } = window.location
    const ws_uri = `${protocol === "https:" ? "wss:" : "ws:"}//${host}${pathname}ws`
    const converter = new showdown.Converter()
    const socket = new WebSocket(ws_uri)

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      console.log("Received message:", data) // Debug log
      if (data.type === "logs") {
        addAgentResponse(data)
      } else if (data.type === "images") {
        console.log("Received images:", data) // Debug log
        displaySelectedImages(data)
      } else if (data.type === "report") {
        writeReport(data, converter)
      } else if (data.type === "path") {
        updateState("finished")
        updateDownloadLink(data)
      }
    }

    socket.onopen = (event) => {
      try {
        // Changed from input to textarea selector
        const taskElement =
          document.querySelector('textarea[name="task"]') || document.querySelector('input[name="task"]')
        const task = taskElement ? taskElement.value : ""

        const reportTypeElement = document.querySelector('select[name="report_type"]')
        const report_type = reportTypeElement ? reportTypeElement.value : "research_report"

        const reportSourceElement = document.querySelector('select[name="report_source"]')
        const report_source = reportSourceElement ? reportSourceElement.value : "web"

        const toneElement = document.querySelector('select[name="tone"]')
        const tone = toneElement ? toneElement.value : "Objective"

        const agentElement = document.querySelector('input[name="agent"]:checked')
        const agent = agentElement ? agentElement.value : "Auto Agent"

        let source_urls = tags || []

        if (report_source !== "sources" && source_urls.length > 0) {
          source_urls = source_urls.slice(0, source_urls.length - 1)
        }

        const queryDomainsElement = document.querySelector('input[name="query_domains"]')
        const query_domains_str = queryDomainsElement ? queryDomainsElement.value : ""
        let query_domains = []
        if (query_domains_str) {
          query_domains = query_domains_str
            .split(",")
            .map((domain) => domain.trim())
            .filter((domain) => domain.length > 0)
        }

        // Get selected output language (changed from multiple to single selection)
        const outputLanguageElement = document.querySelector('input[name="output_language"]:checked')
        const outputLanguage = outputLanguageElement ? outputLanguageElement.value : "en"

        const requestData = {
          task: task,
          report_type: report_type,
          report_source: report_source,
          source_urls: source_urls,
          tone: tone,
          agent: agent,
          query_domains: query_domains,
          output_language: outputLanguage, // Changed from array to single value
        }

        console.log("Sending request data:", requestData)
        socket.send(`start ${JSON.stringify(requestData)}`)
      } catch (error) {
        console.error("Error in WebSocket onopen handler:", error)
        addAgentResponse({
          output: "❌ Error starting research: " + error.message,
        })
        updateState("error")
      }
    }

    socket.onerror = (error) => {
      console.error("WebSocket error:", error)
      addAgentResponse({
        output: "❌ WebSocket error: Connection failed or was interrupted.",
      })
      updateState("error")
    }

    // return dispose function
    return () => {
      try {
        if (socket.readyState !== WebSocket.CLOSED && socket.readyState !== WebSocket.CLOSING) {
          socket.close()
        }
      } catch (e) {
        console.error("Error closing socket:", e)
      }
    }
  }

  const addAgentResponse = (data) => {
    const output = document.getElementById("output")
    output.innerHTML += '<div class="agent_response">' + data.output + "</div>"
    output.scrollTop = output.scrollHeight
    output.style.display = "block"
    updateScroll()
  }

  const writeReport = (data, converter) => {
    const reportContainer = document.getElementById("reportContainer")
    const markdownOutput = converter.makeHtml(data.output)
    reportContainer.innerHTML += markdownOutput
    updateScroll()
  }

  const updateDownloadLink = (data) => {
    if (!data.output) {
      console.error("No output data received")
      return
    }

    const { pdf, docx, md, json } = data.output
    console.log("Received paths:", { pdf, docx, md, json })

    // Helper function to safely update link
    const updateLink = (id, path) => {
      const element = document.getElementById(id)
      if (element && path) {
        console.log(`Setting ${id} href to:`, path)
        element.setAttribute("href", path)
        element.classList.remove("disabled")
      } else {
        console.warn(`Either element ${id} not found or path not provided`)
      }
    }

    updateLink("downloadLink", pdf)
    updateLink("downloadLinkWord", docx)
    updateLink("downloadLinkMd", md)
    updateLink("downloadLinkJson", json)
  }

  const updateScroll = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }

  const copyToClipboard = () => {
    const textarea = document.createElement("textarea")
    textarea.id = "temp_element"
    textarea.style.height = 0
    document.body.appendChild(textarea)
    textarea.value = document.getElementById("reportContainer").innerText
    const selector = document.querySelector("#temp_element")
    selector.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
  }

  const updateState = (state) => {
    const statusElement = document.getElementById("status")
    let status = ""

    // Remove all existing status classes
    statusElement.classList.remove("status-error", "status-success", "status-info", "alert-info")

    switch (state) {
      case "in_progress":
        status = "Research in progress..."
        statusElement.classList.add("status-info")
        setReportActionsStatus("disabled")
        break
      case "finished":
        status = "Research finished!"
        statusElement.classList.add("status-success")
        setReportActionsStatus("enabled")
        break
      case "error":
        status = "Research failed!"
        statusElement.classList.add("status-error")
        setReportActionsStatus("disabled")
        break
      case "initial":
        status = ""
        setReportActionsStatus("hidden")
        break
      default:
        statusElement.classList.add("status-info")
        setReportActionsStatus("disabled")
    }

    statusElement.innerHTML = status

    if (status === "") {
      statusElement.style.display = "none"
    } else {
      statusElement.style.display = "block"
    }
  }

  /**
   * Shows or hides the download and copy buttons
   * @param {str} status Kind of hacky. Takes "enabled", "disabled", or "hidden". "Hidden is same as disabled but also hides the div"
   */
  const setReportActionsStatus = (status) => {
    const reportActions = document.getElementById("reportActions")
    // Disable everything in reportActions until research is finished

    if (status == "enabled") {
      reportActions.querySelectorAll("a").forEach((link) => {
        link.classList.remove("disabled")
        link.removeAttribute("onclick")
        reportActions.style.display = "block"
      })
    } else {
      reportActions.querySelectorAll("a").forEach((link) => {
        link.classList.add("disabled")
        link.setAttribute("onclick", "return false;")
      })
      if (status == "hidden") {
        reportActions.style.display = "none"
      }
    }
  }

  const tagsInput = document.getElementById("tags-input")
  const input = document.getElementById("custom_source")

  const tags = []

  const addTag = (url) => {
    if (tags.includes(url)) return
    tags.push(url)

    const tagElement = document.createElement("span")
    tagElement.className = "tag"
    tagElement.textContent = url

    const removeButton = document.createElement("span")
    removeButton.className = "remove-tag"
    removeButton.textContent = "x"
    removeButton.onclick = () => {
      tagsInput.removeChild(tagElement)
      tags.splice(tags.indexOf(url), 1)
    }

    tagElement.appendChild(removeButton)
    tagsInput.insertBefore(tagElement, input)
  }

  const displaySelectedImages = (data) => {
    const imageContainer = document.getElementById("selectedImagesContainer")
    //imageContainer.innerHTML = '<h3>Selected Images</h3>'
    const images = JSON.parse(data.output)
    console.log("Received images:", images) // Debug log
    if (images && images.length > 0) {
      images.forEach((imageUrl) => {
        const imgElement = document.createElement("img")
        imgElement.src = imageUrl
        imgElement.alt = "Research Image"
        imgElement.style.maxWidth = "200px"
        imgElement.style.margin = "5px"
        imgElement.style.cursor = "pointer"
        imgElement.onclick = () => showImageDialog(imageUrl)
        imageContainer.appendChild(imgElement)
      })
      imageContainer.style.display = "block"
    } else {
      imageContainer.innerHTML += "<p>No images found for this research.</p>"
    }
  }

  const showImageDialog = (imageUrl) => {
    const dialog = document.createElement("div")
    dialog.className = "image-dialog"

    const img = document.createElement("img")
    img.src = imageUrl
    img.alt = "Full-size Research Image"

    const closeBtn = document.createElement("button")
    closeBtn.textContent = "Close"
    closeBtn.onclick = () => document.body.removeChild(dialog)

    dialog.appendChild(img)
    dialog.appendChild(closeBtn)
    document.body.appendChild(dialog)
  }

  document.addEventListener("DOMContentLoaded", init)
  return {
    startResearch,
    copyToClipboard,
    changeSource,
    addTag,
    displaySelectedImages,
    showImageDialog,
  }
})()
