<template>
  <div class="bg-white p-6 mt-8 rounded-xl overflow-x-auto w-full">
    <table class="min-w-full bg-white rounded border-none">
      <thead>
        <tr>
          <th class="text-left p-3">NPWP</th>
          <th class="text-left p-3">Nama</th>
          <th class="text-left p-3">Sebagai</th>
          <th class="text-left p-3">Status</th>
          <th class="text-left p-3">Default</th>
          <th class="text-left p-3"></th>
        </tr>
      </thead>
      <tbody>
        <SignerRow
          v-for="signer in signers"
          :key="signer.id"
          :signer="signer"
          @edit="$emit('edit', signer)"
          @delete="$emit('delete', signer.id)"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Signer } from '@/types/signer'
import SignerRow from './SignerRow.vue'

defineProps<{
  signers: Signer[]
}>()
</script>
