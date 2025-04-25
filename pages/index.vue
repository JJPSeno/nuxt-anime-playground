<script setup lang="ts">
import { motion } from "motion-v"

</script>
<template>
  <div
    ref="hello-container"
    class="relative flex h-dvh bg-primary"
  >
    <motion.div
      :initial="{ x: '0%' }"
      :animate="{ x: '100%' }"
      :exit="{ x: '0%' }"
      :transition="{ duration: .8, ease: 'circInOut' }"
      ref="white-bg"
      class="absolute top-0 left-0 h-dvh w-full bg-secondary"
    />
    <h2
      class="font-mono absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 smear z-10 font-bold text-white whitespace-nowrap text-3xl"
    >
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: 0, ease: 'circInOut' }"
        class="inline-block"
      >
        H
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: .3, ease: 'circInOut' }"
        class="inline-block"
      >
        E
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: .6, ease: 'circInOut' }"
        class="inline-block"
      >
        L
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: .9, ease: 'circInOut' }"
        class="inline-block"
      >
        L
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: 1.2, ease: 'circInOut' }"
        class="inline-block"
      >
        O
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: 1.5, ease: 'circInOut' }"
        class="inline-block"
      >
        &nbsp
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: 1.8, ease: 'circInOut' }"
        class="inline-block"
      >
        W
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: 2.1, ease: 'circInOut' }"
        class="inline-block"
      >
        O
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: 2.4, ease: 'circInOut' }"
        class="inline-block"
      >
        R
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: 2.7, ease: 'circInOut' }"
        class="inline-block"
      >
        L
      </motion.span>
      <motion.span
        :initial="{ rotateX: '0'}"
        :animate="{ rotateX: '90deg'}"
        :transition="{ duration: .3, delay: 3, ease: 'circInOut' }"
        class="inline-block"
      >
        D
      </motion.span>
    </h2>
    <h2
      class="font-mono absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 smear z-10 font-bold text-white whitespace-nowrap text-3xl"
    >
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: .2, ease: 'circInOut' }"
        class="inline-block"
      >
        S
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: .5, ease: 'circInOut' }"
        class="inline-block"
      >
        A
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: .8, ease: 'circInOut' }"
        class="inline-block"
      >
        L
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: 1.1, ease: 'circInOut' }"
        class="inline-block"
      >
        U
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: 1.4, ease: 'circInOut' }"
        class="inline-block"
      >
        T
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: 1.7, ease: 'circInOut' }"
        class="inline-block"
      >
        A
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: 2, ease: 'circInOut' }"
        class="inline-block"
      >
        T
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: 2.3, ease: 'circInOut' }"
        class="inline-block"
      >
        I
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: 2.6, ease: 'circInOut' }"
        class="inline-block"
      >
        O
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: 2.9, ease: 'circInOut' }"
        class="inline-block"
      >
        N
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg'}"
        :animate="{ rotateX: '0'}"
        :transition="{ duration: .3, delay: 3.2, ease: 'circInOut' }"
        class="inline-block"
      >
        S
      </motion.span>
      <motion.span
        :initial="{ rotateX: '90deg', rotateZ: '0', scale: 1}"
        :animate="{ rotateX: '0', rotateZ: '35deg', scale: [1, 2, 1]}"
        :transition="{
          duration: 0.3,
          delay: 3.5,
          ease: 'circInOut',
          scale: {
            times: [0, 0.5, 1],
            ease: 'circInOut'
          }
        }"
        class="inline-block"
      >
        !
      </motion.span>
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