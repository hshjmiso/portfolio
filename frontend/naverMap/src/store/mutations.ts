import { MutationTree } from 'vuex';
import { UserInfo, AuthCodeToken } from '@/common/types';
import { State } from './state';

export enum MutationType {
    SetUserInfo = 'SET_USER_INFO',
    SetRequestEmail = 'SET_REQUEST_EMAIL',
    SetAuthCodeToken = 'SET_AUTH_CODE_TOKEN',
    SetConfirmToken = 'SET_CONFIRM_TOKEN',
    SetActiveStep = 'SET_ACTIVE_STEP',

    IncrementActive = 'INCREMENT_ACTIVE',
    DecrementActive = 'DECREMENT_ACTIVE',
}

export interface Mutations {
    [MutationType.SetUserInfo](state: State, userInfo: UserInfo): void;
    [MutationType.SetRequestEmail](state: State, requestEmail: string): void;
    [MutationType.SetAuthCodeToken](state: State, authCodeToken: AuthCodeToken): void;
    [MutationType.SetConfirmToken](state: State, confirmToken: string): void;
    [MutationType.SetActiveStep](state: State, activeStep: number): void;
    [MutationType.IncrementActive](state: State): void;
    [MutationType.DecrementActive](state: State): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SetUserInfo](state, userInfo) {
        state.userInfo = { ...userInfo };
    },
    [MutationType.SetRequestEmail](state, requestEmail) {
        state.requestEmail = requestEmail;
    },
    [MutationType.SetAuthCodeToken](state, authCodeToken) {
        state.authCodeToken = { ...authCodeToken };
    },
    [MutationType.SetConfirmToken](state, confirmToken) {
        state.confirmToken = confirmToken;
    },
    [MutationType.SetActiveStep](state, activeStep) {
        state.activeStep = activeStep;
    },
    [MutationType.IncrementActive](state) {
        state.activeStep++;
    },
    [MutationType.DecrementActive](state) {
        state.activeStep++;
    },
};
