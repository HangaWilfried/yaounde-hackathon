<script setup lang="ts">
import { useRouter } from 'vue-router'
import ModalWrapper from '@/components/ModalWrapper.vue'

import { googleLogout } from "vue3-google-login"

const router = useRouter()
const emit = defineEmits(["close"]);

const close = (): void => {
  emit("close");
}

const logout = async (): Promise<void> => {
  localStorage.clear();
  googleLogout()
  await router.push({ name: "login" })
  close();
}
</script>

<template>
  <ModalWrapper @close="close">
    <div class="flex flex-col gap-7 bg-white rounded-lg p-4">
      <h1>Are you sure to Logout ?</h1>
      <div class="flex gap-2 items-center">
        <button @click="close" class="text-gray-900 font-bold">cancel</button>
        <button @click="logout" class="text-blue-500 font-bold">confirm</button>
      </div>
    </div>
  </ModalWrapper>
</template>
