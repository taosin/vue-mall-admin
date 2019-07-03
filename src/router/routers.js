/**
 * name: 唯一标识
 * path: 路由路径
 * redirect: 路由重定向
 * component: 页面展示
 * isMenu:Boolean 是否菜单, 默认是菜单，值为 true
 * needAuth:Boolean 是否需要权限校验， 默认值为 true
 */
import Layout from '@/views/layout/index'
const routers = [
   {
        name: 'home',
        path: '/',
        redirect: '/dashboard',
        component: Layout,
        meta: { title: '首页', icon: 'user-list' },
        children: [
            {
                name: 'dashboard',
                path: '/dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: { title: '首页', icon: 'product-list' }
            }
        ]
        
    }, {
        name: 'user',
        path: '/user',
        component: Layout,
        redirect: 'user/list',
        meta: { title: '用户管理', icon: 'user-list' },
        children: [
            {
                name: 'user-list',
                path: '/user/list',
                component: () => import('@/views/user/list.vue'),
                meta: { title: '用户列表', icon: 'user-list' }
            }
        ]
    }, {
        name: 'order',
        path: '/order',
        component: Layout,
        redirect: 'order/list',
        meta: { title: '订单管理', icon: 'order-list' },
        children: [
            {
                name: 'order-list',
                path: '/order/list',
                component: () => import('@/views/order/list.vue'),
                meta: { title: '订单列表', icon: 'order-list' }
            }
        ]
    }, {
        path: '/login',
        component: resolve => require(['@/views/login.vue'], resolve),
        meta: { title: '登录', icon: 'product-list' },
        isMenu: false,
        needAuth: false 
    }
]
export default routers