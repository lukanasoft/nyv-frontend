import BrandService from "@/domain/services/brand.service";
import Vue from "vue";

const state = {
    brands: [],
    brandsAll: {},
    brand: {},
}
const mutations = {
    SET_BRANDS(state, brands) {
        state.brands = brands;
    },
    SET_BRANDS_ALL(state, brandsAll) {
        state.brandsAll = brandsAll;
    },
    SET_BRAND(state, brand) {
        state.brand = brand;
    },
    UPDATE_BRAND_ALL(state, brand) {
        const index = state.brandsAll.findIndex(b => b.id === brand.id);
        if (index !== -1) {
            Vue.set(state.brandsAll, index, brand);
        }
    },
    PUSH_BRAND_ALL(state, brand) {
        state.brandsAll.push(brand);
    }
}

const actions = {
    async getAll({ commit, state }) {
        try {
            const response = await BrandService.getAll()
            commit('SET_BRANDS', response.data)
        } catch (error) {
            console.log(error)
        }
    },
    async getAllBrands({ commit, state }) {
        try {
            const response = await BrandService.getAllBrands()
            commit('SET_BRANDS_ALL', response.data)
        } catch (error) {
            console.log(error)
        }
    },
    async addBrand({ commit, state }, {formData}) {
        try {
            const response = await BrandService.addBrand(formData)
            commit('PUSH_BRAND_ALL', response.data)
        } catch (error) {
            console.log(error)
        }
    },
    async deleteBrand({ commit, state }, {id}) {
        try {
            const response = await BrandService.deleteBrand(id)
        } catch (error) {
            console.log(error)
        }
    },

    async removePhoto({ commit, state }, {id}) {
        try {
            await BrandService.removePhoto(id)
        } catch (error) {
            console.log(error)
        }
    },

    async editBrand({ commit, state }, {id, formData}) {
        try {
            const response = await BrandService.editBrand(id, formData)
            commit('UPDATE_BRAND_ALL', response.data)
        } catch (error) {
            console.log(error)
        }
    },
        
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}