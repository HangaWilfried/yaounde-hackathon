<script setup lang="ts">
import { onBeforeMount, type Ref, ref } from 'vue'
import { Statistic } from '@/domain/Statistic'
import StatisticCard from '@/components/StatisticCard.vue'
import { useStatisticStore } from '@/stores/stats'
import ShowEmptyPage from '@/components/ShowEmptyPage.vue'
import AppLoader from '@/components/AppLoader.vue'

const statisticStore = useStatisticStore()
const stats = ref<Statistic[]>([]) as Ref<Statistic[]>

const isLoading = ref<boolean>(false)
onBeforeMount(() => {
  isLoading.value = true;
  const time = setTimeout(() => {
    stats.value = statisticStore.systemStats
    isLoading.value = false;
    clearTimeout(time)
  }, 3000)
})
</script>

<template>
  <section class="flex flex-col gap-7 p-10 bg-white">
    <h1 class="text-2xl font-extrabold">Dashboard</h1>
    <AppLoader v-if="isLoading" />
    <template v-else>
      <section
        v-if="stats.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <StatisticCard
          v-for="stat in stats"
          :key="stat.text"
          :stat="stat"
        />
      </section>
      <ShowEmptyPage v-else />
    </template>
  </section>
</template>
