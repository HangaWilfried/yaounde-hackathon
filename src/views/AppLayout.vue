<script setup lang="ts">
import { ref } from 'vue'
import { Role } from '@/utils/types/enum'
import { useSessionStore } from '@/stores/session'

import BaseImage from '@/components/BaseImage.vue'
import UserAvatar from '@/components/UserAvatar.vue'

const sessionStore = useSessionStore()

const actions = ref([
  {
    name: "Products",
    path: "market",
    roles: [Role.USER, Role.ADMIN, Role.VENDOR],
  },
  {
    name: "Transactions",
    path: "transaction",
    roles: [Role.USER, Role.ADMIN, Role.VENDOR]
  },
  {
    name: "Notifications",
    path: "notification",
    roles: [Role.USER, Role.VENDOR]
  },
  {
    name: "Profile",
    path: "profile",
    roles: [Role.USER, Role.VENDOR]
  },
  {
    name: "Stats",
    path: "dashboard",
    roles: [Role.ADMIN],
  },
  {
    name: "Management",
    path: "management",
    roles: [Role.ADMIN],
  },
]);
</script>

<template>
  <main class="bg-white overflow-hidden m-0 p-0 box-border">
    <header class="shadow flex items-center justify-between px-4">
      <div class="size-24">
        <BaseImage url="logo.png" />
      </div>
      <UserAvatar :user="sessionStore.currentUser" />
    </header>
    <section class="flex min-h-[80vh] box-border">
      <div class="flex flex-col text-sm gap-4 w-1/4 max-w-[250px] shrink-0 p-4">
        <template
          v-for="action in actions"
          :key="action.name"
        >
          <RouterLink
            :to="{ path: '/'+action.path }"
            v-if="action.roles.includes(sessionStore.currentUser.role)"
            class="hover:bg-green-100 hover:text-green-500 rounded-lg p-2"
            active-class="bg-green-300 text-green-800"
          >
            {{ action.name }}
          </RouterLink>
        </template>
      </div>
      <div class="grow bg-gray-100 min-h-[90vh] p-4">
        <div class="size-full bg-white rounded-xl">
          <RouterView></RouterView>
        </div>
      </div>
    </section>
    <footer></footer>
  </main>
</template>
