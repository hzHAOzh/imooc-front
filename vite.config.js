import vue from '@vitejs/plugin-vue'
import path, { join } from 'path'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd()), 'src/assets/icnos'],
      symbolId: 'icon-[name]'
    })
  ],
  // 软连接
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  // 代理
  server: {
    proxy: {
      '/api': {
        target: 'https://api.imooc-front.lgdsunday.club/',
        changeOrigin: true
      }
    }
  }
})
