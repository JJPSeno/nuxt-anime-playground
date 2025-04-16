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
      class="absolute aspect-video w-3/4 z-10"
    >
      <div 
        class="absolute w-full h-full" 
        :class="samo ? 'bg-blue-500' : 'bg-red-500'"
        :style="`clip-path: polygon(${samo ? '0 20%, 0 100%, 80% 100%' : '20% 0, 100% 0, 100% 80%'});`"
      >
      </div>
      <div
        class="absolute w-1/5 h-1/5 bottom-0 right-0"
        :class="samo ? 'bg-red-500' : 'bg-blue-500'"
        style="clip-path: polygon(100% 0, 100% 100%, 0 100%);"
        @click="samo = !samo"
      >
      </div>
    </div>
    <img
      :src="`/images/backgrounds/${samo ? 'samo' : 'cind'}.jpg`"
      class="relative object-cover aspect-video w-3/4"
      :class="samo ? 'object-center' : 'object-[center_top]'"
    >
  </div>
</template>