import { RouteRecordRaw } from 'vue-router';
import ResetPassword from '@/views/ResetPassword.vue';

const resetPasswordRecord: RouteRecordRaw = {
    path: '/resetPassword',
    name: 'resetPassword',
    component: ResetPassword,
    children: [
        {
            path: '/requestAuthCode',
            name: 'requestAuthCode',
            component: () => import('@/views/ResetPassword/RequestAuthCode.vue'),
        },
        {
            path: '/verifyAuthCode',
            name: 'verifyAuthCode',
            component: () => import('@/views/ResetPassword/VerifyAuthCode.vue'),
            props: true,
        },
        {
            path: '/changePassword',
            name: 'changePassword',
            component: () => import('@/views/ResetPassword/ChangePassword.vue'),
        },
    ],
};

export default resetPasswordRecord;
