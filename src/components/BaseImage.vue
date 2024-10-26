<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    url: string;
    rounded?: string
    isLocal?: boolean
  }>(),
  {
    isLocal: true,
    rounded: "rounded-lg",
  }
)

const isLoading = ref<boolean>(false);

const source = computed<string>(() =>
  new URL(`../assets/images/${props.url}`, import.meta.url
  ).href
)
</script>

<template>
  <div :class="['relative overflow-hidden size-full', rounded]">
    <div v-if="isLoading" :class="['size-full animation-pulse', rounded]"></div>
    <img v-else :class="['object-cover inset-0 size-full', rounded]" :src="source" :alt="source">
  </div>
</template>
