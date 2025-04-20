import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    component: () => import("..//views/About.vue")
  }
]

export default createRouter({
  routes, // 路由表
  history: createWebHistory() // 路由模式
})
