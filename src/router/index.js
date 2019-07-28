import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Match from '@/components/Match'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'match',
      component: Match
    }
  ]
})
