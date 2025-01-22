<template>
  <div class="h-full overflow-auto bg-white dark:bg-zinc-800 duration-500">
    <navigation></navigation>
    <div class="max-w-screen-xl mx-auto relative m-1 xl:mt-1">
      <listVue></listVue>
    </div>
  </div>
</template>

<script setup>
import listVue from './components/list/index.vue'
import navigation from './components/navigation/index.vue'
</script>

<style lang="scss" scoped></style>
