<template>
  <div class="container mx-auto px-4 py-6">
    <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h2 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          {{ $t('profile.title') }}
        </h2>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">
          {{ $t('profile.subtitle') }}
        </p>
      </div>
      <div class="border-t border-gray-200 dark:border-gray-700">
        <dl>
          <div
            class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
              {{ $t('profile.name') }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              {{ user.name }}
            </dd>
          </div>

          <div class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
              {{ $t('profile.email') }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              {{ user.email }}
            </dd>
          </div>

          <div
            class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
              {{ $t('profile.bio') }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              {{ user.bio }}
            </dd>
          </div>

          <div
            class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
              {{ $t('profile.url') }}
            </dt>
            <dd class="mt-1 text-sm text-blue-600 dark:text-blue-400 sm:mt-0 sm:col-span-2">
              <a :href="'https://' + user.url" target="_blank">{{ user.url }}</a>
            </dd>
          </div>
        </dl>
      </div>
      <div class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
        <button
          type="button"
          @click="editProfile"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-500 hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {{ $t('profile.editProfile') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const user = ref({
  name: 'XiaHan',
  email: 'jun@han.moe',
  bio: 'Learning to learn',
  pronouns: "Don't specify",
  url: 'blog.han.moe',
})

onMounted(() => {
  // Simulate fetching user info from store or API
  user.value = authStore.user || user.value
})

const editProfile = () => {
  console.log('Edit profile clicked')
}
</script>
