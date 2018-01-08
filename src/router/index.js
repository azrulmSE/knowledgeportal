import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Event from '../components/Event'
import EvenEmployeeProposition from '../components/EmployeeProposition'
import CodeEthics from '../components/CodeEthics'
import SignIn from '../components/SignIn'
import Contact from '../components/Contact'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes:[{
        name: 'main',
        path: '',
        component: Main
      },
      { 
        path: '*', 
        redirect: '/',
        component: Main 
      },
      {
        name: 'event',
        path: '/event',
        component: Event
      },
      {
        name: 'employeeproposition',
        path: '/employeeproposition',
        component: EvenEmployeeProposition
      },
      {
        name: 'codeethics',
        path: '/codeethics',
        component: CodeEthics
      },
      {
        name: 'signin',
        path: '/signin',
        component: SignIn
      },
      {
        name: 'contact',
        path: '/contact',
        component: Contact
      },]
})