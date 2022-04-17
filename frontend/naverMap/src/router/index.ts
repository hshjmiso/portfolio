import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import loginRecord from '@/router/records/login';
import checkUserInfoRecord from '@/router/records/checkUserInfo';
import resetPasswordRecord from '@/router/records/resetPassword';

const routes: Array<RouteRecordRaw> = [
    ...loginRecord,
    checkUserInfoRecord,
    resetPasswordRecord,
    { path: '/:pathMatch(.*)*', redirect: { name: 'login' } },
];

const routerConfig = {
    history: createWebHistory(process.env.BASE_URL),
    routes,
};

const router = createRouter(routerConfig);

export default router;
