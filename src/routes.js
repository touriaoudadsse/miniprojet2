import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./components/Home";
import User from "./components/User";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/user',
            component: User,
            name: 'user'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

export default router;
