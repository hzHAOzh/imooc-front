<template>
  <mobile-navigation v-if="isMobileTerminal" :data="categoryData" />
</template>

<script setup>
import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'
import { isMobileTerminal } from '@/utils/flexible'
import { ref } from 'vue'
import mobileNavigation from './mobile/index.vue'

const categoryData = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categoryData.value = categorys
  categoryData.value.unshift(ALL_CATEGORY_ITEM)
}
getCategoryData()
</script>

<style lang="scss" scoped></style>
