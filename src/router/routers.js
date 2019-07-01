import Layout from '@/views/layout/index'
const routers = [
   {
        name: 'home',
        path: '/',
        redirect: '/dashboard',
        component: Layout,
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
        meta: { title: '登录', icon: 'product-list' }
    }
]
export default routers