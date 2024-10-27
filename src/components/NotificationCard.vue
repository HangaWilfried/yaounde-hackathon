<script setup lang="ts">
import { Notification } from '@/domain/Notification'
defineProps<{ notification: Notification }>()
</script>

<template>
  <div class="flex flex-col gap-2 bg-white rounded-lg p-4">
    <h1 class="font-bold text-xs">Reference: {{ notification.id }}</h1>
    <p class="text-base my-2">{{ notification.content }}</p>
    <div class="flex justify-end text-xs">
      <span>{{ notification.issueDate }}</span>
    </div>
  </div>
</template>
