import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/putinlist'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/putinlist',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/advertising/index.vue'),
                    meta: { title: '广告列表' }
                },
                {
                    path: '/material',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/material/index.vue'),
                    meta: { title: '素材列表' }
                },
                {
                    path: '/account',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/account/index.vue'),
                    meta: { title: '账户中心' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                }]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]

});
