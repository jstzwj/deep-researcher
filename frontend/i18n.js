// Language translations
const translations = {
    en: {
      title: "GPT Researcher",
      description: "A research assistant powered by GPT-4",
      researchQuestion: "What would you like me to research next?",
      reportType: "What type of report would you like me to generate?",
      reportOptions: {
        summary: "Summary - Short and fast (~2 min)",
        detailed: "Detailed - In depth and longer (~5 min)",
        resource: "Resource Report",
      },
      toneQuestion: "In which tone would you like the report to be generated?",
      tones: {
        objective: "Objective - Impartial and unbiased presentation of facts and findings",
        formal: "Formal - Adheres to academic standards with sophisticated language and structure",
        analytical: "Analytical - Critical evaluation and detailed examination of data and theories",
        persuasive: "Persuasive - Convincing the audience of a particular viewpoint or argument",
        informative: "Informative - Providing clear and comprehensive information on a topic",
        explanatory: "Explanatory - Clarifying complex concepts and processes",
        descriptive: "Descriptive depiction of phenomena, experiments, or case studies",
        critical: "Critical - Judging the validity and relevance of the research and its conclusions",
        comparative:
          "Comparative - Juxtaposing different theories, data, or methods to highlight differences and similarities",
        speculative: "Speculative - Exploring hypotheses and potential implications or future research directions",
        reflective: "Reflective - Considering the research process and personal insights or experiences",
        narrative: "Narrative - Telling a story to illustrate research findings or methodologies",
        humorous: "Humorous - Light-hearted and engaging, usually to make the content more relatable",
        optimistic: "Optimistic - Highlighting positive findings and potential benefits",
        pessimistic: "Pessimistic - Focusing on limitations, challenges, or negative outcomes",
      },
      sourceQuestion: "What sources would you like me to research from?",
      sourceDescription:
        "You can now do research on local documents as well. Please make sure to add the DOC_PATH env variable pointing to your documents folder.",
      sources: {
        web: "The Web",
        local: "My Documents",
        hybrid: "Hybrid",
        deep: "Deep Research",
        azure: "Azure storage",
      },
      queryDomains: "Query Domains (Optional)",
      domainsExample: "Example: techcrunch.com, forbes.com",
      outputLanguageQuestion: "In which language would you like the report to be generated?",
      researchButton: "Research",
      agentOutput: "Agent Output",
      agentDescription:
        "An agent tailored specifically to your task will be generated to provide the most precise and relevant research results.",
      researchReport: "Research Report",
      copyClipboard: "Copy to clipboard (markdown)",
      downloadMd: "Download as Markdown",
      downloadPdf: "Download as PDF",
      downloadDocx: "Download as Docx",
      downloadLog: "Download Log",
      footer: "Deep Researcher © 2025",
    },
    "zh-CN": {
      title: "GPT 研究助手",
      description: "由 GPT 驱动的研究助手",
      researchQuestion: "您想让我研究什么？",
      reportType: "您希望我生成什么类型的报告？",
      reportOptions: {
        summary: "摘要 - 简短快速（约2分钟）",
        detailed: "详细 - 深入且更长（约5分钟）",
        resource: "资源报告",
      },
      toneQuestion: "您希望报告以什么语调生成？",
      tones: {
        objective: "客观 - 公正无偏见地呈现事实和发现",
        formal: "正式 - 遵循学术标准，使用复杂的语言和结构",
        analytical: "分析性 - 对数据和理论进行批判性评估和详细检查",
        persuasive: "有说服力 - 说服受众接受特定观点或论点",
        informative: "信息性 - 提供关于主题的清晰全面的信息",
        explanatory: "解释性 - 阐明复杂概念和过程",
        descriptive: "描述性 - 详细描述现象、实验或案例研究",
        critical: "批判性 - 判断研究及其结论的有效性和相关性",
        comparative: "比较性 - 并列不同理论、数据或方法以突出差异和相似之处",
        speculative: "推测性 - 探索假设和潜在影响或未来研究方向",
        reflective: "反思性 - 考虑研究过程和个人见解或经验",
        narrative: "叙述性 - 讲述故事以说明研究发现或方法",
        humorous: "幽默 - 轻松愉快，通常使内容更具亲和力",
        optimistic: "乐观 - 强调积极发现和潜在益处",
        pessimistic: "悲观 - 关注局限性、挑战或负面结果",
      },
      sourceQuestion: "您希望我从哪些来源进行研究？",
      sourceDescription: "您现在也可以对本地文档进行研究。请确保添加指向文档文件夹的 DOC_PATH 环境变量。",
      sources: {
        web: "网络",
        local: "我的文档",
        hybrid: "混合",
        deep: "深度研究",
        azure: "Azure 存储",
      },
      queryDomains: "查询域（可选）",
      domainsExample: "示例：techcrunch.com, forbes.com",
      outputLanguageQuestion: "您希望报告以哪种语言生成？",
      researchButton: "研究",
      agentOutput: "智能体输出",
      agentDescription: "将生成专门针对您任务的智能体，以提供最精确和相关的研究结果。",
      researchReport: "研究报告",
      copyClipboard: "复制到剪贴板（markdown）",
      downloadMd: "下载为 Markdown",
      downloadPdf: "下载为 PDF",
      downloadDocx: "下载为 Docx",
      downloadLog: "下载日志",
      footer: "深度研究助手 © 2025",
    },
    "zh-TW": {
      title: "GPT 研究助手",
      description: "由 GPT 驅動的研究助手",
      researchQuestion: "您想讓我研究什麼？",
      reportType: "您希望我生成什麼類型的報告？",
      reportOptions: {
        summary: "摘要 - 簡短快速（約2分鐘）",
        detailed: "詳細 - 深入且更長（約5分鐘）",
        resource: "資源報告",
      },
      toneQuestion: "您希望報告以什麼語調生成？",
      tones: {
        objective: "客觀 - 公正無偏見地呈現事實和發現",
        formal: "正式 - 遵循學術標準，使用複雜的語言和結構",
        analytical: "分析性 - 對數據和理論進行批判性評估和詳細檢查",
        persuasive: "有說服力 - 說服受眾接受特定觀點或論點",
        informative: "信息性 - 提供關於主題的清晰全面的信息",
        explanatory: "闡明複雜概念和過程",
        descriptive: "詳細描述現象、實驗或案例研究",
        critical: "判斷研究及其結論的有效性和相關性",
        comparative: "並列不同理論、數據或方法以突出差異和相似之處",
        speculative: "探索假設和潛在影響或未來研究方向",
        reflective: "考慮研究過程和個人見解或經驗",
        narrative: "講述故事以說明研究發現或方法",
        humorous: "輕鬆愉快，通常使內容更具親和力",
        optimistic: "強調積極發現和潛在益處",
        pessimistic: "關注局限性、挑戰或負面結果",
      },
      sourceQuestion: "您希望我從哪些來源進行研究？",
      sourceDescription: "您現在也可以對本地文檔進行研究。請確保添加指向文檔文件夾的 DOC_PATH 環境變量。",
      sources: {
        web: "網絡",
        local: "我的文檔",
        hybrid: "混合",
        deep: "深度研究",
        azure: "Azure 存儲",
      },
      queryDomains: "查詢域（可選）",
      domainsExample: "示例：techcrunch.com, forbes.com",
      outputLanguageQuestion: "您希望報告以哪種語言生成？",
      researchButton: "研究",
      agentOutput: "智能體輸出",
      agentDescription: "將生成專門針對您任務的智能體，以提供最精確和相關的研究結果。",
      researchReport: "研究報告",
      copyClipboard: "複製到剪貼板（markdown）",
      downloadMd: "下載為 Markdown",
      downloadPdf: "下載為 PDF",
      downloadDocx: "下載為 Docx",
      downloadLog: "下載日誌",
      footer: "深度研究助手 © 2025",
    },
    ja: {
      title: "GPT リサーチャー",
      description: "GPT-4を搭載した研究アシスタント",
      researchQuestion: "次に何を研究しましょうか？",
      reportType: "どのタイプのレポートを生成しますか？",
      reportOptions: {
        summary: "要約 - 短くて速い（約2分）",
        detailed: "詳細 - 深く、より長い（約5分）",
        resource: "リソースレポート",
      },
      toneQuestion: "レポートをどのようなトーンで生成しますか？",
      tones: {
        objective: "客観的 - 事実と発見を公平かつ偏りなく提示",
        formal: "形式的 - 洗練された言語と構造で学術的基準に準拠",
        analytical: "分析的 - データと理論の批判的評価と詳細な検討",
        persuasive: "説得力のある - 特定の視点や議論について聴衆を説得",
        informative: "情報提供的 - トピックに関する明確で包���的な情報を提供",
        explanatory: "説明的 - 複雑な概念とプロセスを明確にする",
        descriptive: "記述的 - 現象、実験、またはケーススタディの詳細な描写",
        critical: "批判的 - 研究とその結論の妥当性と関連性を判断",
        comparative: "比較的 - 異なる理論、データ、または方法を並置して違いと類似点を強調",
        speculative: "思索的 - 仮説と潜在的な影響または将来の研究方向を探る",
        reflective: "反省的 - 研究プロセスと個人的な洞察や経験を考慮",
        narrative: "物語的 - 研究結果や方法論を説明するためのストーリーテリング",
        humorous: "ユーモラス - 軽快で魅力的、通常はコンテンツをより親しみやすくする",
        optimistic: "楽観的 - 肯定的な発見と潜在的な利点を強調",
        pessimistic: "悲観的 - 制限、課題、または否定的な結果に焦点を当てる",
      },
      sourceQuestion: "どのソースから研究しますか？",
      sourceDescription:
        "ローカルドキュメントでも研究できるようになりました。ドキュメントフォルダを指すDOC_PATH環境変数を追加してください。",
      sources: {
        web: "ウェブ",
        local: "マイドキュメント",
        hybrid: "ハイブリッド",
        deep: "ディープリサーチ",
        azure: "Azureストレージ",
      },
      queryDomains: "クエリドメイン（オプション）",
      domainsExample: "例：techcrunch.com, forbes.com",
      outputLanguageQuestion: "レポートをどの言語で生成しますか？",
      researchButton: "研究",
      agentOutput: "エージェント出力",
      agentDescription: "あなたのタスクに特化したエージェントが生成され、最も正確で関連性の高い研究結果を提供します。",
      researchReport: "研究レポート",
      copyClipboard: "クリップボードにコピー（markdown）",
      downloadMd: "Markdownとしてダウンロード",
      downloadPdf: "PDFとしてダウンロード",
      downloadDocx: "Docxとしてダウンロード",
      downloadLog: "ログをダウンロード",
      footer: "ディープリサーチャー © 2025",
    },
    ko: {
      title: "GPT 연구원",
      description: "GPT-4로 구동되는 연구 보조원",
      researchQuestion: "다음에 무엇을 연구하시겠습니까?",
      reportType: "어떤 유형의 보고서를 생성하시겠습니까?",
      reportOptions: {
        summary: "요약 - 짧고 빠름 (약 2분)",
        detailed: "상세 - 심층적이고 더 긴 (약 5분)",
        resource: "리소스 보고서",
      },
      toneQuestion: "보고서를 어떤 톤으로 생성하시겠습니까?",
      tones: {
        objective: "객관적 - 사실과 발견을 공정하고 편향되지 않게 제시",
        formal: "형식적 - 세련된 언어와 구조로 학술적 표준을 준수",
        analytical: "분석적 - 데이터와 이론에 대한 비판적 평가와 상세한 검토",
        persuasive: "설득력 있는 - 특정 관점이나 주장에 대해 청중을 설득",
        informative: "정보 제공적 - 주제에 대한 명확하고 포괄적인 정보 제공",
        explanatory: "설명적 - 복잡한 개념과 프로세스를 명확히 함",
        descriptive: "묘사적 - 현상, 실험 또는 사례 연구에 대한 상세한 묘사",
        critical: "비판적 - 연구와 그 결론의 타당성과 관련성을 판단",
        comparative: "비교적 - 다른 이론, 데이터 또는 방법을 병치하여 차이점과 유사점을 강조",
        speculative: "사변적 - 가설과 잠재적 영향 또는 미래 연구 방향을 탐색",
        reflective: "성찰적 - 연구 과정과 개인적 통찰이나 경험을 고려",
        narrative: "서술적 - 연구 결과나 방법론을 설명하기 위한 이야기 전달",
        humorous: "유머러스 - 가볍고 매력적, 일반적으로 콘텐츠를 더 친근하게 만듦",
        optimistic: "낙관적 - 긍정적인 발견과 잠재적 이점을 강조",
        pessimistic: "비관적 - 제한, 도전 또는 부정적인 결과에 초점",
      },
      sourceQuestion: "어떤 소스에서 연구하시겠습니까?",
      sourceDescription: "이제 로컬 문서에서도 연구할 수 있습니다. 문서 폴더를 가리키는 DOC_PATH 환경 변수를 추가하세요.",
      sources: {
        web: "웹",
        local: "내 문서",
        hybrid: "하이브리드",
        deep: "심층 연구",
        azure: "Azure 스토리지",
      },
      queryDomains: "쿼리 도메인 (선택 사항)",
      domainsExample: "예: techcrunch.com, forbes.com",
      outputLanguageQuestion: "보고서를 어떤 언어로 생성하시겠습니까?",
      researchButton: "연구",
      agentOutput: "에이전트 출력",
      agentDescription: "귀하의 작업에 맞춤화된 에이전트가 생성되어 가장 정확하고 관련성 높은 연구 결과를 제공합니다.",
      researchReport: "연구 보고서",
      copyClipboard: "클립보드에 복사 (마크다운)",
      downloadMd: "마크다운으로 다운로드",
      downloadPdf: "PDF로 다운로드",
      downloadDocx: "Docx로 다운로드",
      downloadLog: "로그 다운로드",
      footer: "딥 리서처 © 2025",
    },
    es: {
      title: "GPT Investigador",
      description: "Un asistente de investigación impulsado por GPT-4",
      researchQuestion: "¿Qué te gustaría que investigue a continuación?",
      reportType: "¿Qué tipo de informe te gustaría que genere?",
      reportOptions: {
        summary: "Resumen - Corto y rápido (~2 min)",
        detailed: "Detallado - En profundidad y más largo (~5 min)",
        resource: "Informe de recursos",
      },
      toneQuestion: "¿En qué tono te gustaría que se genere el informe?",
      tones: {
        objective: "Objetivo - Presentación imparcial y sin sesgos de hechos y hallazgos",
        formal: "Formal - Se adhiere a estándares académicos con lenguaje y estructura sofisticados",
        analytical: "Analítico - Evaluación crítica y examen detallado de datos y teorías",
        persuasive: "Persuasivo - Convencer a la audiencia de un punto de vista o argumento particular",
        informative: "Informativo - Proporcionar información clara y completa sobre un tema",
        explanatory: "Explicativo - Aclarar conceptos y procesos complejos",
        descriptive: "Descriptivo - Representación detallada de fenómenos, experimentos o estudios de caso",
        critical: "Crítico - Juzgar la validez y relevancia de la investigación y sus conclusiones",
        comparative:
          "Comparativo - Yuxtaponer diferentes teorías, datos o métodos para resaltar diferencias y similitudes",
        speculative:
          "Especulativo - Explorar hipótesis e implicaciones potenciales o direcciones de investigación futuras",
        reflective: "Reflexivo - Considerar el proceso de investigación y las percepciones o experiencias personales",
        narrative: "Narrativo - Contar una historia para ilustrar hallazgos o metodologías de investigación",
        humorous: "Humorístico - Ligero y atractivo, generalmente para hacer que el contenido sea más accesible",
        optimistic: "Optimista - Destacar hallazgos positivos y beneficios potenciales",
        pessimistic: "Pesimista - Centrarse en limitaciones, desafíos o resultados negativos",
      },
      sourceQuestion: "¿De qué fuentes te gustaría que investigue?",
      sourceDescription:
        "Ahora también puedes investigar en documentos locales. Asegúrate de agregar la variable de entorno DOC_PATH que apunte a tu carpeta de documentos.",
      sources: {
        web: "La Web",
        local: "Mis Documentos",
        hybrid: "Híbrido",
        deep: "Investigación Profunda",
        azure: "Almacenamiento Azure",
      },
      queryDomains: "Dominios de consulta (Opcional)",
      domainsExample: "Ejemplo: techcrunch.com, forbes.com",
      outputLanguageQuestion: "¿En qué idioma te gustaría que se genere el informe?",
      researchButton: "Investigar",
      agentOutput: "Salida del Agente",
      agentDescription:
        "Se generará un agente adaptado específicamente a tu tarea para proporcionar los resultados de investigación más precisos y relevantes.",
      researchReport: "Informe de Investigación",
      copyClipboard: "Copiar al portapapeles (markdown)",
      downloadMd: "Descargar como Markdown",
      downloadPdf: "Descargar como PDF",
      downloadDocx: "Descargar como Docx",
      downloadLog: "Descargar Registro",
      footer: "Investigador Profundo © 2025",
    },
    fr: {
      title: "GPT Chercheur",
      description: "Un assistant de recherche propulsé par GPT-4",
      researchQuestion: "Que souhaitez-vous que je recherche ensuite ?",
      reportType: "Quel type de rapport souhaitez-vous que je génère ?",
      reportOptions: {
        summary: "Résumé - Court et rapide (~2 min)",
        detailed: "Détaillé - En profondeur et plus long (~5 min)",
        resource: "Rapport de ressources",
      },
      toneQuestion: "Dans quel ton souhaitez-vous que le rapport soit généré ?",
      tones: {
        objective: "Objectif - Présentation impartiale et non biaisée des faits et des résultats",
        formal: "Formel - Adhère aux normes académiques avec un langage et une structure sophistiqués",
        analytical: "Analytique - Évaluation critique et examen détaillé des données et des théories",
        persuasive: "Persuasif - Convaincre l'audience d'un point de vue ou d'un argument particulier",
        informative: "Informatif - Fournir des informations claires et complètes sur un sujet",
        explanatory: "Explicatif - Clarifier des concepts et des processus complexes",
        descriptive: "Descriptif - Représentation détaillée de phénomènes, d'expériences ou d'études de cas",
        critical: "Critique - Juger la validité et la pertinence de la recherche et de ses conclusions",
        comparative:
          "Comparatif - Juxtaposer différentes théories, données ou méthodes pour mettre en évidence les différences et les similitudes",
        speculative:
          "Spéculatif - Explorer des hypothèses et des implications potentielles ou des directions de recherche futures",
        reflective: "Réflexif - Considérer le processus de recherche et les idées ou expériences personnelles",
        narrative: "Narratif - Raconter une histoire pour illustrer les résultats ou les méthodologies de recherche",
        humorous: "Humoristique - Léger et engageant, généralement pour rendre le contenu plus accessible",
        optimistic: "Optimiste - Mettre en évidence les résultats positifs et les avantages potentiels",
        pessimistic: "Pessimiste - Se concentrer sur les limitations, les défis ou les résultats négatifs",
      },
      sourceQuestion: "De quelles sources souhaitez-vous que je recherche ?",
      sourceDescription:
        "Vous pouvez maintenant également faire des recherches sur des documents locaux. Veuillez vous assurer d'ajouter la variable d'environnement DOC_PATH pointant vers votre dossier de documents.",
      sources: {
        web: "Le Web",
        local: "Mes Documents",
        hybrid: "Hybride",
        deep: "Recherche Approfondie",
        azure: "Stockage Azure",
      },
      queryDomains: "Domaines de requête (Optionnel)",
      domainsExample: "Exemple : techcrunch.com, forbes.com",
      outputLanguageQuestion: "Dans quelle langue souhaitez-vous que le rapport soit généré ?",
      researchButton: "Rechercher",
      agentOutput: "Sortie de l'Agent",
      agentDescription:
        "Un agent adapté spécifiquement à votre tâche sera généré pour fournir les résultats de recherche les plus précis et pertinents.",
      researchReport: "Rapport de Recherche",
      copyClipboard: "Copier dans le presse-papiers (markdown)",
      downloadMd: "Télécharger en Markdown",
      downloadPdf: "Télécharger en PDF",
      downloadDocx: "Télécharger en Docx",
      downloadLog: "Télécharger le Journal",
      footer: "Chercheur Profond © 2025",
    },
  }
  
  // Detect browser language
  function detectLanguage() {
    const browserLang = navigator.language
  
    // Check for language with region code first (e.g., zh-TW)
    if (translations[browserLang]) {
      return browserLang
    }
  
    // Then check for language code only (e.g., zh from zh-TW)
    const langCode = browserLang.split("-")[0]
  
    // Map simplified language codes to our supported variants
    if (langCode === "zh") {
      // Default to Simplified Chinese if we can't determine the variant
      return "zh-CN"
    }
  
    return translations[langCode] ? langCode : "en" // Default to English if not supported
  }
  
  // Initialize language
  let currentLanguage = detectLanguage()
  
  // Apply translations to the page
  function applyTranslations() {
    const lang = translations[currentLanguage]
  
    // Update document title
    document.title = lang.title
  
    // Update title bar text
    const titleElement = document.querySelector(".title-bar-logo h1")
    if (titleElement) {
      titleElement.textContent = lang.title
    }
  
    // Update meta description
    document.querySelector('meta[name="description"]').setAttribute("content", lang.description)
  
    // Update form labels
    document.querySelector('label[for="task"]').textContent = lang.researchQuestion
    document.querySelector('label[for="report_type"]').textContent = lang.reportType
    document.querySelector('label[for="tone"]').textContent = lang.toneQuestion
    document.querySelector('label[for="report_source"]').textContent = lang.sourceQuestion
    document.querySelector('label[for="queryDomains"]').textContent = lang.queryDomains
  
    // Update output language question
    const outputLangLabel = document.querySelector(".output-language-options").previousElementSibling
    if (outputLangLabel) {
      outputLangLabel.textContent = lang.outputLanguageQuestion
    }
  
    // Update small text
    document.querySelector("small.text-muted").textContent = lang.domainsExample
    document.querySelector('p.text-left[style="font-size: 0.7rem;"]').textContent = lang.sourceDescription
  
    // Update report type options
    const reportTypeSelect = document.querySelector('select[name="report_type"]')
    reportTypeSelect.options[0].textContent = lang.reportOptions.summary
    reportTypeSelect.options[1].textContent = lang.reportOptions.detailed
    reportTypeSelect.options[2].textContent = lang.reportOptions.resource
  
    // Update tone options
    const toneSelect = document.querySelector('select[name="tone"]')
    for (let i = 0; i < toneSelect.options.length; i++) {
      const toneKey = Object.keys(lang.tones)[i]
      if (toneKey && lang.tones[toneKey]) {
        toneSelect.options[i].textContent = lang.tones[toneKey]
      }
    }
  
    // Update source options
    const sourceSelect = document.querySelector('select[name="report_source"]')
    sourceSelect.options[0].textContent = lang.sources.web
    sourceSelect.options[1].textContent = lang.sources.local
    sourceSelect.options[2].textContent = lang.sources.hybrid
    sourceSelect.options[3].textContent = lang.sources.deep
    sourceSelect.options[4].textContent = lang.sources.azure
  
    // Update button text
    document.querySelector('input[type="submit"]').value = lang.researchButton
  
    // Update headings
    document.querySelectorAll("h2")[0].textContent = lang.agentOutput
    document.querySelectorAll("h2")[1].textContent = lang.researchReport
  
    // Update paragraph
    document.querySelector("p.mt-2.text-left").textContent = lang.agentDescription
  
    // Update action buttons
    document.getElementById("copyToClipboard").textContent = lang.copyClipboard
    document.getElementById("downloadLinkMd").textContent = lang.downloadMd
    document.getElementById("downloadLink").textContent = lang.downloadPdf
    document.getElementById("downloadLinkWord").textContent = lang.downloadDocx
    document.getElementById("downloadLinkJson").textContent = lang.downloadLog
  
    // Update footer
    document.querySelector("footer p").textContent = lang.footer
  }
  
  // Initialize language selector
  function initLanguageSelector() {
    // Check for saved preference
    const savedLang = localStorage.getItem("preferredLanguage")
    if (savedLang && translations[savedLang]) {
      currentLanguage = savedLang
    }
  
    const languages = {
      en: "English",
      "zh-CN": "简体中文",
      "zh-TW": "繁體中文",
      ja: "日本語",
      ko: "한국어",
      es: "Español",
      fr: "Français",
    }
  
    // Create language selector
    const langSelector = document.createElement("div")
    langSelector.className = "language-selector"
  
    // Create button
    const langButton = document.createElement("button")
    langButton.className = "language-btn"
    langButton.type = "button"
    langButton.textContent = languages[currentLanguage]
    langButton.id = "language-btn"
  
    // Create dropdown
    const dropdown = document.createElement("div")
    dropdown.className = "language-dropdown"
    dropdown.id = "language-dropdown"
  
    // Add language options
    for (const [code, name] of Object.entries(languages)) {
      const option = document.createElement("div")
      option.className = "language-option" + (code === currentLanguage ? " active" : "")
      option.dataset.lang = code
      option.textContent = name
  
      option.addEventListener("click", () => {
        updateLanguage(code)
        document.querySelectorAll(".language-option").forEach((opt) => {
          opt.classList.remove("active")
        })
        option.classList.add("active")
        langButton.textContent = name
        dropdown.classList.remove("show")
      })
  
      dropdown.appendChild(option)
    }
  
    // Toggle dropdown
    langButton.addEventListener("click", () => {
      dropdown.classList.toggle("show")
    })
  
    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!langSelector.contains(e.target)) {
        dropdown.classList.remove("show")
      }
    })
  
    langSelector.appendChild(langButton)
    langSelector.appendChild(dropdown)
  
    // Add to title bar actions instead of body
    const titleBarActions = document.querySelector(".title-bar-actions")
    if (titleBarActions) {
      titleBarActions.appendChild(langSelector)
    }
  
    // Apply initial translations
    applyTranslations()
  }
  
  // Change language function
  function updateLanguage(lang) {
    if (translations[lang]) {
      currentLanguage = lang
      applyTranslations()
      localStorage.setItem("preferredLanguage", lang)
  
      // Update button text
      const languages = {
        en: "English",
        "zh-CN": "简体中文",
        "zh-TW": "繁體中文",
        ja: "日本語",
        ko: "한국어",
        es: "Español",
        fr: "Français",
      }
      const langButton = document.getElementById("language-btn")
      if (langButton) {
        langButton.textContent = languages[lang]
      }
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Create title bar first
    createTitleBar()
    // Then initialize language selector
    initLanguageSelector()
  })
  
  // Create title bar
  function createTitleBar() {
    const titleBar = document.createElement("div")
    titleBar.className = "title-bar"
  
    // Logo and title
    const logoDiv = document.createElement("div")
    logoDiv.className = "title-bar-logo"
  
    const logoImg = document.createElement("img")
    logoImg.src = "/static/gptr-logo.png"
    logoImg.alt = "Deep Researcher Logo"
  
    const title = document.createElement("h1")
    title.textContent = "GPT Researcher" // Will be translated later
  
    logoDiv.appendChild(logoImg)
    logoDiv.appendChild(title)
  
    // Actions container (for language selector)
    const actionsDiv = document.createElement("div")
    actionsDiv.className = "title-bar-actions"
  
    titleBar.appendChild(logoDiv)
    titleBar.appendChild(actionsDiv)
  
    // Insert at the beginning of the body
    document.body.insertBefore(titleBar, document.body.firstChild)
  }
  
  // Add script to handle output language checkboxes
  document.addEventListener("DOMContentLoaded", () => {
    // Ensure at least one language is selected
    const outputLangCheckboxes = document.querySelectorAll('input[name="output_language"]')
  
    outputLangCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        // Count how many are checked
        const checkedCount = document.querySelectorAll('input[name="output_language"]:checked').length
  
        // If none are checked, re-check this one
        if (checkedCount === 0) {
          this.checked = true
        }
      })
    })
  })
  