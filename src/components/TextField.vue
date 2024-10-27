<script setup lang="ts">
defineEmits(["focus"]);
defineProps<{
  label: string
}>()

const model = defineModel();
</script>

<template>
  <label class="flex flex-col gap-2" :for="label">
    <span>{{ label }}</span>
    <input
      @focus="$emit('focus')"
      class="w-full"
      type="text"
      :id="label"
      v-model="model"
    />
  </label>
</template>
