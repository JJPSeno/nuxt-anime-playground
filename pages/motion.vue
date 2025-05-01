<script setup lang="ts">
import { motion, useScroll, MotionValue } from "motion-v"

// Reference to the sidenav element
const sidenav = useTemplateRef<HTMLElement>('sidenavRef');
// Reference to part-2 section
const part2 = useTemplateRef<HTMLElement>('targetElem');
const daCube = useTemplateRef<HTMLElement>('da-cube');
const rotation = ref<MotionValue>()
// State to track whether sidenav should be fixed
const isFixed = ref(true);
// State to track the positioning style when it's not fixed
const sidenavStyle = ref({});

// Function to handle scroll and update sidenav position
const handleScroll = () => {
  if (!part2.value) return;
  
  // Get the bottom position of part-2
  const part2Bottom = part2.value.offsetTop + part2.value.offsetHeight;
  
  // Check if we've scrolled past part-2's bottom
  if (window.scrollY >= part2Bottom - (sidenav.value?.offsetHeight || 0)) {
    isFixed.value = false;
    // Calculate position to "dock" at the bottom of part-2
    sidenavStyle.value = {
      top: `${part2Bottom - (sidenav.value?.offsetHeight || 0)}px`
    };
  } else {
    isFixed.value = true;
    sidenavStyle.value = {};
  }
};

// Set up the scroll listener when component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Initial check
  handleScroll();
  // Ensure DOM is available
  const { scrollY } = useScroll({ target: daCube })

  // Rotate based on scroll
  rotation.value = useTransform(scrollY, [0, 100, 900, 1300, 5000], [0, 90, 27, 360, 32])
});

// Clean up the event listener when component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <div
    class="relative flex"
  >
    <section
      ref="sidenavRef"
      class="h-dvh bg-violet-500 w-full sm:w-1/3 md:max-w-screen-xl fixed z-50 will-change-transform"
      :class="{ 
          'fixed top-0 transition-transform duration-300 ease-in-out': isFixed, 
          'absolute transition-transform duration-300 ease-in-out': !isFixed 
        }"
      :style="!isFixed ? sidenavStyle : {}"
    >
      <nav>
    
      </nav>
      <motion.div
        ref="da-cube"
        class="absolute w-16 aspect-square bg-yellow-400 bottom-8 right-8 will-change-transform"
        :style="{ rotateZ: rotation }"
      />
    </section>
    <main
      class="relative w-0 sm:w-full"
    >
      <div
        class="w-screen h-dvh bg-red-300 p-4 flex items-center justify-center">
        <div
          ref="blue-triangle"
          class="bg-blue-500 aspect-video w-1/5"
          style="clip-path: polygon(0% 0%, 100% 50%, 0% 100%);"
        />
      </div>
      <section
        ref="targetElem"
        class="w-screen h-[1933px] bg-green-300 p-4 flex items-start justify-end"
      >
        <div
          ref="blue-triangle"
          class="bg-blue-500 aspect-video w-1/5"
          style="clip-path: polygon(50% 0%, 100% 100%, 0% 100%);"
        />
      </section>
      <section
        class="w-screen h-[100dvh] bg-blue-300 p-4 flex items-start justify-center"
      >
        <div
          ref="blue-triangle"
          class="bg-blue-500 aspect-video w-1/5"
          style="clip-path: polygon(0% 0%, 100% 50%, 0% 100%);"
        />
      </section>
    </main>
  </div>
</template>