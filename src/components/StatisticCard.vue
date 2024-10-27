<script setup lang="ts">
import type { Statistic } from '@/domain/Statistic'

defineProps<{
  stat: Statistic
}>()
</script>

<template>
  <div class="bg-white border border-gray-300 shadow rounded-lg py-10 px-4 flex flex-col gap-2 items-center">
    <h1 class="text-lg font-bold text-center">{{ stat.text }}</h1>
    <span class="text-center text-2xl">{{ stat.total }}</span>
  </div>
</template>
