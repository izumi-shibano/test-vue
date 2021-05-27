import Vue from 'vue'
import Router from 'vue-router'
import Home from './src/components/Home.vue'
import About from './src/components/About.vue'
import Work from './src/components/Work.vue'
import Service from './src/components/Service.vue'
import Blog from './src/components/Blog.vue'
import Access from './src/components/Access.vue'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/access',
      name: 'Access',
      component: Access
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash ? { selector: to.hash, offset: { x: 0, y: 64 } } : { x: 0, y: 0 }
  }
})