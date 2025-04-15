<script setup lang="ts">
import { animate } from 'animejs'

const hello = useTemplateRef<HTMLElement>('hello')
const helloContainer = useTemplateRef<HTMLElement>('hello-container')
const whiteBG = useTemplateRef<HTMLElement>('white-bg')

onMounted(() => {
  if (!(hello.value && helloContainer.value && whiteBG.value)) {
    return
  }
  
  const originalText = hello.value.textContent ?? ''
  const spanElements = textExtract(originalText)
  hello.value.replaceChildren(...spanElements)

  const spinGreeting = animate(spanElements, {
    y: [
      { to: '-2.75rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],
    rotate: {
      from: '-1turn',
      delay: 0
    },
    delay: (_, i) => i * 50,
    ease: 'inOutCirc'
  })
  const moveWhiteDiv = animate(whiteBG.value, { x: '100%' })
})
</script>
<template>
  <div
    ref="hello-container"
    class="relative flex h-dvh items-center justify-center bg-fuchsia-300 text-white"
  >
    <div
      ref="white-bg"
      class="absolute top-0 left-0 h-dvh w-full bg-white"
    />
    <h2 
      ref="hello"
      class="flex text-3xl font-semibold z-10"
    >
      Hello World!
    </h2>
  </div>
</template>