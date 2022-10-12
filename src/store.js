import { createStore } from "vuex";

const store = createStore({
    state: {
        user: null,
        desires: [],
    },

    getters: {
        validDesires(state) {
            return state.desires.filter(desire => {
                return desire.name.trim();
            });
        },

        validDesiresCount(state, getters) {
            return getters.validDesires.length;
        },

        allDesires(state) {
            return state.desires;
        },

        allDesiresCount(state) {
            return state.desires.length;
        },
    },

    mutations: {
        updateUser(state, user) {
            state.user = user;
        },

        createDesire(state, desire) {
            state.desires.push(desire);
        },
    },

    actions: {
        async fetchUser(ctx) {
            const response = await fetch(
                "https://my-json-server.typicode.com/NIKFED/json-server/profile"
            );
            const user = await response.json();
            ctx.commit('updateUser', user);
        },
    },
});

export default store;
