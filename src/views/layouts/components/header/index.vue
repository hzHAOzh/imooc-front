<template>
  <div
    class="w-full bg-white border-b border-b-zinc-200 px-2 py-1 dark:bg-zinc-800 dark:border-b-zinc-700"
  >
    <div class="flex items-center">
      <img
        class="h-4 cursor-pointer mr-2"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        @click="onToHome"
      />
      <header-search class="mr-1"></header-search>
      <header-theme class="mr-1"></header-theme>
      <header-my></header-my>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import headerMy from './header-my.vue'
import headerSearch from './header-search/index.vue'
import headerTheme from './header-theme.vue'

const router = useRouter()
const onToHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped></style>
