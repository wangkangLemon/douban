import Vue from 'vue'
import Router from 'vue-router'
import reg from '../pages/reg'
import login from '../pages/login'
import index from '../pages/index'
import movieHot from '../pages/movieHot'
import usNew from '../pages/usNew'
import seach from '../pages/seach'
import books from '../pages/books'
import group from '../pages/group'
import radio from '../pages/radio'
import details from '../pages/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/movieHot',
      name: 'movieHot',
      component: movieHot
    },
    {
      path: '/usNew',
      name: 'usNew',
      component: usNew
    },
    {
      path: '/seach',
      name: 'seach',
      component: seach
    },
    {
      path: '/books',
      name: 'books',
      component: books
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/*',
      redirect:"index"
    }
  ]
})
