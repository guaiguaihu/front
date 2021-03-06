import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/order/table',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/bus',
    component: Layout,
    redirect: '/bus/table',
    name: '车辆管理',
    meta: { title: '车辆管理' },
    children: [
      {
        path: 'addBus',
        name: '添加车辆',
        component: () => import('@/views/bus/addBus'),
        meta: { title: '添加车辆', icon: 'form' },
        hidden: true
      },
      {
        path: 'editBus/:busId(\\d+)',
        name: '编辑车辆',
        component: () => import('@/views/bus/editBus'),
        meta: { title: '编辑车辆', icon: 'form' },
        hidden: true
      },
      {
        path: 'table',
        name: '车辆管理',
        component: () => import('@/views/bus/table'),
        meta: { title: '车辆管理', icon: 'table' }
      }
    ]
  },

  {
    path: '/order',
    component: Layout,
    redirect: '/order/table',
    name: '用车管理',
    meta: { title: '用车管理' },
    children: [
      {
        path: 'addOrder',
        name: '用车',
        component: () => import('@/views/order/addOrder'),
        meta: { title: '用车', icon: 'form' },
        hidden: true
      },
      {
        path: 'editOrder/:ordId(\\d+)',
        name: '编辑用车',
        component: () => import('@/views/order/editOrder'),
        meta: { title: '编辑用车', icon: 'form' },
        hidden: true
      },
      {
        path: 'table',
        name: '订单管理',
        component: () => import('@/views/order/table'),
        meta: { title: '订单管理', icon: 'table' }
      }
    ]
  },
  {
    path: '/cost',
    component: Layout,
    redirect: '/cost/table',
    name: '费用管理',
    meta: { title: '费用管理' },
    children: [
      {
        path: 'table',
        name: '费用管理',
        component: () => import('@/views/cost/table'),
        meta: { title: '费用管理', icon: 'table' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
