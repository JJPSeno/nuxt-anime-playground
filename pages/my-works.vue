<script setup lang="ts">

</script>
<template>
  <div>
    <main
      class="bg-primary flex flex-col sm:flex-row"
    >
    <div
      class="w-full h-44 sm:h-auto sm:w-1/3 lg:min-w-80 lg:w-80 shrink-0 custom-border relative"
    >

    </div>
    <div
      class="flex flex-col basis-auto p-4 max-w-screen-xl"
    >
      <section
        id="#game-dev"
        class="min-h-dvh w-full after:block after:bg-secondary after:absolute after:skew-x-3 after:bottom-0"
      >
      <div
        class="pr-2 relative w-full text-white"
      >
        <div
          class="absolute -left-2 top-0 bg-pattern bg-cover bg-no-repeat w-12 h-full"
        />
        <span class="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-secondary relative inline-block z-10">
          <span class="relative text-black z-20">
          When you look
          </span>
        </span>
        <p
          class="ml-14 relative z-20 text-white top-3 mb-4"
        >
          All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. 
        </p>
        <div
          class="ml-14"
        >
          <Iconlist />
        </div>
        <p
          class="ml-8 z-20 text-right italic text-dark text-md"
        >
          sphynx of black quartz judge my vow
        </p>
      </div>
      </section>
      <section
        id="#web-dev"
        class="min-h-dvh w-full after:block after:bg-secondary after:absolute after:skew-x-3 after:bottom-0"
      >
      <div
        class="border-solid border-secondary border-2 pb-2 pr-2 relative w-full"
      >
        <span class="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-secondary relative inline-block z-10">
          <span class="relative text-black z-20">
          When you look
          </span>
        </span>
        <p
          class="ml-8 relative z-20 text-white top-3 mb-4"
        >
          All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. All the time, people think that you're busy. 
        </p>
        <p
          class="z-20 text-right italic text-dark text-md"
        >
          sphynx of black quartz judge my vow
        </p>
      </div>
      </section>
    </div>
    </main>
    <div
      class="bg-primary h-dvh relative"
    >
      <div
        class="absolute bottom-10 right-10 w-1/12 lg:w-[5%] aspect-square bg-secondary"
      />
    </div>
  </div>
</template>
<style lang="css" scoped>

.custom-border::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, rgba(var(--dark-rgb), 1) 0%, rgba(var(--dark-rgb), 0) 100%);
  pointer-events: none;
}

</style>