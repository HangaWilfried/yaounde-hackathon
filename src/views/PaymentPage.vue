<script setup lang="ts">
import TextField from '@/components/TextField.vue'
import AppMap from '@/components/AppMap.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ChooseOperator from '@/components/ChooseOperator.vue'
import PaymentLoading from '@/components/PaymentLoading.vue'

const router = useRouter()
const route = useRoute()

const long = 11.5192093;
const lat = 3.8819345;

const step = ref<"information" | "payment-method" | "pay">("information");

const paymentMethod = ref<string>();
const isPaymentStarted = ref<boolean>(false);

const nextAction = async (): Promise<void> => {
  switch (step.value) {
    case "information":
      step.value = "payment-method";
      return;
    case "payment-method":
      step.value = "pay"
      return;
    default: isPaymentStarted.value = true
  }
};

const back = () => {
  switch (step.value) {
    case "information":
      router.back();
      return;
    case "pay":
      step.value = "payment-method"
      return;
    default:
      step.value = "information"
  }
}
</script>

<template>
  <section class="space-y-7 bg-white rounded-lg p-4">
    <PaymentLoading v-if="isPaymentStarted" />
    <div class="flex items-center justify-between">
      <h1 class="text-xl font-bold">Payment</h1>
      <div class="flex gap-2 items-center">
        <button @click="back" class="text-gray-700 font-semibold border-none">
          {{ step === "information" ? "cancel" : "previous step" }}
        </button>
        <button
          v-if="step === 'information'"
          @click="nextAction" class="text-blue-500 font-bold border-none"
        >
          next
        </button>
      </div>
    </div>
    <TransitionGroup>
      <div class="flex flex-col gap-2" v-if="step === 'information'">
        <TextField label="Firstname" />
        <TextField label="Lastname" />
        <TextField label="Phone number" />
        <div class="flex flex-col gap-1">
          <h1 class="font-bold">Location</h1>
          <AppMap :coords="{ long, lat }" />
        </div>
      </div>
      <ChooseOperator
        v-else-if="step === 'payment-method'"
        @update:modelValue="step = 'pay'"
        v-model="paymentMethod"
      />
      <section v-else class="space-y-7">
        <h1 class="pb-2 border-b border-slate-100">Summary</h1>
        <section class="flex gap-8 items-start">
          <section>
            <div class="flex flex-col p-4 gap-2 max-w-lg bg-gray-50 rounded-lg divide-y divide-slate-300 divide-dashed">
              <div class="flex justify-between items-center py-2">
                <span>Product</span>
                <span class="font-bold text-sm">{{ route.params.article }}</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span>Gps coordinate</span>
                <span class="font-bold text-sm">
              {{ `Longitude: ${long} ; Latitude: ${lat}` }}
            </span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span>Issue date</span>
                <span class="font-bold text-sm">
              {{ new Date().toDateString() }}
            </span>
              </div>
            </div>
            <div class="flex flex-col p-4 gap-2 max-w-lg bg-gray-50 rounded-lg divide-y divide-slate-300 divide-dashed">
              <h1 class="text-lg font-bold">Price Details</h1>
              <section class="flex flex-col gap-1 py-2">
                <div class="flex justify-between items-center">
                  <span>Delivery fee</span>
                  <span class="font-bold text-sm">XAF 2000</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Tax</span>
                  <span class="font-bold text-sm">XAF 0</span>
                </div>
              </section>
              <div class="font-bold flex justify-between items-center py-2">
                <span class="text-base">Total</span>
                <span class="text-lg">XAF 14000</span>
              </div>
            </div>
          </section>
          <section class="bg-gray-50 p-4 flex flex-col gap-4">
            <label for="agree" class="flex gap-2 items-center">
              <input type="checkbox" id="agree" class="rounded-lg">
              <span class="flex gap-2 items-center">
                By click you agree
                <span class="text-blue-500 font-bold">the term & conditions</span>
              </span>
            </label>
            <button
              class="bg-blue-500 hover:!bg-blue-500 text-white font-semibold"
              @click="nextAction"
            >
              Confirm my payment
            </button>
          </section>
        </section>
      </section>
    </TransitionGroup>
  </section>
</template>
