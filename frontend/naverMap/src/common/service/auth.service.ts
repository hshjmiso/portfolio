import api from './api';
import { LoginInfo } from '@/common/types';
import TokenService from './token.service';

export const postLogin = (loginInfo: LoginInfo) => {
    const apiEndpoint = '/api/login';
    return api.post(apiEndpoint, loginInfo);
};

export const postLogout = () => {
    const apiEndpoint = '/api/logout';
    const accessToken = TokenService.getAccessToken();
    const axiosConfig = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return api.post(apiEndpoint, null, axiosConfig);
};
