import { ActionContext, ActionTree } from 'vuex';
import { MutationType } from './mutations';
import { UserInfo, AuthCodeToken } from '@/common/types';
import { State } from './state';

export enum ActionTypes {
    UserInfo = 'USER_INFO',
    RequestEmail = 'REQUEST_EMAIL',
    AuthCodeToken = 'AUTH_CODE_TOKEN',
    ConfirmToken = 'CONFIRM_TOKEN',
    ActiveStep = 'ACTIVE_STEP',

    IncrementActive = 'INCREMENT_ACTIVE',
    DecrementActive = 'DECREMENT_ACTIVE',
}

export interface Actions {
    [ActionTypes.UserInfo](context: ActionContext<State, State>, userInfo: UserInfo): void;
    [ActionTypes.RequestEmail](context: ActionContext<State, State>, requestEmail: string): void;
    [ActionTypes.AuthCodeToken](context: ActionContext<State, State>, authCodeToken: AuthCodeToken): void;
    [ActionTypes.ConfirmToken](context: ActionContext<State, State>, confirmToken: string): void;
    [ActionTypes.ActiveStep](context: ActionContext<State, State>, activeStep: number): void;
    [ActionTypes.IncrementActive](context: ActionContext<State, State>): void;
    [ActionTypes.DecrementActive](context: ActionContext<State, State>): void;
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.UserInfo]({ commit }, userInfo: UserInfo) {
        commit(MutationType.SetUserInfo, userInfo);
    },
    [ActionTypes.RequestEmail]({ commit }, requestEmail: string) {
        commit(MutationType.SetRequestEmail, requestEmail);
    },
    [ActionTypes.AuthCodeToken]({ commit }, authCodeToken: AuthCodeToken) {
        commit(MutationType.SetAuthCodeToken, authCodeToken);
    },
    [ActionTypes.ConfirmToken]({ commit }, confirmToken: string) {
        commit(MutationType.SetConfirmToken, confirmToken);
    },
    [ActionTypes.ActiveStep]({ commit }, activeStep: number) {
        commit(MutationType.SetActiveStep, activeStep);
    },
    [ActionTypes.IncrementActive]({ commit }) {
        commit(MutationType.IncrementActive);
    },
    [ActionTypes.DecrementActive]({ commit }) {
        commit(MutationType.DecrementActive);
    },
};
