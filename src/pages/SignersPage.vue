<template>
  <div class="min-h-screen flex flex-col p-6 max-w-5xl mx-auto">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">Penandatangan SPT</h1>
      <AddButton @click="showAddModal = true" />
    </div>

    <div v-if="loading" class="text-gray-600">Loading...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>

    <SignersTable v-else :signers="signers" @edit="editSigner" @delete="prepareDelete" />

    <FormModal
      v-if="showAddModal"
      :signer="selectedSigner"
      @close="
        () => {
          showAddModal = false
          selectedSigner = null
        }
      "
      @saved="handleSaved"
      @error="handleError"
    />

    <ConfirmModal v-if="showConfirm" @cancel="showConfirm = false" @confirm="confirmDelete" />

    <BaseNotification
      :message="notification.message"
      :type="notification.type"
      :show="notification.show"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

import AddButton from '@/components/AddButton.vue'
import SignersTable from '@/components/SignersTable.vue'
import FormModal from '@/components/FormModal.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
import type { Signer } from '@/types/signer'
import BaseNotification from '@/components/BaseNotification.vue'
import { reactive } from 'vue'

const signers = ref<Signer[]>([])
const loading = ref(true)
const error = ref('')
const showAddModal = ref(false)
const selectedSigner = ref<Signer | null>(null)
const showConfirm = ref(false)
const deleteId = ref<string | null>(null)
const baseURL = import.meta.env.VITE_API_URL

const notification = reactive({
  show: false,
  message: '',
  type: 'success' as 'success' | 'error',
})

function showNotification(msg: string, type: 'success' | 'error' = 'success') {
  notification.message = msg
  notification.type = type
  notification.show = true

  setTimeout(() => {
    notification.show = false
  }, 3000)
}

onMounted(fetchSigners)

async function fetchSigners() {
  try {
    const { data } = await axios.get(`${baseURL}signers`)
    signers.value = data.data
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err.message
    } else {
      error.value = 'Gagal memuat data'
    }
  } finally {
    loading.value = false
  }
}

function editSigner(signer: Signer) {
  selectedSigner.value = { ...signer }
  showAddModal.value = true
}

function prepareDelete(id: string) {
  deleteId.value = id
  showConfirm.value = true
}

function handleSaved(newSigner: Signer) {
  signers.value.push(newSigner)
  showAddModal.value = false
  selectedSigner.value = null
  showNotification('Data berhasil disimpan', 'success')
}

function handleError(message: string) {
  showNotification(message, 'error')
}

async function confirmDelete() {
  showConfirm.value = false
  try {
    await axios.delete(`${baseURL}signers/${deleteId.value}`)
    signers.value = signers.value.filter((s) => s.id !== deleteId.value)
    showNotification('Data berhasil dihapus!', 'success')
  } catch (err: unknown) {
    console.error(err)
    showNotification('Gagal menghapus data', 'error')
  }
}
</script>
