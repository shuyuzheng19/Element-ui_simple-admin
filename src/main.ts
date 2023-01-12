import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementUi from "element-plus"

import "element-plus/dist/index.css"


import 'font-awesome/css/font-awesome.min.css'

createApp(App).use(ElementUi).use(router).mount('#app')
