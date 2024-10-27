<script setup lang="ts">
import type { Transaction } from '@/domain/Transaction'

defineProps<{ transaction: Transaction }>()
</script>

<template>
  <div class="rounded-lg bg-blue-300/10 p-4 flex flex-col gap-2">
    <span class="flex gap-4">
      <span class="text-green-700 font-bold">Reference:</span>
        {{ transaction.id }}
      </span>
    <span class="flex gap-4">
      <span class="text-green-700 font-bold">Product:</span>
        {{ transaction.productId }}
      </span>
    <span class="flex gap-4">
      <span class="text-green-700 font-bold">Amount:</span>
        {{ transaction.fees.format }}
      </span>
    <span class="flex gap-4">
      <span class="text-green-700 font-bold">Author:</span>
        {{ transaction.author.lastname }}
      </span>
    <span class="flex gap-4">
      <span class="text-green-700 font-bold">Status:</span>
        {{ transaction.status }}
      </span>
    <div class="flex justify-end">
      <span>
        <span class="text-green-700 font-bold">Issue date:</span>
        {{ transaction.issueDate }}
      </span>
    </div>
  </div>
</template>
