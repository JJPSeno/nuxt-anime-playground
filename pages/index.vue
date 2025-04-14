<script setup lang="ts">
import { animate } from 'animejs'

const hello = ref('hello')
onMounted(() => {
  const spans = textExtract(hello)
  console.log(spans)
  
  animate(spans, {
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: (_, i) => i * 50,
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
})
})
</script>
<template>
  <main
    class="flex h-dvh items-center justify-center"
  >
    <h2 
      ref="hello"
      class="flex text-xl"
    >
      Hello World!
    </h2>
  </main>
</template>