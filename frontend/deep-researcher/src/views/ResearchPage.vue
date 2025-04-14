<template>
  <div
    class="rounded bg-white text-gray-800 dark:bg-gray-700 dark:text-white p-6 max-w-5xl mx-auto mt-4 shadow-lg"
  >
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
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-2" style="font-size: 0.7rem">
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
        :disabled="isLoading"
        class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {{ isLoading ? $t('research.researchInProgress') : $t('research.researchButton') }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// 响应式状态
const researchTopic = ref('')
const reportType = ref('摘要 - 简洁快速 (约2分钟)')
const reportTone = ref('客观 - 公正无偏见呈现现实和发现')
const domains = ref('')
const language = ref('english')
const isLoading = ref(false)

const startResearch = async () => {
  if (!researchTopic.value.trim()) {
    alert('Please enter a research topic')
    return
  }

  isLoading.value = true

  try {
    const response = await authStore.api.post(
      '/research',
      {
        topic: researchTopic.value,
        report_type: reportType.value,
        tone: reportTone.value,
        source: 'web', // You might want to make this dynamic like other fields
        domains: domains.value,
        language: language.value,
      },
      {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      },
    )

    // Assuming the backend returns the report ID in the response
    const reportId = response.data.report_id
    router.push(`/report?id=${reportId}`)
  } catch (error) {
    console.error('Research failed:', error)
    alert('Research failed. Please try again.')
  } finally {
    isLoading.value = false
  }
}
</script>

<style></style>
