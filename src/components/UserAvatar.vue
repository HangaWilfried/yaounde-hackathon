<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'
import BaseImage from '@/components/BaseImage.vue'

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
        <BaseImage
          v-if="user.picture"
          rounded="rounded-full"
          :is-local="false"
          :url="user.picture"
        />
        <span v-else>{{ shortcutName }}</span>
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
        class="flex flex-col absolute -left-10 top-4 bg-white shadow z-10 rounded-lg p-2"
      >
        <span class="hover:bg-slate-100 rounded-lg p-1">
          {{ user.lastname }} {{ user.firstname }}
        </span>
        <span
          @click="showLogoutModal = true"
          class="hover:bg-slate-100 rounded-lg p-1"
        >
          Logout
        </span>
      </div>
    </Transition>
  </section>
</template>
