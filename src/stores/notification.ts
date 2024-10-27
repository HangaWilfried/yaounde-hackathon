import { defineStore } from "pinia";
import { computed } from 'vue'
import { notifications } from '@/utils/data/notification'
import { Notification } from '@/domain/Notification'

export const useNotificationStore = defineStore("notification", () => {
  const systemNotifications = computed((): Array<Notification> => notifications.map((notification) => new Notification(notification)))


  return {
    systemNotifications
  };
});
