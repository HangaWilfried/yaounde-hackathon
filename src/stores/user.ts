import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Market } from '@/utils/types'
import { markets } from '@/utils/data/markets'

export const useMallStore = defineStore('mall', () => {
  const malls = ref<Market[]>(markets);

  const selectedMallName = ref<string>("");
  const setCurrentMall = (mall: string): void => {
    selectedMallName.value = mall
  }

  const mall = computed<Market | undefined>(() => {
    return malls.value.find((m) => m.name === selectedMallName.value)
  });

  const articles = computed(() => mall.value?.articles.filter(article => article.isAvailable))

  const addMall = (mall: Market): void => {
    malls.value.push(mall)
  }

  // const buyArticle = (mall: string, article): void => {
  //
  // }

  return { malls, mall, addMall, articles, setCurrentMall }
})
