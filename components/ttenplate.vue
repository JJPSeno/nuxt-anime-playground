<script setup lang="ts">
import { useScroll, useTransform, motion } from "motion-v"
const { scrollY } = useScroll()
const objectPosition = ref('0%')

const obPosY = useTransform(scrollY, [0, 500], ['0%', '40%'])
watchEffect(() => {
  const unsubscribe = obPosY.on('change', (latest) => {
    objectPosition.value = latest
  })
  return unsubscribe
})
</script>
<template>
  <div
    class="bg-primary"
  >
    <motion.img 
      src="/images/backgrounds/ttten.svg"
      class="w-full h-full object-cover"
      :style="{objectPosition: `100% ${objectPosition}` }"
      />
    </div>
</template>