<script setup lang="ts">
  const extract =  {
      slug: 'artPortfolio',
      media: [],
      url: 'https://jkevinyu.vercel.app/',
      title: 'Artist Portfolio',
      description: 'A portfolio website for one of my best friends, John Kevin Yu, who is an artist from my home province of Cebu.',
      techUsed: ['react','framermotion'],
    }
</script>
<template>
  <section
    class="flex flex-col"
  >
    <span
      v-for="tech in extract.techUsed" :key="tech"
    >
      <img
        :src="`/images/tech/${tech}.svg`"
      />
    </span>
  </section>
</template>