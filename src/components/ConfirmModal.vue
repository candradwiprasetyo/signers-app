<template>
  <div
    class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
    @click.self="emit('cancel')"
  >
    <div class="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Konfirmasi Hapus</h2>

      <div class="mb-4 p-4 text-sm text-yellow-800 bg-yellow-100 border border-yellow-300 rounded">
        Fitur delete dibatasi oleh server. Tidak dapat mengakses DELETE API.
      </div>

      <p class="text-gray-600 mb-6">Apakah Anda yakin ingin menghapus data ini?</p>

      <div class="flex justify-end gap-3">
        <button
          @click="emit('cancel')"
          class="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
        >
          Batal
        </button>
        <button
          @click="emit('confirm')"
          class="px-4 py-2 text-sm rounded bg-red-500 hover:bg-red-600 text-white"
        >
          Hapus
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['confirm', 'cancel'])
</script>
