<template>
  <div>
    <p>Logging in with Google...</p>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useSessionStore } from "@/stores/session";

const router = useRouter();
const sessionStore = useSessionStore();

const isLoading = ref<boolean>(false);

onBeforeMount(async () => {
  isLoading.value = true;
  sessionStore.doLoginWithGoogleCredentials();
  await router.push({ name: "market" });
  isLoading.value = false;
});
</script>
