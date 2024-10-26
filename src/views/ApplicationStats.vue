<script setup lang="ts">
import { computed, type Ref, ref } from 'vue'
import { emptyValue, type Value } from '@/domain/Value'
import { emptyStatistic, Statistic } from '@/domain/Statistic'
import StatisticCard from '@/components/StatisticCard.vue'

const balance = ref<Value>(emptyValue())

const totalUsers = ref<Statistic>(emptyStatistic()) as Ref<Statistic>;
const totalProducts = ref<Statistic>(emptyStatistic()) as Ref<Statistic>;
const totalTransactions = ref<Statistic>(emptyStatistic()) as Ref<Statistic>;

const income = computed<Statistic>(() => {
  return new Statistic({
    text: "Balance",
    total: balance.value.format
  })
})
</script>

<template>
  <section>
    <StatisticCard :stat="totalUsers"/>
    <StatisticCard :stat="totalProducts"/>
    <StatisticCard :stat="totalTransactions" />
    <StatisticCard :stat="income" />
  </section>
</template>
