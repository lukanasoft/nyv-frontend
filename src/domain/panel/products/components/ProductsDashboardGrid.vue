<template>
    <div class="has-background-white p-3" style="border-radius: 20px">
        <b-modal
            v-model="editProductOpen"
            :has-modal-card="true"
            full-screen	
            :can-cancel="['outside', 'x']"
        >
            <edit-product-modal @close="editProductOpen = false"/>
        </b-modal>
        <div class="grid-table grid-table-header">
            <span>
                Nombre
            </span>
            <span>
                Categoría
            </span>
            <span style="justify-self: center">
                Acciones
            </span>
        </div>
        <div 
            class="grid-table has-background-gray mb-2 grid-table-row" 
            style="border-radius: 10px"
            v-for="(product, index) in products" 
            :key="index"
        >
            <span>{{product.name}}</span>
            <span>{{product.category.name}}</span>
            <div style="justify-self: center" class="is-flex is-align-items-center">
                <feather-icon size="18" icon="Edit2Icon" class="is-clickable has-text-info" @click="openEditProduct(product)"/>
                <feather-icon size="18" icon="Trash2Icon" class="ml-4 has-text-danger is-clickable" @click="deleteProduct(product)"/>
            </div>
          </div>
    </div>
</template>

<script>
import EditProductModal from "./EditProductModal.vue"
import FeatherIcon from '@/components/commons/FeatherIcon.vue'
import {mapState} from 'vuex'
export default {
    components: { FeatherIcon, EditProductModal },
    name: 'ProductsDashboardGrid',
    computed: {
        ...mapState({
            products: state => state.Products.products
        })
    },
    data() {
        return {
            editProductOpen: false,
        }
    },
    async created() {
        await this.$store.dispatch('Products/getProducts', {})
    },
    methods: {
        openEditProduct(product) {
            this.$store.commit("Products/SET_PRODUCT", product);
            this.editProductOpen = true;
        },
        async deleteProduct(product) {
            const response = await this.$swal({
                title: '¿Estas seguro que deseas eliminar este producto?',
                text: "No podras revertir esta accion!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                cancelButtonText: 'No'
            })
            if(response.isConfirmed) {
                await this.$store.dispatch('Products/deleteProduct', product)
                await this.$store.dispatch('Products/getProducts', {})
            }
        }
    }
}
</script>

<style scoped>
.grid-table {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 10px;
    justify-items: flex-start;

}
.grid-table-header span {
    font-weight: bold;
    font-size: 20px;
}
.grid-table-row span {
    font-size: 16px;
    font-weight: 500;
}
</style>>

</style>