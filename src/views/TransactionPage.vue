<script setup lang="ts">
import { ref, defineAsyncComponent, type Ref } from 'vue'
import type { Transaction } from '@/domain/Transaction'
import ShowEmptyPage from '@/components/ShowEmptyPage.vue'

const TransactionCard = defineAsyncComponent(
  () => import('@/components/TransactionCard.vue')
)
const AppLoader = defineAsyncComponent(() => import('@/components/AppLoader.vue'))

const isLoading = ref<boolean>(false)
const transactions = ref<Transaction[]>([]) as Ref<Transaction[]>
</script>

<template>
  <section class="flex flex-col gap-7">
    <h1>List of transactions</h1>
    <AppLoader v-if="isLoading" />
    <template v-else>
      <section
        v-if="transactions.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <TransactionCard
          v-for="transaction in transactions"
          :key="transaction.id"
          :transaction="transaction"
        />
      </section>
      <ShowEmptyPage v-else />
    </template>
  </section>
</template>
