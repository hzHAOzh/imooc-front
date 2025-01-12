import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const { width } = useWindowSize()
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

export const useREM = () => {
  const MAX_FONT_SIZE = 40

  // 监听 html 文档被解析完成的事件
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    html.style.fontSize = fontSize + 'px'
  })
}
