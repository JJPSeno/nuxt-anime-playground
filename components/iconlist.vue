<script setup lang="ts">
  const extract =  {
      slug: 'meowmeow',
      media: [],
      url: '',
      title: 'Website',
      description: 'A website for A website, A website, who is A website from A website of A website A website.',
      techUsed: ['react','framermotion', 'angular', 'angularjs'],
    }
</script>
<template>
  <section
    class="flex gap-2 mt-8"
  >
    <span
      v-for="(tech, idx) in extract.techUsed" :key="tech"
      class="relative rounded-lg bg-noise bg-center bg-no-repeat p-2 bg-[length:200%_200%]  border-black/60 border-2 border-solid origin-bottom"
      :style="{ transform: `translateX(-${idx*1}rem) rotateZ(10deg)`, backgroundPosition: `${15*idx}% ${8*idx}%`}"
    >
      <img
        class="w-8 aspect-square"
        :src="`/images/tech/${tech}.svg`"
      />
    </span>
  </section>
</template>