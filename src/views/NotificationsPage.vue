<script setup lang="ts">
import { ref, defineAsyncComponent, type Ref } from 'vue'
import type { Notification } from '@/domain/Notification'
import ShowEmptyPage from '@/components/ShowEmptyPage.vue'

const NotificationCard = defineAsyncComponent(
  () => import('@/components/NotificationCard.vue')
)
const AppLoader = defineAsyncComponent(() => import('@/components/AppLoader.vue'))

const isLoading = ref<boolean>(false)
const notifications = ref<Notification[]>([]) as Ref<Notification[]>
</script>

<template>
  <section class="flex flex-col gap-7">
    <h1>List of notifications</h1>
    <AppLoader v-if="isLoading" />
    <template v-else>
      <section
        v-if="notifications.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <NotificationCard
          v-for="notification in notifications"
          :key="notification.id"
          :notification="notification"
        />
      </section>
      <ShowEmptyPage v-else />
    </template>
  </section>
</template>
