import { createStore } from 'vuex';

import { State, state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const store = createStore<State>({
    state,
    mutations,
    actions,
    getters,
});

export default store;
