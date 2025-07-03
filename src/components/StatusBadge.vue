<template>
  <div>
    <span
      :class="[
        'material-icons text-white text-xs rounded-full w-6 h-6 flex items-center justify-center mx-auto',
        active ? 'bg-green-400' : 'bg-red-400',
      ]"
      :title="active ? 'Aktif' : 'Tidak Aktif'"
    >
      {{ active ? 'check' : 'close' }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  active: Boolean,
})
</script>
