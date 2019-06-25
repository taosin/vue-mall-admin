import Layout from '../views/layout/index'
const routers = [{
    path: '/',
    redirect: '/dashboard'
}, {
    path: '/dashboard',
    component: Layout,
}
];
export default routers;