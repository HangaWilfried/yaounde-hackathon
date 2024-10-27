<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ModalWrapper from '@/components/ModalWrapper.vue'
import { CheckCircleIcon } from "@heroicons/vue/24/outline"
import AppLoader from '@/components/AppLoader.vue'
import { useRouter } from 'vue-router'

const isLoading = ref<boolean>(true)

const router = useRouter()
onMounted(() => {
  isLoading.value = false;
  const uid = (): string => {
    const heap = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    return heap + tail;
  };
  const timeoutId = setTimeout(async () => {
    await router.push("/transaction")
    clearTimeout(timeoutId)
  }, 2000)
})
</script>

<template>
  <ModalWrapper>
    <div class="flex flex-col items-center gap-7 bg-white rounded-lg p-4">
      <template v-if="isLoading">
        <AppLoader />
        <span>In progress ...</span>
      </template>
      <div class="flex flex-col gap-4 items-center" v-else>
        <div class="size-fit p-2 bg-green-50 rounded-full">
          <CheckCircleIcon class="size-12 text-green-500" />
        </div>
        <span class="flex gap-1 items-center">
          Operation
          <span class="font-bold text-green-500">succeed</span>
        </span>
        <p class="text-gray-600 text-sm pb-4">
          You'll redirect to transactions page on the next 2 seconds.
        </p>
      </div>
    </div>
  </ModalWrapper>
</template>
