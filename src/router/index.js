import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login",
  },{
    path:"/detail",
    name:"detail",
    component:()=>import("../views/detail.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import("../views/login.vue"),
  },{
    path: '/home',
    name: 'home',
    component:()=>import("../views/home.vue"),
    redirect:"/home/book",
    children:[
      {
        path: '/home/book',
        component: ()=>import("../views/book.vue"),
      },{
        path: '/home/booklist',
        component: ()=>import("../views/booklist.vue"),
      }
    ]
  },{
    path:"/register",
    name:"register",
    component:()=>import("../views/register.vue")
  },{
    path:"*",
    redirect:"/home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
