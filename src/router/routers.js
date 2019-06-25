import Layout from '@/views/layout/index'
const routers = [{
    path: '/',
    redirect: '/dashboard'
}, {
    path: '/dashboard',
    component: Layout,
}, {
    path: '/login',
    component: resolve => require(['@/views/login.vue'], resolve),
},
];
export default routers;