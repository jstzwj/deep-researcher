<template>
  <div class="min-h-screen bg-white text-gray-800 p-6 max-w-5xl mx-auto mt-4 shadow-lg">
    <!-- 研究问题输入 -->
    <div class="mb-8">
      <label for="research-topic" class="block mb-2">{{ $t('research.researchTopicLabel') }}</label>
      <textarea
        id="research-topic"
        v-model="researchTopic"
        class="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300"
        rows="3"
      ></textarea>
    </div>

    <!-- 报告类型 -->
    <div class="mb-8">
      <label for="report_type" class="block mb-2">{{ $t('research.reportTypeLabel') }}</label>
      <select
        name="report_type"
        class="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300"
        required
      >
        <option value="research_report">{{ $t('research.reportTypes.summary') }}</option>
        <option value="detailed_report">{{ $t('research.reportTypes.detailed') }}</option>
        <option value="resource_report">{{ $t('research.reportTypes.resource') }}</option>
      </select>
    </div>

    <!-- 报告语调 -->
    <div class="mb-8">
      <label for="tone" class="block mb-2">{{ $t('research.toneLabel') }}</label>
      <select
        name="tone"
        id="tone"
        class="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300"
        required
      >
        <option value="Objective">{{ $t('research.tones.objective') }}</option>
        <option value="Formal">{{ $t('research.tones.formal') }}</option>
        <option value="Analytical">{{ $t('research.tones.analytical') }}</option>
        <option value="Persuasive">{{ $t('research.tones.persuasive') }}</option>
        <option value="Informative">{{ $t('research.tones.informative') }}</option>
        <option value="Explanatory">{{ $t('research.tones.explanatory') }}</option>
        <option value="Descriptive">{{ $t('research.tones.descriptive') }}</option>
        <option value="Critical">{{ $t('research.tones.critical') }}</option>
        <option value="Comparative">{{ $t('research.tones.comparative') }}</option>
        <option value="Speculative">{{ $t('research.tones.speculative') }}</option>
        <option value="Reflective">{{ $t('research.tones.reflective') }}</option>
        <option value="Narrative">{{ $t('research.tones.narrative') }}</option>
        <option value="Humorous">{{ $t('research.tones.humorous') }}</option>
        <option value="Optimistic">{{ $t('research.tones.optimistic') }}</option>
        <option value="Pessimistic">{{ $t('research.tones.pessimistic') }}</option>
      </select>
    </div>

    <!-- 研究来源 -->
    <div class="mb-8">
      <label for="report_source" class="block mb-2">{{ $t('research.sourceLabel') }}</label>
      <p class="text-sm text-gray-600 mb-2" style="font-size: 0.7rem">
        {{ $t('research.sourceNote') }}
      </p>
      <select
        name="report_source"
        class="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300 mb-3"
        required
      >
        <option value="web">{{ $t('research.sources.web') }}</option>
        <option value="local">{{ $t('research.sources.local') }}</option>
        <option value="hybrid">{{ $t('research.sources.hybrid') }}</option>
        <option value="deep">{{ $t('research.sources.deep') }}</option>
        <option value="azure">{{ $t('research.sources.azure') }}</option>
      </select>

      <div>
        <label for="domains" class="block mb-2 text-sm">{{ $t('research.domainsLabel') }}</label>
        <input
          id="domains"
          v-model="domains"
          class="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-300"
          :placeholder="$t('research.domainsPlaceholder')"
        />
        <p class="text-xs text-gray-400 mt-1">{{ $t('research.domainsExample') }}</p>
      </div>
    </div>

    <!-- 报告语言 -->
    <div class="mb-8">
      <p class="mb-3">{{ $t('research.languageLabel') }}</p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <label class="flex items-center space-x-2">
          <input
            type="radio"
            v-model="language"
            value="english"
            class="form-radio text-blue-500"
            checked
          />
          <span>{{ $t('research.languages.english') }}</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="radio"
            v-model="language"
            value="simplified-chinese"
            class="form-radio text-blue-500"
          />
          <span>{{ $t('research.languages.simplifiedChinese') }}</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="radio"
            v-model="language"
            value="traditional-chinese"
            class="form-radio text-blue-500"
          />
          <span>{{ $t('research.languages.traditionalChinese') }}</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="radio"
            v-model="language"
            value="japanese"
            class="form-radio text-blue-500"
          />
          <span>{{ $t('research.languages.japanese') }}</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="radio" v-model="language" value="korean" class="form-radio text-blue-500" />
          <span>{{ $t('research.languages.korean') }}</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="radio" v-model="language" value="spanish" class="form-radio text-blue-500" />
          <span>{{ $t('research.languages.spanish') }}</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="radio" v-model="language" value="french" class="form-radio text-blue-500" />
          <span>{{ $t('research.languages.french') }}</span>
        </label>
      </div>
    </div>

    <!-- 研究按钮 -->
    <div class="mb-10">
      <button
        @click="startResearch"
        class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
      >
        {{ $t('research.researchButton') }}
      </button>
    </div>

    <!-- 智能体输出 -->
    <div class="mb-10">
      <h2 class="text-2xl font-bold mb-2">{{ $t('research.agentOutputTitle') }}</h2>
      <p class="text-sm text-gray-600 mb-4">
        {{ $t('research.agentOutputNote') }}
      </p>
      <div class="bg-gray-100 rounded-lg p-6 min-h-[200px] border border-gray-200">
        {{ aiOutput || $t('research.agentOutputPlaceholder') }}
      </div>
    </div>

    <!-- 研究报告 -->
    <div class="mb-10">
      <h2 class="text-2xl font-bold mb-2">{{ $t('research.researchReportTitle') }}</h2>
      <div
        ref="reportContainer"
        class="bg-gray-100 rounded-lg p-6 min-h-[100px] border border-gray-200"
      ></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'

