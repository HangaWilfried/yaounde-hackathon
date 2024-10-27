<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'

import { ChevronDownIcon } from "@heroicons/vue/24/outline"
import type { User } from '@/domain/User'
const LogoutModal = defineAsyncComponent(() => import('@/components/LogoutModal.vue'))

const props = defineProps<{
  user: User
}>()

const showLogoutModal = ref<boolean>(false)
const showSubMenu = ref<boolean>(false)

const shortcutName = computed<string>(() => {
  const [firstname, ...otherFirstname] = props.user.firstname.split(" ")
  const [lastname, ...otherLastname] = props.user.lastname.split(" ")

  return lastname[0] + ""+firstname[0]
})
</script>

<template>
  <section class="relative text-black">
    <LogoutModal @close="showLogoutModal = false" v-if="showLogoutModal" />
    <div
      @click="showSubMenu = !showSubMenu"
      class="cursor-pointer flex gap-2 items-center"
    >
      <div :class="['size-10 rounded-full bg-slate-100', { 'p-2': !!user.picture }]">
        <span>{{ shortcutName }}</span>
      </div>
      <ChevronDownIcon
        :class="[
          'size-4 transition linear duration-300',
          showSubMenu ? 'rotate-180' : 'rotate-0'
        ]"
      />
    </div>
    <Transition>
      <div
        v-if="showSubMenu"
        class="flex flex-col absolute -left-32 top-10 bg-white shadow z-10 rounded-lg p-2 min-w-44"
      >
        <span class="hover:bg-slate-200 cursor-pointer rounded-lg p-2">
          {{ user.lastname }} {{ user.firstname }}
        </span>
        <span
          @click="showLogoutModal = true"
          class="hover:bg-slate-200 cursor-pointer rounded-lg p-2"
        >
          Logout
        </span>
      </div>
    </Transition>
  </section>
</template>
