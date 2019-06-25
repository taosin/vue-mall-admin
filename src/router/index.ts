import Vue from 'vue';
import Router from 'vue-router';
import routes from './routers';

Vue.use(Router);
const routers = new Router({
    routes,
    mode: 'history',
});

// routers.beforeEach((to, from, next) => {
//     next()
// })

// routers.afterEach(to => {

// })
export default routers;
