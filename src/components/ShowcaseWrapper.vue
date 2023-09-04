<script setup lang="ts">
import { onMounted, ref } from "vue";
import Modal from "./Modal.vue";
import Slider from "./Slider.vue";

const open = ref(false);
const props = defineProps<{
  slide: {
    sources: string[];
    title: string;
    featured: number;
  };
}>();
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>
<template>
  <div class="absolute inset-0" @click="open = true"></div>
  <Modal v-if="mounted" size="xl" :open="open" @close="open = false">
    <Slider :sources="slide.sources" />
  </Modal>
</template>
