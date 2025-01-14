<template>
  <mobile-navigation v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import { useStore } from 'vuex'
import mobileNavigation from './mobile/index.vue'

const store = useStore()
// 触发的 action 是 category 模块下的 useCategoryData
store.dispatch('category/useCategoryData')
</script>

<style lang="scss" scoped></style>
