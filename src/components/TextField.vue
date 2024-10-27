<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core'

defineEmits(["focus"]);
defineProps<{
  label: string;
  errors?: ErrorObject[]
}>()

const model = defineModel();
</script>

<template>
  <div class="flex flex-col gap-1">
    <label class="flex flex-col gap-2" :for="label">
      <span>{{ label }}</span>
      <input
        @focus="$emit('focus')"
        :class="[
          'w-full',
          errors?.length ? 'border-red-500 focus:ring-red-300 focus:border-red-500' : ''
        ]"
        type="text"
        :id="label"
        v-model="model"
      />
    </label>
    <div class="flex flex-col gap-0.5" v-if="errors?.length">
      <span class="text-xs text-red-500" v-for="error in errors" :key="error.$uid">
        {{ error.$message }}
      </span>
    </div>
  </div>
</template>
