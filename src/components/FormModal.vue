<template>
  <div
    class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
    @click.self="emit('close')"
  >
    <div class="bg-white w-full max-w-md rounded-xl shadow-2xl p-6">
      <h2 class="text-2xl font-semibold mb-8 text-gray-800">
        {{ isEditMode ? 'Edit' : 'Tambah' }} Penandatangan SPT
      </h2>

      <div
        v-if="isEditMode"
        class="mb-4 p-4 text-sm text-yellow-800 bg-yellow-100 border border-yellow-300 rounded"
      >
        Fitur edit dibatasi oleh server. Tidak dapat mengakses PUT API.
      </div>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="form-label">NPWP *</label>
          <cleave
            v-model="form.npwp"
            :options="cleaveOptions"
            class="form-input"
            required
            placeholder="__.___.___._-___.___"
          />
        </div>

        <div>
          <label class="form-label">Nama Penandatangan SPT *</label>
          <input v-model="form.name" required class="form-input" />
        </div>

        <div>
          <label class="form-label">Bertindak sebagai *</label>
          <div class="flex gap-8 my-6">
            <label class="inline-flex items-center">
              <input
                type="radio"
                value="TAXPAYER"
                v-model="form.signatory"
                required
                class="form-radio"
              />
              <span class="ml-2 text-gray-700">Wajib Pajak</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                value="AUTHORIZED_REPRESENTATIVE"
                v-model="form.signatory"
                required
                class="form-radio"
              />
              <span class="ml-2 text-gray-700">Kuasa</span>
            </label>
          </div>
        </div>

        <div class="mt-4">
          <label class="form-label block mb-2">Status Wajib Pajak *</label>
          <div class="flex gap-8 my-6">
            <label class="inline-flex items-center">
              <input
                type="radio"
                value="ACTIVE"
                v-model="form.statusTaxpayer"
                required
                class="form-radio"
              />
              <span class="ml-2 text-gray-700">Aktif</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                value="NOT_ACTIVE"
                v-model="form.statusTaxpayer"
                required
                class="form-radio"
              />
              <span class="ml-2 text-gray-700">Tidak Aktif</span>
            </label>
          </div>
        </div>

        <div class="flex items-center pt-6">
          <div class="flex-1">
            <div class="flex items-center gap-2 mt-2">
              <div class="flex-none">
                <input
                  type="checkbox"
                  v-model="form.defaultSignatory"
                  id="defaultSignatory"
                  class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-none"
                />
              </div>

              <label for="defaultSignatory" class="form-label !text-blue-500"
                >Jadikan sebagai default</label
              >
            </div>
          </div>
          <div class="flex-1">
            <div class="flex justify-end space-x-3">
              <button
                type="button"
                @click="emit('close')"
                class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
              >
                Batal
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, computed } from 'vue'
import axios from 'axios'
import type { Signer } from '@/types/signer'

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'saved', data: Signer): void
  (e: 'error', message: string): void
}>()

const props = defineProps<{
  signer: Signer | null
}>()

const isEditMode = computed(() => !!props.signer)
const baseURL = import.meta.env.VITE_API_URL

const form = reactive({
  name: '',
  npwp: '',
  statusTaxpayer: '',
  signatory: '',
  defaultSignatory: false,
})

const cleaveOptions = {
  delimiters: ['.', '.', '.', '-', '.', ''],
  blocks: [2, 3, 3, 1, 3, 3],
  numericOnly: true,
}

watch(
  () => props.signer,
  (newVal) => {
    if (newVal) {
      form.name = newVal.name
      form.npwp = newVal.npwp
      form.statusTaxpayer = newVal.statusTaxpayer
      form.signatory = newVal.signatory
      form.defaultSignatory = newVal.defaultSignatory
    } else {
      form.name = ''
      form.npwp = ''
      form.statusTaxpayer = ''
      form.signatory = ''
      form.defaultSignatory = false
    }
  },
  { immediate: true },
)

async function submitForm() {
  try {
    const payload = { data: { ...form } }

    let response

    if (isEditMode.value && props.signer) {
      response = await axios.post(`${baseURL}signers/${props.signer.id}`, payload)
    } else {
      response = await axios.post(`${baseURL}signers`, payload)
    }

    emit('saved', response.data.data)
    emit('close')
  } catch (error) {
    console.error(error)
    emit('error', isEditMode.value ? 'Gagal mengedit data.' : 'Gagal menambahkan data.')
    emit('close')
  }
}
</script>
