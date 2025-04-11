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
    // Navigation
    nav: {
      home: "Home",
      research: "Research",
      history: "History",
      about: "About",
      profile: "Profile",
      login: "Login",
      register: "Register",
      logout: "Logout",
    },
    // Login page
    login: {
      title: "Login",
      email: "Email",
      password: "Password",
      button: "Login",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      register: "Register here",
    },
    // Register page
    register: {
      title: "Register",
      name: "Full Name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      button: "Register",
      haveAccount: "Already have an account?",
      login: "Login here",
    },
    // About page
    about: {
      title: "About Deep Researcher",
      description:
        "Deep Researcher is an advanced research assistant powered by GPT-4, designed to help you gather information, analyze data, and generate comprehensive reports on any topic.",
      features: "Features",
      featuresList: {
        research: "Comprehensive web research",
        documents: "Local document analysis",
        reports: "Multiple report formats",
        languages: "Multilingual support",
        customization: "Customizable research parameters",
      },
      history: "Research History",
      noHistory: "No research history found. Start your first research!",
      viewReport: "View Report",
    },
    // Home page
    home: {
      heroTitle: "Deep Researcher",
      heroSubtitle: "Advanced AI-powered research assistant",
      startResearching: "Start Researching",
      learnMore: "Learn More",
      featuresTitle: "Powerful Research Tools",
      feature1Title: "Comprehensive Web Research",
      feature1Desc:
        "Access and analyze information from across the web with advanced search capabilities and intelligent filtering.",
      feature2Title: "Multiple Report Formats",
      feature2Desc:
        "Generate concise summaries, detailed reports, or resource compilations based on your specific needs.",
      feature3Title: "Multilingual Support",
      feature3Desc:
        "Research and generate reports in multiple languages, with automatic detection of your preferred language.",
      howItWorksTitle: "How It Works",
      step1Title: "Enter Your Research Topic",
      step1Desc: "Specify what you want to research, along with any preferences for report type, tone, and sources.",
      step2Title: "AI Conducts Research",
      step2Desc: "Our advanced AI agent searches for and analyzes relevant information from your specified sources.",
      step3Title: "Review Your Report",
      step3Desc: "Receive a comprehensive research report that you can download, copy, or save for future reference.",
      startResearch: "Start Your Research",
      useCasesTitle: "Use Cases",
      useCase1Title: "Academic Research",
      useCase1Desc:
        "Quickly gather information for papers, theses, or literature reviews with comprehensive citations and sources.",
      useCase2Title: "Business Intelligence",
      useCase2Desc:
        "Research market trends, competitor analysis, and industry developments to inform strategic decisions.",
      useCase3Title: "Content Creation",
      useCase3Desc:
        "Gather facts, statistics, and insights to create well-informed articles, blog posts, or presentations.",
      useCase4Title: "Personal Learning",
      useCase4Desc: "Explore new topics and subjects with in-depth reports tailored to your level of understanding.",
      ctaTitle: "Ready to enhance your research?",
      ctaDesc: "Join thousands of users who are already saving time and improving their research quality.",
      signUpNow: "Sign Up Now",
      tryWithoutAccount: "Try Without Account",
    },
    // Profile page
    profile: {
      title: "User Profile",
      personalInfo: "Personal Information",
      name: "Name",
      email: "Email",
      joinDate: "Join Date",
      updateProfile: "Update Profile",
      changePassword: "Change Password",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm New Password",
      updatePassword: "Update Password",
      preferences: "Preferences",
      defaultLanguage: "Default Report Language",
      defaultReportType: "Default Report Type",
      savePreferences: "Save Preferences",
      researchStats: "Research Statistics",
      totalResearches: "Total Researches",
      avgResearchTime: "Average Research Time",
      favoriteTopics: "Favorite Topics",
      recentActivity: "Recent Activity",
      noActivity: "No recent activity found.",
      deleteAccount: "Delete Account",
      deleteWarning: "Warning: This action cannot be undone. All your data will be permanently deleted.",
      deleteConfirm: "I understand, delete my account",
    },
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
    // Navigation
    nav: {
      home: "首页",
      research: "研究",
      history: "历史",
      about: "关于",
      profile: "个人资料",
      login: "登录",
      register: "注册",
      logout: "退出",
    },
    // Login page
    login: {
      title: "登录",
      email: "电子邮箱",
      password: "密码",
      button: "登录",
      forgotPassword: "忘记密码？",
      noAccount: "没有账号？",
      register: "在此注册",
    },
    // Register page
    register: {
      title: "注册",
      name: "全名",
      email: "电子邮箱",
      password: "密码",
      confirmPassword: "确认密码",
      button: "注册",
      haveAccount: "已有账号？",
      login: "在此登录",
    },
    // About page
    about: {
      title: "关于深度研究助手",
      description:
        "深度研究助手是一个由GPT-4驱动的高级研究助手，旨在帮助您收集信息、分析数据并生成关于任何主题的综合报告。",
      features: "功能特点",
      featuresList: {
        research: "全面的网络研究",
        documents: "本地文档分析",
        reports: "多种报告格式",
        languages: "多语言支持",
        customization: "可定制的研究参数",
      },
      history: "研究历史",
      noHistory: "未找到研究历史。开始您的第一次研究！",
      viewReport: "查看报告",
    },
    // Home page
    home: {
      heroTitle: "深度研究助手",
      heroSubtitle: "先进的AI驱动研究助手",
      startResearching: "开始研究",
      learnMore: "了解更多",
      featuresTitle: "强大的研究工具",
      feature1Title: "全面的网络研究",
      feature1Desc: "通过高级搜索功能和智能过滤，访问和分析来自网络的信息。",
      feature2Title: "多种报告格式",
      feature2Desc: "根据您的特定需求生成简洁摘要、详细报告或资源汇编。",
      feature3Title: "多语言支持",
      feature3Desc: "以多种语言进行研究和生成报告，自动检测您的首选语言。",
      howItWorksTitle: "工作原理",
      step1Title: "输入您的研究主题",
      step1Desc: "指定您想要研究的内容，以及报告类型、语调和来源的偏好。",
      step2Title: "AI进行研究",
      step2Desc: "我们的高级AI代理搜索并分析来自您指定来源的相关信息。",
      step3Title: "查看您的报告",
      step3Desc: "获取全面的研究报告，您可以下载、复制或保存以供将来参考。",
      startResearch: "开始您的研究",
      useCasesTitle: "使用场景",
      useCase1Title: "学术研究",
      useCase1Desc: "快速收集论文、论文或文献综述的信息，包含全面的引用和来源。",
      useCase2Title: "商业情报",
      useCase2Desc: "研究市场趋势、竞争对手分析和行业发展，为战略决策提供信息。",
      useCase3Title: "内容创作",
      useCase3Desc: "收集事实、统计数据和见解，创建信息丰富的文章、博客文章或演示文稿。",
      useCase4Title: "个人学习",
      useCase4Desc: "探索新主题和学科，获取根据您的理解水平定制的深入报告。",
      ctaTitle: "准备提升您的研究质量？",
      ctaDesc: "加入已经节省时间并提高研究质量的数千名用户。",
      signUpNow: "立即注册",
      tryWithoutAccount: "无需账户试用",
    },
    // Profile page
    profile: {
      title: "用户资料",
      personalInfo: "个人信息",
      name: "姓名",
      email: "电子邮箱",
      joinDate: "注册日期",
      updateProfile: "更新资料",
      changePassword: "修改密码",
      currentPassword: "当前密码",
      newPassword: "新密码",
      confirmPassword: "确认新密码",
      updatePassword: "更新密码",
      preferences: "偏好设置",
      defaultLanguage: "默认报告语言",
      defaultReportType: "默认报告类型",
      savePreferences: "保存偏好",
      researchStats: "研究统计",
      totalResearches: "研究总数",
      avgResearchTime: "平均研究时间",
      favoriteTopics: "常用主题",
      recentActivity: "最近活动",
      noActivity: "未找到最近活动。",
      deleteAccount: "删除账户",
      deleteWarning: "警告：此操作无法撤销。您的所有数据将被永久删除。",
      deleteConfirm: "我理解，删除我的账户",
    },
  },
  // 其他语言的翻译保持不变，但需要添加profile部分
  "zh-TW": {
    // 保留原有翻译...
    nav: {
      home: "首頁",
      research: "研究",
      history: "歷史",
      about: "關於",
      profile: "個人資料",
      login: "登入",
      register: "註冊",
      logout: "登出",
    },
    // 添加profile部分
    profile: {
      title: "用戶資料",
      personalInfo: "個人信息",
      name: "姓名",
      email: "電子郵箱",
      joinDate: "註冊日期",
      updateProfile: "更新資料",
      changePassword: "修改密碼",
      currentPassword: "當前密碼",
      newPassword: "新密碼",
      confirmPassword: "確認新密碼",
      updatePassword: "更新密碼",
      preferences: "偏好設置",
      defaultLanguage: "默認報告語言",
      defaultReportType: "默認報告類型",
      savePreferences: "保存偏好",
      researchStats: "研究統計",
      totalResearches: "研究總數",
      avgResearchTime: "常用主題",
      favoriteTopics: "常用主題",
      recentActivity: "最近活動",
      noActivity: "未找到最近活動。",
      deleteAccount: "刪除賬戶",
      deleteWarning: "警告：此操作無法撤銷。您的所有數據將被永久刪除。",
      deleteConfirm: "我理解，刪除我的賬戶",
    },
  },
  ja: {
    // 保留原有翻译...
    nav: {
      home: "ホーム",
      research: "研究",
      history: "履歴",
      about: "概要",
      profile: "プロフィール",
      login: "ログイン",
      register: "登録",
      logout: "ログアウト",
    },
    // 添加profile部分
    profile: {
      title: "ユーザープロフィール",
      personalInfo: "個人情報",
      name: "名前",
      email: "メールアドレス",
      joinDate: "登録日",
      updateProfile: "プロフィール更新",
      changePassword: "パスワード変更",
      currentPassword: "現在のパスワード",
      newPassword: "新しいパスワード",
      confirmPassword: "新しいパスワードの確認",
      updatePassword: "パスワード更新",
      preferences: "設定",
      defaultLanguage: "デフォルトレポート言語",
      defaultReportType: "デフォルトレポートタイプ",
      savePreferences: "設定を保存",
      researchStats: "研究統計",
      totalResearches: "研究総数",
      avgResearchTime: "平均研究時間",
      favoriteTopics: "よく使うトピック",
      recentActivity: "最近のアクティビティ",
      noActivity: "最近のアクティビティはありません。",
      deleteAccount: "アカウント削除",
      deleteWarning: "警告：この操作は元に戻せません。すべてのデータが完全に削除されます。",
      deleteConfirm: "理解しました、アカウントを削除します",
    },
  },
  ko: {
    // 保留原有翻译...
    nav: {
      home: "홈",
      research: "연구",
      history: "기록",
      about: "소개",
      profile: "프로필",
      login: "로그인",
      register: "회원가입",
      logout: "로그아웃",
    },
    // 添加profile部分
    profile: {
      title: "사용자 프로필",
      personalInfo: "개인 정보",
      name: "이름",
      email: "이메일",
      joinDate: "가입 날짜",
      updateProfile: "프로필 업데이트",
      changePassword: "비밀번호 변경",
      currentPassword: "현재 비밀번호",
      newPassword: "새 비밀번호",
      confirmPassword: "새 비밀번호 확인",
      updatePassword: "비밀번호 업데이트",
      preferences: "환경설정",
      defaultLanguage: "기본 보고서 언어",
      defaultReportType: "기본 보고서 유형",
      savePreferences: "환경설정 저장",
      researchStats: "연구 통계",
      totalResearches: "총 연구 수",
      avgResearchTime: "평균 연구 시간",
      favoriteTopics: "자주 사용하는 주제",
      recentActivity: "최근 활동",
      noActivity: "최근 활동을 찾을 수 없습니다.",
      deleteAccount: "계정 삭제",
      deleteWarning: "경고: 이 작업은 취소할 수 없습니다. 모든 데이터가 영구적으로 삭제됩니다.",
      deleteConfirm: "이해했습니다. 내 계정을 삭제합니다",
    },
  },
  es: {
    // 保留原有翻译...
    nav: {
      home: "Inicio",
      research: "Investigación",
      history: "Historial",
      about: "Acerca de",
      profile: "Perfil",
      login: "Iniciar sesión",
      register: "Registrarse",
      logout: "Cerrar sesión",
    },
    // 添加profile部分
    profile: {
      title: "Perfil de Usuario",
      personalInfo: "Información Personal",
      name: "Nombre",
      email: "Correo electrónico",
      joinDate: "Fecha de registro",
      updateProfile: "Actualizar Perfil",
      changePassword: "Cambiar Contraseña",
      currentPassword: "Contraseña Actual",
      newPassword: "Nueva Contraseña",
      confirmPassword: "Confirmar Nueva Contraseña",
      updatePassword: "Actualizar Contraseña",
      preferences: "Preferencias",
      defaultLanguage: "Idioma Predeterminado para Informes",
      defaultReportType: "Tipo de Informe Predeterminado",
      savePreferences: "Guardar Preferencias",
      researchStats: "Estadísticas de Investigación",
      totalResearches: "Total de Investigaciones",
      avgResearchTime: "Tiempo Promedio de Investigación",
      favoriteTopics: "Temas Favoritos",
      recentActivity: "Actividad Reciente",
      noActivity: "No se encontró actividad reciente.",
      deleteAccount: "Eliminar Cuenta",
      deleteWarning: "Advertencia: Esta acción no se puede deshacer. Todos sus datos serán eliminados permanentemente.",
      deleteConfirm: "Entiendo, eliminar mi cuenta",
    },
  },
  fr: {
    // 保留原有翻译...
    nav: {
      home: "Accueil",
      research: "Recherche",
      history: "Historique",
      about: "À propos",
      profile: "Profil",
      login: "Connexion",
      register: "Inscription",
      logout: "Déconnexion",
    },
    // 添加profile部分
    profile: {
      title: "Profil Utilisateur",
      personalInfo: "Informations Personnelles",
      name: "Nom",
      email: "Email",
      joinDate: "Date d'inscription",
      updateProfile: "Mettre à jour le profil",
      changePassword: "Changer le mot de passe",
      currentPassword: "Mot de passe actuel",
      newPassword: "Nouveau mot de passe",
      confirmPassword: "Confirmer le nouveau mot de passe",
      updatePassword: "Mettre à jour le mot de passe",
      preferences: "Préférences",
      defaultLanguage: "Langue par défaut des rapports",
      defaultReportType: "Type de rapport par défaut",
      savePreferences: "Enregistrer les préférences",
      researchStats: "Statistiques de recherche",
      totalResearches: "Total des recherches",
      avgResearchTime: "Temps moyen de recherche",
      favoriteTopics: "Sujets favoris",
      recentActivity: "Activité récente",
      noActivity: "Aucune activité récente trouvée.",
      deleteAccount: "Supprimer le compte",
      deleteWarning:
        "Avertissement : Cette action ne peut pas être annulée. Toutes vos données seront définitivement supprimées.",
      deleteConfirm: "Je comprends, supprimer mon compte",
    },
  },
}

