import { UserInfo, AuthCodeToken } from '@/common/types';

export interface State {
    userInfo: UserInfo;
    requestEmail: string;
    authCodeToken: AuthCodeToken;
    confirmToken: string;
    activeStep: number;
}

//초기값
export const state: State = {
    userInfo: {
        email: '',
        lastConnectedAt: 0,
        name: '',
        profileImage: '',
    },
    requestEmail: '',
    authCodeToken: {
        issueToken: '',
        remainMillisecond: 0,
    },
    confirmToken: '',
    activeStep: 0,
};
