import { defineStore } from "pinia";
import { computed } from 'vue'
import { Transaction } from '@/domain/Transaction'
import { transactions } from '@/utils/data/transactions'

export const useTransactionStore = defineStore("transaction", () => {
  const systemTransactions = computed((): Array<Transaction> => transactions.map((transaction) => new Transaction(transaction)))


  return {
    systemTransactions
  };
});
