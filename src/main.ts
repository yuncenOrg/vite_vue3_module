import { createApp } from 'vue'
//引入模板的全局的样式
import '@/styles/index.scss'
// 引入 element-plus 插件样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置 element-plus 国际化
// 解决代码飘红问题，
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// Element-Plus 中 svg 插件需要的配置代码
import 'virtual:svg-icons-register'

// 如果引入 @/ 会爆红，查看 tsconfig.app.json 配置文件是否包含 baseUrl、paths
import globalComponent from '@/components'
import router from '@/router'
import pinia from '@/store'

import App from './App.vue'
// 获取实例对象
const app = createApp(App)
// 安装 element-plus 插件
// 安装自定义插件, 会主动把 @/components/index.ts 里面的 install() 引入进来
app.use(globalComponent)
app.use(ElementPlus, {
  // element-plus 国际化配置
  locale: zhCn,
})
// 安装路由
app.use(router)
// 安装仓库
app.use(pinia)

app.mount('#app')
