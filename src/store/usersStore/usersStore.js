import {axiosGet} from "@/functions/axios";

export const usersStore = {
    state () {
        return {
            users: [],
            userFilters: {},
            filteredUsers: []
        }
    },
    getters: {
        users: state => state.users,
        userFilters: state => state.userFilters
    },
    mutations: {
        mutationUserFilters(state, payload = {}) {
            state.userFilters = payload
        },
        mutationUsers(state, data) {
            if (data.payload){
                state.users = { users: data.payload }
            } else {
                state.users = data.data ? data.data : []
                state.filteredUsers = data.data ? data.data : []
            }
        }
    },
    actions: {
        getUsers({dispatch, commit}, payload) {
            axiosGet('/database/users.json', (data) => {
                commit('mutationUsers', {data,payload})
            })
        }
    }
}
