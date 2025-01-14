import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import mLibs from './libs'
import router from './router'
import store from './store/index'
import './styles/index.scss'
import { useREM } from './utils/flexible'

useREM()
createApp(App).use(router).use(mLibs).use(store).mount('#app')
