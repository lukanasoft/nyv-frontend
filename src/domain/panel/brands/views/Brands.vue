<template>
  <section>
        <div class="is-flex is-align-items-center is-justify-content-start mt-5">
            <b-button class="button-blue-dashboard" @click="openaddBrandModal">Agregar marca</b-button>
        </div>
        <b-modal
            v-model="addBrandModalOpen"
            :has-modal-card="true"
            :can-cancel="['outside', 'escape', 'x']"
        > 
                <add-brand-modal @close="addBrandModalOpen = false"/>
        </b-modal>
        <brands-table />
  </section>
</template>

<script>
import AddBrandModal from "../components/AddBrandModal.vue";
import BrandsTable from "../components/BrandsTable.vue";
export default {
    name: 'Brands',
    components: {
        AddBrandModal,
        BrandsTable
    },
    created() {
        this.$store.commit("LayoutsStore/SET_LAYOUT", "PanelLayout");
    },
    data() {
        return {
            addBrandModalOpen: false,
        }
    },
    methods: {
        openaddBrandModal() {
            this.addBrandModalOpen = true;
        },
    },

}
</script>

<style>

</style>