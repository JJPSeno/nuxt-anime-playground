<script setup lang="ts">

const samo = ref(true)
</script>

<template>
  <div 
    class="relative w-full h-dvh bg-slate-900 overflow-hidden flex items-center justify-center"
  >
    <div 
      id="selector" 
      ref="selector" 
      class="absolute aspect-video w-full sm:w-3/4 z-10"
    >
      <div 
        class="absolute w-full h-full bg-primary/75 backdrop-blur-sm"
        :style="`clip-path: polygon(${samo ? '0 20%, 0 100%, 80% 100%' : '20% 0, 100% 0, 100% 80%'});`"
      >
      </div>
      <div
        class="absolute w-1/5 h-1/5 bottom-0 right-0 bg-secondary"
        style="clip-path: polygon(100% 0, 100% 100%, 0 100%);"
        @click="samo = !samo"
      >
        <p
          class="absolute text-xs md:text-sm bottom-1 sm:bottom-2 right-0.5 sm:right-2 md:right-4 origin-center text-white underline whitespace-nowrap"
        >
          Click me!
        </p>
      </div>
    </div>
    <img
      :src="`/images/backgrounds/${samo ? 'samo' : 'cind'}.jpg`"
      class="relative object-cover aspect-video w-full sm:w-3/4"
      :class="samo ? 'object-center' : 'object-[center_top]'"
    >
  </div>
</template>
