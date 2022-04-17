import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/Login.vue';

const loginRecord: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
];

export default loginRecord;
