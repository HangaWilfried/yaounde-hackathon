<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Article } from '@/utils/types'
import BaseImage from '@/components/BaseImage.vue'
import ArrowWithBackground from '@/components/ArrowWithBackground.vue'

const props = defineProps<{
  article: Article
}>()

const currentIndex = ref<number>(0);
const sliderContainer = ref<HTMLElement | null>(null);

const viewPort = computed<number>(() => sliderContainer.value?.offsetWidth ?? 0)

const widthDependingSlideElements = computed(
  (): Record<string, string> => {
    if(viewPort.value) {
      return {
        width: props.article.images.length * viewPort.value + "px",
      }
    } return { width: 'auto' }
  },
);
const listPosition = computed(
  (): Record<string, string> => ({
    // transform: `translateX(-${currentIndex.value * viewPort.value}px)`,
    transform: `translateX(-${currentIndex.value * 100}%)`,
  }),
);

const legend = ref<HTMLElement | undefined>(undefined);
const scrollLeftPixel = ref<number>(0);

const shouldScrollLeft = computed(() => scrollLeftPixel.value > 0);
const shouldScrollRight = computed(() => {
  if (!legend.value) return;

  return (
    legend.value.scrollWidth - legend.value.clientWidth >= scrollLeftPixel.value
  );
});

const scrollToLeft = () => {
  if (legend.value && shouldScrollLeft.value) {
    legend.value.scrollLeft -= getScrollWidth();
    scrollLeftPixel.value -= getScrollWidth();
  }
};

const getScrollWidth = () =>
  legend.value?.children[0]?.getBoundingClientRect().width ?? 0;

const scrollToRight = () => {
  if (legend.value && shouldScrollRight.value) {
    legend.value.scrollLeft += getScrollWidth();
    scrollLeftPixel.value += getScrollWidth();
  }
};

const increaseCurrentIndex = (): void => {
  if (currentIndex.value < props.article.images.length - 1) {
    currentIndex.value += 1;
    scrollToLeft();
    return;
  }
  currentIndex.value = 0;
};

const decreaseCurrentIndex = (): void => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
    scrollToRight();
    return;
  }
  currentIndex.value = props.article.images.length - 1;
};

const startXPoint = ref<number>(0);
const endXPoint = ref<number>(0);
const touchstart = (event: TouchEvent): void => {
  startXPoint.value = event.touches[0].clientX;
  endXPoint.value = 0;
};
const touchmove = (event: TouchEvent): void => {
  endXPoint.value = event.touches[0].clientX;
};
const touchend = (): void => {
  if (!endXPoint.value || Math.abs(endXPoint.value - startXPoint.value) < 20) {
    return;
  }
  if (endXPoint.value < startXPoint.value) {
    increaseCurrentIndex();
    return;
  }
  decreaseCurrentIndex();
};

onMounted(() => {
  sliderContainer.value?.addEventListener("touchstart", (event) =>
    touchstart(event),
  );
  sliderContainer.value?.addEventListener("touchend", touchend);
  sliderContainer.value?.addEventListener("touchmove", (event) =>
    touchmove(event),
  );
});
</script>

<template>
  <main class="space-y-7 w-full lg:w-[80%] lg:m-auto">
    <div class="flex flex-col gap-0.5">
      <h1 class="text-lg sm:text-xl lg:text-2xl font-bold">
        {{ article.name }}
      </h1>
      <span>{{ new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: article.value.currency
      }).format(article.value.amount) }}</span>
    </div>
    <div class="space-y-0.5">
      <h3 class="text-lg font-bold">Description</h3>
      <p>{{ article.description }}</p>
    </div>
    <section class="flex flex-col lg:flex-row gap-4">
      <div
        ref="sliderContainer"
        class="cursor-pointer flex rounded-lg w-full h-52 lg:w-[60%] lg:h-[490px] relative overflow-hidden">
          <BaseImage
            v-for="image in article.images"
            :key="image"
            :style="listPosition"
            class="w-full shrink-0 translate-x-0 transform ease-in-out duration-200"
            :url="image"
          />
          <ArrowWithBackground
            class="absolute -rotate-180 cursor-pointer right-4 top-[45%] z-10"
            v-if="currentIndex < article.images?.length - 1"
            @click.prevent="increaseCurrentIndex"
            data-test="backward-chevron-icon"
          />
          <ArrowWithBackground
            class="absolute left-4 top-[45%] cursor-pointer z-10"
            v-if="currentIndex > 0"
            @click.prevent="decreaseCurrentIndex"
            data-test="forward-chevron-icon"
          />
      </div>
      <section class="w-full lg:w-[40%] flex flex-col gap-4">
        <div
          ref="legend"
          class="cursor-pointer lg:overflow-y-auto grid grid-cols-4 place-content-start gap-2 lg:h-[430px]"
        >
          <div
            v-for="(image, index) in article.images"
            :key="image"
            class="max-h-[70px] lg:max-h-[100px]"
          >
            <BaseImage
              :url="image"
              @click="currentIndex = index"
            />
          </div>
        </div>
        <button class="bg-blue-500 text-white font-bold rounded-lg h-10">Buy</button>
      </section>
    </section>
  </main>
</template>
