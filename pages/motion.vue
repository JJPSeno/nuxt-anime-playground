<script setup lang="ts">

const blueTriangle = useTemplateRef<HTMLElement>('blue-triangle')

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