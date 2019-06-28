import Layout from '@/views/layout/index'
const routers = [{
    path: '/',
    redirect: 'dashboard',
    component: Layout,
    children: [
        {
            name: 'dashboard',
            path: '/dashboard',
            component: Layout,
            component: () => import('@/views/dashboard/index.vue'),
            meta: { title: '首页', icon: 'product-list' }
        }
    ]
}, {
    path: '/login',
    component: resolve => require(['@/views/login.vue'], resolve),
    meta: { title: '登录', icon: 'product-list' }
}
]
export default routers