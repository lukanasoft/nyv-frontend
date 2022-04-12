<template>
  <section>
        <div class="is-flex is-align-items-center is-justify-content-start mt-5">
            <b-button class="button-blue-dashboard" @click="openUploadProduct">Subir producto</b-button>
        </div>
        <b-modal
            v-model="uploadProductModalOpen"
            :has-modal-card="true"
            full-screen	
            :can-cancel="['outside', 'x']"
        > 
                <upload-product-modal @close="uploadProductModalOpen = false"/>
        </b-modal>
        <div class="is-flex is-align-items-center is-justify-content-space-between mt-6 mb-3">
            <h3 class="subtitle" style="margin: auto 0;">Todos los Productos</h3>
            <b-field>
                <b-input
                    type="text" 
                    placeholder="Buscar producto"
                    v-model="search"
                    :disabled="loading"
                    custom-class="border-rounded-10"
                />
                <b-button @click="searchProduct" class="button-blue-dashboard border-radius-btn">
                    <feather-icon icon="SearchIcon"/>
                </b-button>
            </b-field>
        </div>
        <products-dashboard-grid />
  </section>
</template>

<script>
import FeatherIcon from '@/components/commons/FeatherIcon.vue'
import UploadProductModal from '../components/UploadProductModal.vue'
import ProductsDashboardGrid from "../components/ProductsDashboardGrid.vue"

export default {
    name: 'ProductsDashboard',
    components: {
        UploadProductModal,
        FeatherIcon,
        ProductsDashboardGrid
    },
    data() {
        return {
            uploadProductModalOpen: false,
            search: '',
            loading: false,
        }
    },
    created() {
        this.$store.commit("LayoutsStore/SET_LAYOUT", "PanelLayout");
    },
    methods: {
        openUploadProduct() {
            this.uploadProductModalOpen = true;
        },
        async searchProduct() {
            this.loading = true;
            await this.$store.dispatch("Products/getProducts", {search: this.search, category: 0});
            this.loading = false;
        }
    }

}
</script>

<style scoped>
.subtitle {
    font-size: 24px;
    font-weight: 700;
    text-align: left;
}
.border-radius-btn {
    /*left no radius */
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}

</style>