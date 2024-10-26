<script setup lang="ts">
import type { Transaction } from '@/domain/Transaction'

defineProps<{ transaction: Transaction }>()
</script>

<template>
  <div class="rounded-lg bg-white p-2 flex flex-col gap-2">
    <span>Reference: {{ transaction.id }}</span>
    <span>Product: {{ transaction.productId }}</span>
    <span>Amount: {{ transaction.fees.format }}</span>
    <span>Author: {{ transaction.author.lastname }}</span>
    <span>Status: {{ transaction.status }}</span>
    <div class="flex justify-end">
      <span>Issue date: {{ transaction.issueDate }}</span>
    </div>
  </div>
</template>
