import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/layout/Index.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/Index.vue")
      }
    ]
  }
]

export default createRouter({
  routes, // 路由表
  history: createWebHistory() // 路由模式
})
