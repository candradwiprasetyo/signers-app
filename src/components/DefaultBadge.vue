<template>
  <span
    :class="[
      'material-icons text-white text-xs rounded-full w-6 h-6 flex items-center justify-center mx-auto',
      isDefault ? 'bg-green-400' : 'bg-red-400',
    ]"
    :title="isDefault ? 'Aktif' : 'Tidak Aktif'"
  >
    {{ isDefault ? 'check' : 'close' }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  isDefault: Boolean,
})
</script>
