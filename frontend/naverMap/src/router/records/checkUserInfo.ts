import { RouteRecordRaw } from 'vue-router';
import CheckUserInfo from '@/views/CheckUserInfo.vue';

const CheckUserInfoRecord: RouteRecordRaw = {
    path: '/checkUserInfo',
    name: 'checkUserInfo',
    component: CheckUserInfo,
};

export default CheckUserInfoRecord;
