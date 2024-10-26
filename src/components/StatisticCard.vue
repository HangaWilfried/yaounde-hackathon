<script setup lang="ts">
import type { Statistic } from '@/domain/Statistic'

defineProps<{
  stat: Statistic
}>()
</script>

<template>
  <div class="bg-white rounded-lg p-4 flex flex-col gap-2">
    <h1 class="text-lg font-bold">{{ stat.text }}</h1>
    <span class="text-center text-2xl">{{ stat.total }}</span>
  </div>
</template>
