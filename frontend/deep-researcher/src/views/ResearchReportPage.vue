<template>
  <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          {{ $t('report.title') }}: {{ report.title }}
        </h2>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">
          {{ $t('report.created') }}: {{ formatDate(report.createdAt) }}
        </p>
      </div>
      <div>
        <button
          @click="downloadPDF"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
        >
          {{ $t('report.download') }}
        </button>
      </div>
    </div>
    <div class="border-t border-gray-200 dark:border-gray-700">
      <div class="px-4 py-5 sm:p-6 prose dark:prose-invert max-w-none">
        <h3>{{ $t('report.summary') }}</h3>
        <p>{{ report.summary }}</p>

        <h3>{{ $t('report.findings') }}</h3>
        <div v-for="(section, index) in report.sections" :key="index" class="mb-6">
          <h4>{{ section.title }}</h4>
          <p>{{ section.content }}</p>
          <div v-if="section.sources && section.sources.length" class="mt-2">
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('report.sources') }}:</p>
            <ul class="list-disc pl-5 text-sm text-gray-500 dark:text-gray-400">
              <li v-for="(source, sourceIndex) in section.sources" :key="sourceIndex">
                <a :href="source.url" target="_blank" class="text-primary hover:underline">{{
                  source.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>

        <h3>{{ $t('report.conclusion') }}</h3>
        <p>{{ report.conclusion }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const reportId = route.params.id

// In a real app, this would fetch the report from an API
const report = ref({
  id: reportId,
  title: 'Artificial Intelligence in Healthcare',
  createdAt: new Date(),
  summary:
    'This research explores the current applications and future potential of AI in healthcare, focusing on diagnostic tools, treatment planning, and patient care optimization.',
  sections: [
    {
      title: 'Current Applications of AI in Diagnostics',
      content:
        'AI systems are increasingly being used to analyze medical images such as X-rays, MRIs, and CT scans. These systems can detect patterns and anomalies that might be missed by human practitioners, leading to earlier and more accurate diagnoses.',
      sources: [
        { title: 'Journal of Medical AI, 2023', url: '#' },
        { title: 'Healthcare Technology Review', url: '#' },
      ],
    },
    {
      title: 'Treatment Planning and Personalized Medicine',
      content:
        'AI algorithms can analyze vast amounts of patient data to suggest personalized treatment plans. This includes medication recommendations, dosage adjustments, and predicting patient responses to specific treatments.',
      sources: [
        { title: 'AI in Clinical Practice', url: '#' },
        { title: 'Personalized Medicine Journal', url: '#' },
      ],
    },
  ],
  conclusion:
    'While AI shows tremendous promise in revolutionizing healthcare, challenges remain in terms of regulatory approval, integration with existing systems, and ensuring patient privacy. The coming decade will likely see significant advancements as these challenges are addressed.',
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

const downloadPDF = () => {
  // Logic to download PDF would go here
  console.log('Downloading PDF for report:', report.value.id)
}

onMounted(() => {
  // In a real app, this would fetch the report data from an API
  console.log('Fetching report with ID:', reportId)
})
</script>
