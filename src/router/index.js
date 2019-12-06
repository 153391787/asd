import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home/shouye"
  },
  {
    path:"/home",
    component: ()=>import("../views/Home/Home.vue"),
    children:[
      {
        path:"shouye",
        component: ()=>import("../views/Home/Shou/Shou.vue"),
      },
      {
        path:"my",
        component: ()=>import("../views/Home/My/My.vue"),
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
