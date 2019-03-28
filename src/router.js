import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About'
import Projects from './components/Projects'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
