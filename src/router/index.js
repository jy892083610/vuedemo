import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/director/header'
import Header1 from '@/components/director/header1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/header1',
      name: 'Header1',
      component: Header1
    }
  ] 

})
