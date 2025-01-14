<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
      ref="ulTarget"
    >
      <li
        ref="sliderTarget"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
        :style="sliderStyle"
      ></li>
      <li
        class="fixed top-0 right-0 h-4 px-1 flex items-center bg-white dark:bg-zinc-900 z-20 shadow-l-white dark:shadow-l-zinc"
        @click="onShowPopup"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger" />
      </li>
      <li
        v-for="(item, index) in $store.getters.categorys"
        :ref="setItemRef"
        :key="item.id"
        @click="onItemClick(index)"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100': currentCategoryIndex === index
        }"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisable">
      <Menu @onItemClick="onItemClick"></Menu>
    </m-popup>
  </div>
</template>

<script setup>
import Menu from '@/views/main/components/menu/index.vue'
import { useScroll } from '@vueuse/core'
import { onBeforeUpdate, ref, watch } from 'vue'

// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})
// 选中的item下标
const currentCategoryIndex = ref(0)
// 获取填充的所有item元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})
// 获取ul元素，计算偏移位置
const ulTarget = ref(null)
const { x: ulScrollLeft } = useScroll(ulTarget)
watch(currentCategoryIndex, (val) => {
  // 获取选中元素的left、width
  const { left, width } = itemRefs[val].getBoundingClientRect()
  // 为sliderStyle设置属性
  sliderStyle.value = {
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  }
})
// item 点击事件
const onItemClick = (index) => {
  currentCategoryIndex.value = index
}
// 控制 popup 展示
const isVisable = ref(false)
const onShowPopup = () => (isVisable.value = true)
</script>

<style lang="scss" scoped></style>
