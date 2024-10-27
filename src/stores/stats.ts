import { defineStore } from "pinia";
import { computed } from 'vue'
import { Statistic } from '@/domain/Statistic'
import { statistics } from '@/utils/data/statistics'

export const useStatisticStore = defineStore("stats", () => {
  const systemStats = computed((): Array<Statistic> => statistics.map((stat) => new Statistic(stat)))


  return {
    systemStats
  };
});
