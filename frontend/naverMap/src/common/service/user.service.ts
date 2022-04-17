import api from './api';
import { AuthCodeParams, ResetPassword } from '@/common/types';
import TokenService from './token.service';

const resetPasswordPath = '/api/reset-password';

export const getUser = () => {
    const apiEndpoint = '/api/user';
    const accessToken = TokenService.getAccessToken();
    const axiosConfig = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return api.get(apiEndpoint, axiosConfig);
};

export const getResetPasswordByEmail = (email: string) => {
    const apiEndpoint = `${resetPasswordPath}?email=${email}`;

    return api.get(apiEndpoint);
};

export const postResetPassword = (authCodeParams: AuthCodeParams) => {
    const apiEndpoint = resetPasswordPath;

    return api.post(apiEndpoint, authCodeParams);
};

export const patchResetPassword = (resetPassword: ResetPassword) => {
    const apiEndpoint = resetPasswordPath;

    return api.patch(apiEndpoint, resetPassword);
};
