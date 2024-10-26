<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import type { Market } from '@/utils/types'
import { useMallStore } from '@/stores/user'

import BaseImage from '@/components/BaseImage.vue'
import { ChevronDoubleUpIcon } from "@heroicons/vue/24/outline"

const marketStore = useMallStore()
const markets = ref<Market[]>([])

onBeforeMount(() => {
  markets.value = marketStore.malls
})

</script>

<template>
  <main class="min-h-screen p-10 space-y-7 sm:space-y-10 lg:space-y-14 bg-slate-100">
    <h1 class="text-xl sm:text-2xl lg:text-3xl underline underline-offset-8 font-bold">Discover our market place</h1>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <router-link
        class="relative rounded-lg h-72 text-white"
        :to="{
          name: 'market details',
          params: { name: market.name }
        }"
        v-for="market in markets"
        :key="market.name"
      >
        <h1 class="absolute top-4 left-4 z-10 font-bold bg-black/45 px-2">{{ market.name }}</h1>
        <div class="rounded-full size-auto absolute z-10 bottom-4 right-4 bg-black/45 p-1">
          <ChevronDoubleUpIcon class="size-8" />
        </div>
        <BaseImage :url="market.picture" class="size-full" />
      </router-link>
    </section>
  </main>
</template>
