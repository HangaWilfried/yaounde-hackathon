<script setup lang="ts">
import { Notification } from '@/domain/Notification'
defineProps<{ notification: Notification }>()
</script>

<template>
  <div class="flex flex-col gap-2 bg-white rounded-lg p-2">
    <h1>Reference: {{ notification.id }}</h1>
    <p>{{ notification.content }}</p>
    <div class="flex justify-end text-xs">
      <span>{{ notification.issueDate }}</span>
    </div>
  </div>
</template>
