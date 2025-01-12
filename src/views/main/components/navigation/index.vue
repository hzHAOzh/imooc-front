<template>
  <mobile-navigation v-if="isMobileTerminal" :data="categoryData" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
import { getCategory } from '@/api/category'
import { ref } from 'vue'

const categoryData = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categoryData.value = categorys
}
getCategoryData()
</script>

<style lang="scss" scoped></style>
