import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./components/Home";
import User from "./components/User";
import WorkingTime from "./components/WorkingTime";
import WorkingTimes from "./components/WorkingTimes";
import ClockManager from "./components/ClockManager";
import ChartManager from "./components/ChartManager";
import ListUser from "./components/ListUser"

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
            path: '/workingTime/:userid',
            alias: '/workingTime/:userid/:workingtimeid',
            component: WorkingTime,
            name: 'workingtime'
        },
        {
            path: '/listUser',
            component: ListUser,
            name: 'listUser'
        },
        {
            path: '/workingTimes/:userid',
            component: WorkingTimes,
            name: 'workingtimes'
        },
        {
            path: '/clock/:username',
            component: ClockManager,
            name: 'clockmanager'
        },
        {
            path: '/chartManager/:userid',
            component: ChartManager,
            name: 'chartmanager'
        },
        {
            path: '*',
            redirect: '/'
        }
        
    ]
});

export default router;
