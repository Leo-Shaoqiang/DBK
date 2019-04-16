import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'

Vue.use(Router) 
 const  router=  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'*',
      redirect:'/',
    },
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: () => import('@/components/Movie.vue')
    },
    {                                               
      path: '/Issue',
      name: 'Issue',
      component: () => import('@/components/Issue.vue')
    },
    {
      path: '/Myinfo',
      name: 'Myinfo',
      component: () => import('@/views/Myinfo.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import( '@/components/Login.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import( '@/components/Register.vue')
    }
  ]
});
//  router.beforeEach((to, from, next) => {
//        if(to.path !== '/Login'){
//          if(window.isLogin){
//            next()
//          }else{
//            next('./Login?redirect= '+ to.path);
//          }
//        }else{
//          next()
//        }    
   
//  })
 export default  router;