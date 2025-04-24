<script setup lang="ts">
import { motion } from "motion-v"

</script>
<template>
  <div
    ref="hello-container"
    class="relative flex h-dvh items-center justify-center bg-primary"
  >
    <motion.div
      :initial="{ x: '0%' }"
      :animate="{ x: '100%' }"
      :exit="{ x: '0%' }"
      :transition="{ duration: 0.8, ease: 'circInOut' }"
      ref="white-bg"
      class="absolute top-0 left-0 h-dvh w-full bg-secondary"
    />
    <h2
      ref="hello"
      class="flex smear font-mono teçxt-3xl z-10"
    >
      Hello World!
    </h2>
  </div>
</template>

<style lang="css" scoped>
.smear {
  color: white;
  text-shadow:
    1px 0 6px rgba(0, 255, 255, 0.3),
    -1px 0 6px rgba(255, 0, 255, 0.3),
    0 0 2px rgba(255, 255, 255, 0.1);
}

</style>