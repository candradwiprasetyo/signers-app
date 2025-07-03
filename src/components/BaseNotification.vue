<template>
  <div
    v-if="show"
    :class="[
      'fixed bottom-6 right-6 z-50 px-4 py-3 rounded shadow-lg text-white transition-all duration-300',
      type === 'success' ? 'bg-green-500' : 'bg-red-500',
    ]"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  message: string
  type: 'success' | 'error'
}>()
</script>
