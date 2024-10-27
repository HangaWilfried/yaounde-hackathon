<script setup lang="ts">
import BaseImage from '@/components/BaseImage.vue'

defineEmits(["update:modelValue"])
</script>

<template>
  <section class="bg-white rounded-lg">
    <h1>Choose payment method</h1>
    <section class="flex gap-10 items-center justify-center">
      <div @click="$emit('update:modelValue', 'orange-money')" class="transition ease-linear duration-100 cursor-pointer p-20 hover:border-blue-500 hover:border-4 border border-slate-300 rounded-lg">
        <div class="size-52 rounded-lg">
          <BaseImage url="orange.png" />
        </div>
      </div>
      <div @click="$emit('update:modelValue', 'mobile-money')" class="transition ease-linear duration-100 cursor-pointer p-20 hover:border-blue-500 hover:border-4 border border-slate-300 rounded-lg">
        <div class="size-52 rounded-lg">
          <BaseImage url="mtn.png" />
        </div>
      </div>
    </section>
  </section>
</template>
