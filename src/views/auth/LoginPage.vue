<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { googleSdkLoaded,  } from "vue3-google-login";
import { type CallbackTypes, decodeCredential } from "vue3-google-login";

import BaseImage from '@/components/BaseImage.vue'
import TextField from '@/components/TextField.vue'
import GoogleIcon from '@/components/GoogleIcon.vue'

type Credential = {
  email: string;
  password: string;
}

const credential = ref<Credential>({
  email: "",
  password: "",
})

const router = useRouter()

// const loginUsingGoogleAuthProvider = () => {
//   googleSdkLoaded((google) => {
//     google.accounts.oauth2
//       .initCodeClient({
//         client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
//         scope: import.meta.env.VITE_GOOGLE_SCOOPES,
//         callback: async (response) => {
//           console.log(decodeCredential(response.code))
//           localStorage.setItem("google_token_ref", response.code);
//           await router.push({ name: "auth.google.login" });
//         },
//       })
//       .requestCode();
//   });
// };


const callback: CallbackTypes.CredentialCallback = (response) => {
  const userData = decodeCredential(response.credential)
  console.log("Handle the userData", userData)
};

const login = async (): Promise<void> => {
  await router.push("/");
}
</script>

<template>
  <section class="flex min-h-screen justify-center items-center gap-[10%]">
    <div class="size-64">
      <BaseImage url="lite-logo.png" />
    </div>
    <form
      class="p-6 py-10 rounded-xl bg-white w-[525px] flex flex-col gap-4"
      @submit.prevent="login"
    >
      <div class="flex flex-col gap-2 items-center">
        <h1 class="font-bold text-xl">Your details</h1>
        <span class="font-medium text-xs">
          Please provide your email and password
        </span>
      </div>
      <TextField label="Email" v-model="credential.email" />
      <TextField label="Password" v-model="credential.password" />
      <div class="mt-2 grid grid-cols-1">
        <button class="bg-blue-500 text-white" type="submit">Sign in</button>
      </div>
      <section class="pt-7 space-y-4">
        <div class="relative border h-[1px]">
          <span
            class="absolute bg-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border p-1 rounded-lg border-white"
          >
            or using
          </span>
        </div>
        <div class="flex justify-center">
          <GoogleLogin :callback="callback" prompt auto-login>
            <span
              class="cursor-pointer flex gap-2 items-center border border-slate-100 rounded-full px-2 py-1 size-10"
            >
            <GoogleIcon />
          </span>
          </GoogleLogin>
<!--          <span-->
<!--            class="cursor-pointer flex gap-2 items-center border border-slate-100 rounded-full px-2 py-1 size-10"-->
<!--            @click="loginUsingGoogleAuthProvider"-->
<!--          >-->
<!--            <GoogleIcon />-->
<!--          </span>-->
        </div>
        <div class="mt-2 flex gap-2 items-center justify-center">
          <span>New to citywise ?</span>
          <RouterLink
            class="text-blue-500 underline underline-offset-4 font-bold"
            to="/auth/registration"
          >
            sign up
          </RouterLink>
        </div>
      </section>
    </form>
  </section>
</template>
