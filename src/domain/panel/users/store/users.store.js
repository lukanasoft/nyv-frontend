import AuthService from "@/domain/services/auth.service"
import UserService from "@/domain/services/user.service"

const state = {
    users: [],
    user: {},
}

const mutations = {
    SET_USERS(state, users) {
        state.users = users
    },
    SET_USER(state, user) {
        state.user = user
    },
    ADD_USER(state, user) {
        state.users.push(user)
    }
}

const actions = {
    async register({ commit }, user) {
        try {
            const response = await AuthService.register(user)
            commit('ADD_USER', response.data)
        } catch (error) {
            console.log(error)
        }
    },

    async deleteUser({ commit }, user) {
        try {
            await UserService.deleteUser(user.id)
        } catch (error) {
            console.log(error)
        }
    },

    async getAllUsers({ commit }) {
        try {
            const response = await UserService.getUsers()
            commit('SET_USERS', response.data)
        } catch (error) {
            console.log(error)
        }
    },

    async getUser({ commit }, id) {
        try {
            const response = await UserService.getUser(id)
            commit('SET_USER', response.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}