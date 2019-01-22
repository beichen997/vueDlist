// 路由拦截
import { staticRoutes } from './index'
import 'nprogress/nprogress.css' // 进度条
import NProgress from 'nprogress' // 进度调样式
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({ routes: staticRoutes, linkActiveClass: 'myActive' })
NProgress.configure({
  showSpinner: false
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
