<script setup lang="ts">

import BaseImage from '@/components/BaseImage.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import { type Ref, ref } from 'vue'
import { Role } from '@/utils/types/enum'
import { emptyUser, type User } from '@/domain/User'

const user = ref<User>(emptyUser()) as Ref<User>;

const actions = ref([
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
    roles: [Role.USER, Role.ADMIN, Role.VENDOR]
  },
  {
    name: "Profile",
    path: "profile",
    roles: [Role.USER, Role.ADMIN, Role.VENDOR]
  }
]);
</script>

<template>
  <main class="bg-white">
    <header class="shadow flex items-center justify-between px-4">
      <div class="size-24">
        <BaseImage url="logo.png" />
      </div>
      <UserAvatar :user="user" />
    </header>
    <section class="flex min-h-[80vh] box-border">
      <div class="flex flex-col text-sm gap-4 w-1/4 max-w-[250px] shrink-0 p-4">
        <template
          v-for="action in actions"
          :key="action.name"
        >
          <RouterLink
            v-if="action.roles.includes(user.role)"
            :to="{ path: '/'+action.path }"
            class="hover:bg-green-100 hover:text-green-500 rounded-lg p-2"
            active-class="bg-green-300 text-green-800"
          >
            {{ action.name }}
          </RouterLink>
        </template>
      </div>
      <div class="grow">
        <RouterView></RouterView>
      </div>
    </section>
    <footer></footer>
  </main>
</template>
