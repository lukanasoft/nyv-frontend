import BrandService from "@/domain/services/brand.service";

const state = {
    brands: [],
}
const mutations = {
    SET_BRANDS(state, brands) {
        state.brands = brands;
    }
}

const actions = {
    async getAll({ commit, state }) {
        if(state.brands.length > 0) { return; }
        try {
            const response = await BrandService.getAll()
            commit('SET_BRANDS', response.data)
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