<script setup lang="ts">
import { useMallStore } from '@/stores/user'
import ArticleShow from '@/components/ArticleShow.vue'

import { ArrowLeftIcon } from "@heroicons/vue/24/outline"


const props = defineProps<{
  name: string
}>()

const mallStore = useMallStore()
mallStore.setCurrentMall(props.name)

</script>

<template>
  <section class="min-h-screen p-4 lg:p-10 space-y-4 sm:space-y-10 lg:space-y-14 bg-slate-100">
    <router-link
      class="inline-block bg-indigo-900/45 size-fit p-2 rounded-full text-white"
      :to="{name: 'market'}"
    >
      <ArrowLeftIcon class="size-8" />
    </router-link>
    <ArticleShow
      v-for="article in mallStore.mall?.articles"
      :key="article.name"
      :article="article"
    />
  </section>
</template>
