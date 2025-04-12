<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navigation -->
    <Navigation />

    <!-- Main Content -->
    <main>
      <div class="mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
</script>

<style></style>
