<template>
  <!-- 鼠标移入弹出卡片，鼠标移出卡片消失，enter 和 leave 这两个事件都不冒泡 -->
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <div ref="referenceTarget">
      <!-- 具名插槽：触发弹层卡片的媒介 -->
      <slot name="reference" />
    </div>
    <!-- 气泡展示 -->
    <transition name="slide">
      <div
        v-show="isVisable"
        class="absolute p-1 z-20 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-md"
        ref="contentTarget"
        :style="contentStyle"
      >
        <!-- 匿名插槽：弹层卡片 -->
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
const PROP_TOP_LEFT = 'top_left'
const PROP_TOP_RIGHT = 'top_right'
const PROP_BOTTOM_LEFT = 'bottom_left'
const PROP_BOTTOM_RIGHT = 'bottom_right'
const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT
]

// 气泡延迟关闭时间，单位 ms
const DELAY_TIME = 200
</script>

<script setup>
import { useElementSize } from '@vueuse/core'
import { nextTick, ref, watch } from 'vue'
const props = defineProps({
  placement: {
    type: String,
    default: PROP_BOTTOM_LEFT,
    validator(val) {
      const result = placementEnum.includes(val)
      if (!result)
        throw new Error(
          `placement 属性值必须为下列中一个：${placementEnum.join('、')}`
        )
      return result
    }
  }
})

const isVisable = ref(false)

let timer = null

// 鼠标移入事件
const onMouseenter = () => {
  isVisable.value = true
  if (timer) {
    clearTimeout(timer)
  }
}
// 鼠标移出事件
const onMouseleave = () => {
  timer = setTimeout(() => {
    isVisable.value = false
    timer = null
  }, DELAY_TIME)
}

// 具名插槽父级 div
const referenceTarget = ref(null)
// 匿名插槽父级 div
const contentTarget = ref(null)
// 弹层气泡卡片样式对象
const contentStyle = ref({
  top: '0px',
  left: '0px'
})

watch(isVisable, (val) => {
  if (!val) return
  /**
   * vue 在数据改变后，需要等一个 EventLoop 周期 DOM 才会渲染变化
   * 所以在 isVisable 改变后是无法直接拿到准确的 contentTarget 元素的
   * 要用 nextTick 等待 DOM 渲染完成后，在执行的回调中进行相关处理
   */
  nextTick(() => {
    switch (props.placement) {
      case PROP_TOP_LEFT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      case PROP_TOP_RIGHT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          useElementSize(contentTarget.value).width + 'px'
        break
      case PROP_BOTTOM_LEFT:
        contentStyle.value.top =
          useElementSize(contentTarget.value).height + 'px'
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      case PROP_BOTTOM_RIGHT:
        contentStyle.value.top =
          useElementSize(contentTarget.value).height + 'px'
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
    }

    contentStyle.value = {
      top: top + 'px',
      left: left + 'px'
    }
  })
})
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
