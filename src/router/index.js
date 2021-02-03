import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "login" */ '../views/home/Index.vue'),
        },
        {
            path: '/1',
            component: () => import(/* webpackChunkName: "login" */ '../views/home/Index.vue'),
            meta: { title: '登录' }
        },
        
        {
            path: '/2',
            component: () => import(/* webpackChunkName: "login" */ '../views/home/Index.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/3',
            component: () => import(/* webpackChunkName: "login" */ '../views/home/Index.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/test',
            component: () => import(/* webpackChunkName: "login" */ '../views/test/Test.vue'),
            meta: { title: '登录' }
        }
    ]
});
