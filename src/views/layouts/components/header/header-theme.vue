<template>
  <m-popover class="guide-theme" placement="bottom_left">
    <!-- 具名插槽：触发弹层的媒介 -->
    <template #reference>
      <m-svg-icon
        class="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
        :name="svgIconName"
        fillClass="fill-zinc-900 dark:fill-zinc-300"
      />
    </template>
    <!-- 匿名插槽：弹层卡片 -->
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in themeArr"
        :key="item.id"
        @click="onItemClick(item)"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        />
        <span class="text-zinc-900 dark:text-zinc-300 text-sm">{{
          item.name
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
// 主题类型往后很多地方用到，所以抽取到常量文件夹中
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants'
import { computed } from 'vue'
import { useStore } from 'vuex'

const themeArr = [
  { id: '0', type: THEME_LIGHT, icon: 'theme-light', name: '极简白' },
  { id: '1', type: THEME_DARK, icon: 'theme-dark', name: '极夜黑' },
  { id: '2', type: THEME_SYSTEM, icon: 'theme-system', name: '跟随系统' }
]

const store = useStore()

// 主题切换事件
const onItemClick = (themeItem) => {
  store.commit('theme/changeThemeType', themeItem.type)
}
const svgIconName = computed(() => {
  const currentTheme = themeArr.find(
    (item) => item.type === store.getters.themeType
  )
  return currentTheme?.icon
})
</script>