// 在initLanguageSelector函数之前添加以下函数

// 翻译首页内容
function translateHomePage() {
  const lang = translations[currentLanguage]
  if (!lang || !lang.home) return

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n")
    if (key && key.includes(".")) {
      const [section, item] = key.split(".")
      if (lang[section] && lang[section][item]) {
        element.textContent = lang[section][item]
      }
    }
  })
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

  // Update navigation menu if it exists
  const navElements = document.querySelectorAll(".nav-link")
  if (navElements.length > 0) {
    navElements.forEach((navElement) => {
      const key = navElement.getAttribute("data-nav-key")
      if (key && lang.nav[key]) {
        navElement.textContent = lang.nav[key]
      }
    })
  }

  // Check if we're on the main research page
  if (document.querySelector('label[for="task"]')) {
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
  }

  // Check if we're on the login page
  if (document.querySelector(".login-container")) {
    document.querySelector(".login-title").textContent = lang.login.title
    document.querySelector('label[for="email"]').textContent = lang.login.email
    document.querySelector('label[for="password"]').textContent = lang.login.password
    document.querySelector(".login-button").textContent = lang.login.button
    document.querySelector(".forgot-password").textContent = lang.login.forgotPassword
    document.querySelector(".no-account-text").textContent = lang.login.noAccount
    document.querySelector(".register-link").textContent = lang.login.register
  }

  // Check if we're on the register page
  if (document.querySelector(".register-container")) {
    document.querySelector(".register-title").textContent = lang.register.title
    document.querySelector('label[for="name"]').textContent = lang.register.name
    document.querySelector('label[for="email"]').textContent = lang.register.email
    document.querySelector('label[for="password"]').textContent = lang.register.password
    document.querySelector('label[for="confirm-password"]').textContent = lang.register.confirmPassword
    document.querySelector(".register-button").textContent = lang.register.button
    document.querySelector(".have-account-text").textContent = lang.register.haveAccount
    document.querySelector(".login-link").textContent = lang.register.login
  }

  // Check if we're on the about page
  if (document.querySelector(".about-container")) {
    document.querySelector(".about-title").textContent = lang.about.title
    document.querySelector(".about-description").textContent = lang.about.description
    document.querySelector(".features-title").textContent = lang.about.features

    // Update features list
    const featuresList = document.querySelectorAll(".feature-item")
    const featuresKeys = Object.keys(lang.about.featuresList)
    for (let i = 0; i < featuresList.length && i < featuresKeys.length; i++) {
      featuresList[i].textContent = lang.about.featuresList[featuresKeys[i]]
    }

    document.querySelector(".history-title").textContent = lang.about.history

    // Check if there's no history
    const noHistoryElement = document.querySelector(".no-history")
    if (noHistoryElement) {
      noHistoryElement.textContent = lang.about.noHistory
    }

    // Update view report buttons
    const viewReportButtons = document.querySelectorAll(".view-report-btn")
    viewReportButtons.forEach((button) => {
      button.textContent = lang.about.viewReport
    })
  }

  // Check if we're on the profile page
  if (document.querySelector(".profile-container")) {
    document.querySelector(".profile-title").textContent = lang.profile.title
    document.querySelector(".personal-info-title").textContent = lang.profile.personalInfo
    document.querySelector('label[for="profile-name"]').textContent = lang.profile.name
    document.querySelector('label[for="profile-email"]').textContent = lang.profile.email
    document.querySelector(".join-date-label").textContent = lang.profile.joinDate
    document.querySelector(".update-profile-btn").textContent = lang.profile.updateProfile

    document.querySelector(".change-password-title").textContent = lang.profile.changePassword
    document.querySelector('label[for="current-password"]').textContent = lang.profile.currentPassword
    document.querySelector('label[for="new-password"]').textContent = lang.profile.newPassword
    document.querySelector('label[for="confirm-new-password"]').textContent = lang.profile.confirmNewPassword
    document.querySelector(".update-password-btn").textContent = lang.profile.updatePassword

    document.querySelector(".preferences-title").textContent = lang.profile.preferences
    document.querySelector('label[for="default-language"]').textContent = lang.profile.defaultLanguage
    document.querySelector('label[for="default-report-type"]').textContent = lang.profile.defaultReportType
    document.querySelector(".save-preferences-btn").textContent = lang.profile.savePreferences

    document.querySelector(".research-stats-title").textContent = lang.profile.researchStats
    document.querySelector(".total-researches-label").textContent = lang.profile.totalResearches
    document.querySelector(".avg-research-time-label").textContent = lang.profile.avgResearchTime
    document.querySelector(".favorite-topics-label").textContent = lang.profile.favoriteTopics

    document.querySelector(".recent-activity-title").textContent = lang.profile.recentActivity
    const noActivityElement = document.querySelector(".no-activity")
    if (noActivityElement) {
      noActivityElement.textContent = lang.profile.noActivity
    }

    document.querySelector(".delete-account-title").textContent = lang.profile.deleteAccount
    document.querySelector(".delete-warning").textContent = lang.profile.deleteWarning
    document.querySelector(".delete-confirm-btn").textContent = lang.profile.deleteConfirm
  }

  // 检查是否在首页
  if (document.querySelector(".hero-section")) {
    // 翻译首页元素
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n")
      if (key && key.includes(".") && lang[key.split(".")[0]] && lang[key.split(".")[0]][key.split(".")[1]]) {
        element.textContent = lang[key.split(".")[0]][key.split(".")[1]]
      }
    })
  }

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
    translateHomePage() // 添加这一行
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
  // 添加这一行
  translateHomePage()
  // 高亮当前页面
  highlightCurrentPage()
})

