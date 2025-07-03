<template>
  <tr class="hover:bg-gray-50 transition">
    <td class="p-3 border-t">{{ formatNpwp(signer.npwp) }}</td>
    <td class="p-3 border-t">{{ signer.name }}</td>
    <td class="p-3 border-t">{{ signer.signatory === 'TAXPAYER' ? 'Wajib Pajak' : 'Kuasa' }}</td>
    <td class="p-3 border-t text-center">
      <StatusBadge :active="signer.statusTaxpayer === 'ACTIVE'" />
    </td>
    <td class="p-3 border-t">
      <DefaultBadge :isDefault="signer.defaultSignatory" />
    </td>
    <td class="p-3 border-t">
      <button
        @click="$emit('edit')"
        class="px-2 py-1 bg-white hover:bg-gray-200 border text-sm rounded mr-2 font-bold text-green-500"
      >
        <span class="material-icons text-sm"> edit </span>
      </button>
      <button
        @click="$emit('delete')"
        class="px-2 py-1 bg-white hover:bg-gray-200 border text-sm rounded mr-2 font-bold text-red-500"
      >
        <span class="material-icons text-sm"> delete </span>
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import StatusBadge from './StatusBadge.vue'
import DefaultBadge from './DefaultBadge.vue'

defineProps({
  signer: {
    type: Object,
    required: true,
  },
})

function formatNpwp(npwp: string) {
  if (!npwp) return '-'
  return npwp.replace(/^(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})$/, '$1.$2.$3.$4-$5.$6')
}
</script>
