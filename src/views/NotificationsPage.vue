<script setup lang="ts">
import { ref, defineAsyncComponent, type Ref, onBeforeMount } from 'vue'
import type { Notification } from '@/domain/Notification'
import ShowEmptyPage from '@/components/ShowEmptyPage.vue'
import { useNotificationStore } from '@/stores/notification'

const NotificationCard = defineAsyncComponent(
  () => import('@/components/NotificationCard.vue')
)
const AppLoader = defineAsyncComponent(() => import('@/components/AppLoader.vue'))

const notificationStore = useNotificationStore()

const isLoading = ref<boolean>(false)
const notifications = ref<Notification[]>([]) as Ref<Notification[]>

onBeforeMount(() => {
  isLoading.value = true;
  const time = setTimeout(() => {
    notifications.value = notificationStore.systemNotifications
    isLoading.value = false;
    clearTimeout(time)
  }, 3000)
})
</script>

<template>
  <section class="flex flex-col gap-7 p-10 bg-gray-100 h-full">
    <h1 class="text-2xl font-extrabold">List of notifications</h1>
    <AppLoader v-if="isLoading" />
    <template v-else>
      <section
        v-if="notifications.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
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
