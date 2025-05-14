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
      v-for="tech in extract.techUsed" :key="tech"
      class="rounded-md bg-white p-2"
    >
      <img
        class="w-10 aspect-square"
        :src="`/images/tech/${tech}.svg`"
      />
    </span>
  </section>
</template>