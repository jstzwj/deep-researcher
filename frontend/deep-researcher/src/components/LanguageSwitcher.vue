<template>
  <div class="relative inline-block text-left">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
    >
      {{ currentLanguageDisplay }}
      <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5" />
    </button>
    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
    >
      <div class="py-1">
        <a
          v-for="lang in availableLanguages"
          :key="lang.code"
          href="#"
          @click.prevent="changeLanguage(lang.code)"
          class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          {{ lang.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { availableLanguages } from '@/i18n'
import { ChevronDownIcon } from 'lucide-vue-next'

const { locale } = useI18n()
const isOpen = ref(false)

const currentLanguageDisplay = computed(() => {
  return availableLanguages.find((lang) => lang.code === locale.value)?.name || 'English'
})

const changeLanguage = (langCode) => {
  locale.value = langCode
  isOpen.value = false
  localStorage.setItem('language', langCode)
}

onMounted(() => {
  // Ensure locale.value is accessed within the onMounted hook
  // to avoid potential issues with conditional hook calls during SSR.
  const storedLanguage = localStorage.getItem('language')
  if (storedLanguage && availableLanguages.some((lang) => lang.code === storedLanguage)) {
    locale.value = storedLanguage
  }
})
</script>
