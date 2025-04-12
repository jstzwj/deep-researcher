<template>
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
        <div class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
        <div class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
            {{ $t('profile.memberSince') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
            {{ formatDate(user.memberSince) }}
          </dd>
        </div>
        <div class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
            {{ $t('profile.plan') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
            <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
            >
              {{ user.plan }}
            </span>
          </dd>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
            {{ $t('profile.reportsGenerated') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
            {{ user.reportsGenerated }}
          </dd>
        </div>
      </dl>
    </div>
    <div class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
      <button
        type="button"
        @click="editProfile"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {{ $t('profile.editProfile') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
const user = ref({
  name: '',
  email: '',
  memberSince: new Date(),
  plan: '',
  reportsGenerated: 0,
})

onMounted(() => {
  user.value = authStore.user || {
    name: '',
    email: '',
    memberSince: new Date(),
    plan: '',
    reportsGenerated: 0,
  }
})

const formatDate = (date) => {
  return date ? new Date(date).toLocaleDateString() : ''
}

const editProfile = () => {
  // Logic to edit profile would go here
  console.log('Editing profile')
}
</script>