// 响应式状态
const researchTopic = ref('')
const reportType = ref('摘要 - 简洁快速 (约2分钟)')
const reportTone = ref('客观 - 公正无偏见呈现现实和发现')
const website = ref('')
const domains = ref('')
const language = ref('english')
const aiOutput = ref('')
const researchReport = ref('')
const reportContainer = ref(null)

// 配置和加载TeXMe和MathJax
const setupMathRendering = () => {
  if (!window.texme) {
    window.texme = {
      useMathJax: true,
      protectMath: true,
      renderOnLoad: false,
      style: 'viewer',
    }
  }

  if (!window.MathJax) {
    window.MathJax = {
      startup: {
        ready: () => {
          MathJax.startup.defaultReady()
          console.log('MathJax is ready')
          renderMathContent()
        },
      },
      tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['\\[', '\\]']],
      },
      asciimath: {
        delimiters: [['`', '`']],
      },
      svg: {
        fontCache: 'global',
      },
    }

    // 修改为加载本地文件
    loadLocalScript('/js/tex-mml-svg.js', () => {
      loadLocalScript('/js/texme_1.2.2.js', () => {
        console.log('TeXMe loaded from local')
      })
    })
  } else {
    renderMathContent()
  }
}

// 加载本地脚本
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

  if (window.texme && window.MathJax) {
    // 使用texme渲染Markdown和数学公式
    reportContainer.value.innerHTML = window.texme.render(researchReport.value)
    // 手动触发MathJax渲染
    if (window.MathJax.typeset) {
      window.MathJax.typesetPromise()
    }
  }
}

// 开始研究方法
const startResearch = () => {
  // 这里只是模拟研究过程
  aiOutput.value = '正在处理您的研究请求...'

  // 模拟异步操作
  setTimeout(() => {
    aiOutput.value = `基于您的请求，我正在研究"${researchTopic.value}"。\n\n正在从指定来源收集信息...`

    // 再次模拟异步操作，生成研究报告
    setTimeout(() => {
      // 示例报告包含数学公式
      researchReport.value = `# 关于"${researchTopic.value}"的${reportType.value}研究报告

## 数学公式示例

这是一个包含数学公式的示例报告：

- 行内公式示例：\\(E=mc^2\\)
- 独立行公式示例：
\\[
x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}
\\]

## 其他内容

实际应用中会根据您的输入生成相关内容。`

      // 渲染数学内容
      renderMathContent()
    }, 2000)
  }, 1500)
}

// 监听研究报告变化
watch(researchReport, () => {
  renderMathContent()
})

// 组件挂载时初始化
onMounted(() => {
  setupMathRendering()
})
</script>

<style>
/* 保持原有样式不变 */
/* ...原有样式代码... */

/* MathJax 公式样式 */
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
