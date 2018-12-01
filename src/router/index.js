
import Vue from 'vue'
import Router from 'vue-router'

// 路由组件懒加载
const bloglist = () => import('../pages/bloglist.vue')
const file = () => import('../pages/file.vue')
const search = () => import('../pages/search.vue')
const usercenter = () => import('../pages/usercenter.vue')

// 全局注册Vue-router组件
Vue.use(Router)

// 动态加载组件
export default new Router({
  //  去掉地址中的哈希#
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/bloglist',
      meta: {
        item: '综合',
        show: true // 设置导航隐藏显示
      }
    },

    {
      path: '/bloglist',
      component: bloglist,
      meta: {
        item: '综合',
        show: true
      }
    },
    {
      path: '/file',
      component: file,
      meta: {
        item: '归档',
        show: true
      }
    },
    {
      path: '/search',
      component: search,
      meta: {
        item: '发现',
        show: true
      }
    },
    {
      path: '/usercenter',
      component: usercenter,
      meta: {
        item: '我的',
        show: true
      }
    }

  ]
})
