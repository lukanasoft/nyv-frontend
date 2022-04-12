import AuthService from "@/domain/services/auth.service"
import UserService from "@/domain/services/user.service"
import Vue from "vue"

const state = {
    users: [],
    user: {},
    roles: [],
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
    },
    UPDATE_USER(state, user) {
        const index = state.users.findIndex(u => u.id === user.id)
        Vue.set(state.users, index, user)
    },
    SET_ROLES(state, roles) {
        Vue.set(state, "roles", roles)
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
    },

    async editUser({ commit }, user) {
        try {
            const editUser = await UserService.editUser(user.id, user)
            commit('UPDATE_USER', editUser.data)
        } catch (error) {
            console.log(error)
        }
    },

    async getRoles({ commit }) {
        try {
            const response = await UserService.getRoles()
            commit('SET_ROLES', response.data)
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