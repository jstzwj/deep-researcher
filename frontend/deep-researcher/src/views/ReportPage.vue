<template>
  <div
    class="min-h-screen rounded bg-white text-gray-800 dark:bg-gray-700 dark:text-white p-6 max-w-5xl mx-auto mt-4 shadow-lg"
  >
    <!-- Report Header -->
    <div class="mb-8 border-b pb-4">
      <h1 class="text-2xl font-bold mb-4">{{ $t('report.title') }}</h1>

      <!-- Research Question (Read-only) -->
      <div class="mb-6">
        <h2 class="font-semibold mb-2">{{ $t('research.researchTopicLabel') }}</h2>
        <div class="p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300 min-h-[80px]">
          {{ researchTopic }}
        </div>
      </div>

      <!-- Report Information -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Report Type (Read-only) -->
        <div>
          <h2 class="font-semibold mb-2">{{ $t('research.reportTypeLabel') }}</h2>
          <div class="p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300">
            {{ reportType }}
          </div>
        </div>

        <!-- Report Tone (Read-only) -->
        <div>
          <h2 class="font-semibold mb-2">{{ $t('research.toneLabel') }}</h2>
          <div class="p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300">
            {{ reportTone }}
          </div>
        </div>

        <!-- Report Source (Read-only) -->
        <div>
          <h2 class="font-semibold mb-2">{{ $t('research.sourceLabel') }}</h2>
          <div class="p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300">
            {{ reportSource }}
          </div>
        </div>

        <!-- Report Language (Read-only) -->
        <div>
          <h2 class="font-semibold mb-2">{{ $t('research.languageLabel') }}</h2>
          <div class="p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300">
            {{ getLanguageDisplay(language) }}
          </div>
        </div>
      </div>
    </div>

    <!-- 智能体输出 (Unchanged) -->
    <div class="mb-10">
      <h2 class="text-2xl font-bold mb-2">{{ $t('research.agentOutputTitle') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {{ $t('research.agentOutputNote') }}
      </p>
      <div class="bg-gray-100 rounded-lg p-6 min-h-[200px] border border-gray-200 text-gray-900">
        {{ aiOutput || $t('research.agentOutputPlaceholder') }}
      </div>
    </div>

    <!-- 研究报告 (Unchanged) -->
    <div class="mb-10">
      <h2 class="text-2xl font-bold mb-2">{{ $t('research.researchReportTitle') }}</h2>
      <div
        ref="reportContainer"
        class="bg-gray-100 rounded-lg p-6 min-h-[100px] border border-gray-200 text-gray-900"
      ></div>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-between">
      <button
        @click="goBack"
        class="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
      >
        {{ $t('report.backButton') }}
      </button>
      <button
        @click="downloadReport"
        class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
      >
        {{ $t('report.downloadButton') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Router setup
const router = useRouter()
const route = useRoute()

// Reactive state with data passed from research page
const researchTopic = ref(route.params.researchTopic || 'Sample research topic')
const reportType = ref(route.params.reportType || '摘要 - 简洁快速 (约2分钟)')
const reportTone = ref(route.params.reportTone || '客观 - 公正无偏见呈现现实和发现')
const reportSource = ref(route.params.reportSource || 'web')
const language = ref(route.params.language || 'english')
const aiOutput = ref(route.params.aiOutput || '')
const researchReport = ref(route.params.researchReport || '')
const reportContainer = ref(null)

// Helper function to get language display name
const getLanguageDisplay = (langCode) => {
  const languageMap = {
    english: 'English',
    'simplified-chinese': '简体中文',
    'traditional-chinese': '繁體中文',
    japanese: '日本語',
    korean: '한국어',
    spanish: 'Español',
    french: 'Français',
  }
  return languageMap[langCode] || langCode
}

// Navigation function
const goBack = () => {
  router.back()
}

// Download report function
const downloadReport = () => {
  // Create a blob with the report content
  const reportContent = researchReport.value
  const blob = new Blob([reportContent], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)

  // Create a temporary link and trigger download
  const a = document.createElement('a')
  a.href = url
  a.download = `Research_Report_${new Date().toISOString().split('T')[0]}.md`
  document.body.appendChild(a)
  a.click()

  // Clean up
  setTimeout(() => {
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, 100)
}

// Declare MathJax as a global property
let MathJax = null

// Math rendering functions (unchanged)
const setupMathRendering = () => {
  if (!window.texme) {
    window.texme = {
      useMathJax: true,
      protectMath: true,
      renderOnLoad: false,
      style: 'viewer',
    }
  }

  if (!MathJax) {
    MathJax = {
      startup: {
        ready: () => {
          MathJax.startup.defaultReady()
          console.log('MathJax is ready')
          renderMathContent()
        },
      },
      tex: {
        inlineMath: [['\$$', '\$$']],
        displayMath: [['\\[', '\\]']],
      },
      asciimath: {
        delimiters: [['`', '`']],
      },
      svg: {
        fontCache: 'global',
      },
    }

    // Load local scripts
    loadLocalScript('/js/tex-mml-svg.js', () => {
      loadLocalScript('/js/texme_1.2.2.js', () => {
        console.log('TeXMe loaded from local')
      })
    })
  } else {
    renderMathContent()
  }
}

const loadLocalScript = (path, callback) => {
  const existingScript = document.querySelector(`script[src="${path}"]`)
  if (existingScript) {
    if (callback) callback()
    return
  }

  const script = document.createElement('script')
  script.src = path
  script.onload = callback
  document.head.appendChild(script)
}

const renderMathContent = () => {
  if (!researchReport.value || !reportContainer.value) return

  if (window.texme && MathJax) {
    // Use texme to render Markdown and math formulas
    reportContainer.value.innerHTML = window.texme.render(researchReport.value)
    // Manually trigger MathJax rendering
    if (MathJax.typeset) {
      MathJax.typesetPromise()
    }
  }
}

// Watch for research report changes
watch(researchReport, () => {
  renderMathContent()
})

// Initialize on component mount
onMounted(() => {
  setupMathRendering()
})
</script>

<style>
/* Keep original styles unchanged */
/* MathJax formula styles */
.MathJax_SVG,
.MathJax_SVG_Display {
  margin: 0.5em 0;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: bold;
}

.markdown-content h1 {
  font-size: 1.8em;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.3em;
}

.markdown-content h2 {
  font-size: 1.5em;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.3em;
}

.markdown-content p {
  margin-bottom: 1em;
  line-height: 1.6;
}

.markdown-content ul,
.markdown-content ol {
  margin-bottom: 1em;
  padding-left: 2em;
}

.markdown-content li {
  margin-bottom: 0.5em;
}
</style>
