<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";
import { onMounted } from "vue";

const props = defineProps<{
  sources: string[];
}>();

onMounted(() => {
  register();
  const swiperEl: any = document.querySelector("swiper-container");

  const params = {
    // array with CSS styles
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    injectStyles: [
      /* css */ `
    :host(swiper-container) .swiper-button-next {
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #e3e2db;
      color: #0b0d0b;
      width: 28px;
      height: 28px;
      padding: 8px;
      transform: translateY(50%);
    }
    :host(swiper-container) .swiper-button-prev {
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #e3e2db;
      color: #0b0d0b;
      width: 28px;
      height: 28px;
      padding: 8px;
      transform: translateY(50%);
    }
    :host(swiper-container) .swiper-pagination-bullet-active {
      background-color: #e3e2db;
    }
    `,
    ],
  };
  Object.assign(swiperEl, { ...params });
  swiperEl.initialize();
});
</script>
<template>
  <div>
    <swiper-container
      init="false"
      slides-per-view="1"
      :centered-slides="true"
      navigation="true"
      pagination="true"
    >
      <swiper-slide v-for="img of sources">
        <img :src="img" alt="" class="h-full w-full object-cover" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="css">
:root {
  --swiper-navigation-color: #0b0d0b;
  --swiper-pagination-color: #e3e2db;
  --swiper-navigation-sides-offset: 24px;
}
swiper-container::part(button-prev),
swiper-container::part(button-next) {
  box-sizing: border-box;
  border-radius: 50%;
  background-color: var(--swiper-pagination-color);
  width: 28px;
  height: 28px;
  padding: 8px;
  transform: translateY(50%);
}
</style>
