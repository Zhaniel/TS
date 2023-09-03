<script setup lang="ts">

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { register } from "swiper/element/bundle";
import { onMounted } from 'vue';

const props = defineProps<{ slides: any[] }>();


onMounted(() => {
    register();
    const swiperEl: any = document.querySelector("swiper-container");

    console.log({ swiperEl })
    const params = {
        // array with CSS styles
        slidesPerView: 1,
        injectStyles: [
      /* css */`
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
    Object.assign(swiperEl, params);
    swiperEl.initialize();

})

</script>
<template>
    <div>
        <swiper-container init="false" slides-per-view="1">
            <swiper-slide v-for="image of slides" class="px-4 bg-transparent" lazy="true">
                {{ image }}
            </swiper-slide>
        </swiper-container>
    </div>
</template>