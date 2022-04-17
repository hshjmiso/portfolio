import { GetterTree } from 'vuex';
import { UserInfo, AuthCodeToken } from '@/common/types';
import { State } from './state';

export interface Getters {
    getUserInfo(state: State): UserInfo;
    getRequestEmail(state: State): string;
    getAuthCodeToken(state: State): AuthCodeToken;
    getConfirmToken(state: State): string;
    getActiveStep(state: State): number;
}

export const getters: GetterTree<State, State> & Getters = {
    getUserInfo(state) {
        return state.userInfo;
    },
    getRequestEmail(state) {
        return state.requestEmail;
    },
    getAuthCodeToken(state) {
        return state.authCodeToken;
    },
    getConfirmToken(state) {
        return state.confirmToken;
    },
    getActiveStep(state) {
        return state.activeStep;
    },
};
