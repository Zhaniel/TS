<template>
  <Teleport to="#modals">
    <TransitionGroup tag="div" :appear="true">
      <div v-if="open" class="relative z-[999999999]" @click="onClick">
        <Transition
          enter-active-class="ease-out duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            class="fixed inset-0 bg-[#2f3234] bg-opacity-10 transition-opacity"
          />
        </Transition>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="m-auto flex min-h-full items-center justify-center p-0 text-center"
          >
            <div class="w-full overflow-y-auto px-4 py-5 drop-shadow-lg">
              <Transition
                enter-active-class="ease-out duration-300"
                enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                leave-active-class="ease-in duration-200"
                leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div
                  data-dialog
                  class="relative mx-auto transform overflow-hidden rounded-[14px] bg-white py-4 text-left transition-all sm:my-8 sm:w-full"
                  :class="[
                    {
                      'sm:max-w-lg': size === 'lg',
                      'sm:max-w-xl': size === 'xl',
                    },
                  ]"
                >
                  <OnClickOutside @trigger="emit('close')">
                    <div>
                      <main
                        class="text-theme-text-secondary px-8 pb-4 pt-[18px] leading-[17px] text-sm sm:px-[72px]"
                      >
                        <slot />
                      </main>

                      <footer
                        v-if="$slots?.actions"
                        class="px-4 pb-[34px] pt-[23px] sm:p-6"
                      >
                        <div class="flex justify-center gap-6">
                          <slot name="actions" />
                        </div>
                      </footer>
                    </div>
                  </OnClickOutside>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script setup lang="ts">
import { TransitionGroup, Transition, ref, watch, toRef } from "vue";
import { OnClickOutside } from "@vueuse/components";
import { useScrollLock } from "@vueuse/core";

const props = defineProps<{
  size: "lg" | "xl";
  dialogClass?: string;
  open: boolean;
}>();

const el = ref<HTMLElement | null>(document.body);
const isLocked = useScrollLock(el);

const emit = defineEmits<{
  (e: "close"): void;
}>();

watch(
  toRef(props, "open"),
  (val) => {
    isLocked.value = val;
  },
  {
    immediate: true,
  },
);

function onClick(event: MouseEvent) {
  if (
    event.target instanceof Element &&
    event.target.querySelector("[data-dialog]") == null
  ) {
    return;
  }

  emit("close");
}
</script>
