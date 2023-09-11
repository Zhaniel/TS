<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
import { onMounted } from "vue";

defineProps<{
  sources: string[];
}>();

onMounted(() => {
  register();
});
</script>
<template>
  <div>
    <swiper-container
      slides-per-view="1"
      :centered-slides="true"
      navigation="true"
      pagination="true"
      auto-height="true"
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
  width: 36px;
  height: 36px;
  padding: 8px;
  transform: translateY(50%);
}
</style>
