<template>
  <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h2 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
        {{ $t('history.title') }}
      </h2>
      <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">
        {{ $t('history.subtitle') }}
      </p>
    </div>
    <div class="border-t border-gray-200 dark:border-gray-700">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        <li
          v-for="report in reports"
          :key="report.id"
          class="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
          @click="viewReport(report.id)"
        >
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-primary truncate">{{ report.title }}</p>
            <div class="ml-2 flex-shrink-0 flex">
              <p
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
              >
                {{ report.depth }}
              </p>
            </div>
          </div>
          <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
              <p class="flex items-center text-sm text-gray-500 dark:text-gray-300">
                {{ report.summary.substring(0, 100) }}...
              </p>
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-300 sm:mt-0">
              <p>
                {{ formatDate(report.createdAt) }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Mock data for demonstration
const reports = ref([
  {
    id: '1',
    title: 'Artificial Intelligence in Healthcare',
    depth: 'Detailed',
    summary:
      'This research explores the current applications and future potential of AI in healthcare, focusing on diagnostic tools, treatment planning, and patient care optimization.',
    createdAt: new Date(2023, 10, 15),
  },
  {
    id: '2',
    title: 'Renewable Energy Technologies',
    depth: 'Comprehensive',
    summary:
      'An in-depth analysis of current renewable energy technologies, their efficiency, cost-effectiveness, and potential for scaling to meet global energy demands.',
    createdAt: new Date(2023, 9, 28),
  },
  {
    id: '3',
    title: 'Blockchain in Supply Chain Management',
    depth: 'Basic',
    summary:
      'Overview of how blockchain technology is being implemented in supply chain management to improve transparency, traceability, and efficiency.',
    createdAt: new Date(2023, 8, 10),
  },
])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

const viewReport = (id) => {
  router.push(`/reports/${id}`)
}

onMounted(() => {
  // In a real app, this would fetch the reports from an API
  console.log('Fetching report history')
})
</script>