// Update createTitleBar function to add profile link and active page highlighting

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

  // Navigation menu
  const navMenu = document.createElement("nav")
  navMenu.className = "title-bar-nav"

  const navList = document.createElement("ul")
  navList.className = "nav-list"

  // Navigation items
  const navItems = [
    { key: "home", href: "/index.html" },
    { key: "research", href: "/research.html" },
    { key: "history", href: "/history.html" },
    { key: "about", href: "/about.html" },
  ]

  // Get current page path
  const currentPath = window.location.pathname

  navItems.forEach((item) => {
    const li = document.createElement("li")
    li.className = "nav-item"

    const a = document.createElement("a")
    a.className = "nav-link"
    // Add active class if this is the current page
    if (
      currentPath === item.href ||
      (currentPath.endsWith("/") && item.href === "/index.html") ||
      (currentPath === "/research" && item.href === "/research.html")
    ) {
      a.classList.add("active")
    }
    a.setAttribute("data-nav-key", item.key)
    a.href = item.href
    // Text content will be set by applyTranslations

    li.appendChild(a)
    navList.appendChild(li)
  })

  navMenu.appendChild(navList)

  // Actions container (for language selector and auth buttons)
  const actionsDiv = document.createElement("div")
  actionsDiv.className = "title-bar-actions"

  // Auth buttons
  const authDiv = document.createElement("div")
  authDiv.className = "auth-buttons"

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

  if (isLoggedIn) {
    // Show profile and logout links
    const profileLink = document.createElement("a")
    profileLink.className = "nav-link auth-link"
    profileLink.textContent = "Profile"
    profileLink.href = "/profile.html"
    // Add active class if this is the profile page
    if (currentPath === "/profile.html") {
      profileLink.classList.add("active")
    }

    const logoutLink = document.createElement("a")
    logoutLink.className = "nav-link auth-link"
    logoutLink.setAttribute("data-nav-key", "logout")
    logoutLink.href = "#"
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault()
      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("userName")
      localStorage.removeItem("userEmail")
      window.location.href = "/index.html"
    })

    authDiv.appendChild(profileLink)
    authDiv.appendChild(logoutLink)
  } else {
    // Show login and register links
    const loginLink = document.createElement("a")
    loginLink.className = "nav-link auth-link"
    loginLink.setAttribute("data-nav-key", "login")
    loginLink.href = "/login.html"
    // Add active class if this is the login page
    if (currentPath === "/login.html") {
      loginLink.classList.add("active")
    }

    const registerLink = document.createElement("a")
    registerLink.className = "nav-link auth-link"
    registerLink.setAttribute("data-nav-key", "register")
    registerLink.href = "/register.html"
    // Add active class if this is the register page
    if (currentPath === "/register.html") {
      registerLink.classList.add("active")
    }

    authDiv.appendChild(loginLink)
    authDiv.appendChild(registerLink)
  }

  actionsDiv.appendChild(authDiv)

  titleBar.appendChild(logoDiv)
  titleBar.appendChild(navMenu)
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

// 高亮当前页面
function highlightCurrentPage() {
  const currentPath = window.location.pathname
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    // 移除所有现有的active类
    link.classList.remove("active")

    // 获取链接的href属性
    const href = link.getAttribute("href")

    // 检查当前路径是否匹配链接的href
    if (href && currentPath.endsWith(href)) {
      link.classList.add("active")
    }

    // 特殊情况处理：首页
    if (currentPath === "/" && href === "/index.html") {
      link.classList.add("active")
    }
  })
}
