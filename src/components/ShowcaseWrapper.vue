<script setup lang="ts">
import { onMounted, ref } from "vue";
import Modal from "./Modal.vue";
import Swiper from "./Swiper.vue";

const open = ref(false);
const props = defineProps<{
  slide: {
    id: string;
    collection: string;
    data: {
      featured?: number;
      url: string;
      title: string;
      image: string;
    };
  };
}>();
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
  console.log(props.slide);
});
</script>
<template>
  <div class="absolute inset-0" @click="open = true"></div>
  <Modal v-if="mounted" size="xl" :open="open" @close="open = false"
    >{{ slide.data.title }} is open
    <Swiper :sources="[slide.data.url, slide.data.url]" />
  </Modal>
</template>
