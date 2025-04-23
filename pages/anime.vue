<script setup lang="ts">
import { animate } from 'animejs'

const blueTriangle = useTemplateRef<HTMLElement>('blue-triangle')
onMounted(() => {
  if (!(blueTriangle.value)) {
    return
  }
  animate(blueTriangle.value,{
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: (_, i) => i * 50, // Function based value
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});
})
</script>
<template>
  <main
    class="w-screen h-dvh bg-red-300 p-4 flex items-center justify-center"
  >
    <div
      ref="blue-triangle"
      class="bg-blue-500 aspect-video w-1/5"
      style="clip-path: polygon(0% 0%, 100% 50%, 0% 100%);"
    />
  </main>
  <section
    class="w-screen h-[200dvh] bg-blue-300 p-4"
  >
    <div
      ref="blue-triangle"
      class="bg-blue-500 aspect-video w-1/5"
      style="clip-path: polygon(0% 0%, 100% 50%, 0% 100%);"
    />
  </section>
</template>