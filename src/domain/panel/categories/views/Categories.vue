<template>
  <section>
      <div class="is-flex is-align-items-center is-justify-content-start mt-5">
          <b-button class="button-blue-dashboard" @click="openAddCategory">Agregar categoría</b-button>
      </div>
      <b-modal
        v-model="addCategoryOpen"
        :has-modal-card="true"
        :can-cancel="['outside', 'escape', 'x']"
      > 
            <add-categroy-modal @close="addCategoryOpen = false"/>
      </b-modal>
      
      <div class="is-flex is-align-items-center is-justify-content-space-between mt-6 mb-3">
            <h3 class="subtitle" style="margin: auto 0;">Todas las categorías</h3>
            <b-field>
                <b-input
                    type="text" 
                    placeholder="Buscar categoria"
                    v-model="searchCatgory"
                    :disabled="loading"
                    custom-class="border-rounded-10"
                />
                <b-button @click="searchCategories" class="button-blue-dashboard border-radius-btn">
                    <feather-icon icon="SearchIcon"/>
                </b-button>
            </b-field>
      </div>
      <tables-categories />
  </section>
</template>

<script>
import AddCategroyModal from '../components/AddCategoryModal.vue'
import FeatherIcon from '@/components/commons/FeatherIcon.vue'
import TablesCategories from '../components/TablesCategories.vue'
export default {
    name: 'Categories',
    components: {
        FeatherIcon,
        TablesCategories,
        AddCategroyModal
    },
    data() {
        return {
            searchCatgory: '',
            loading: false,
            addCategoryOpen: false,
        }
    },
    created() {
        this.$store.commit("LayoutsStore/SET_LAYOUT", "PanelLayout");
    },
    methods: {
        openAddCategory() {
            this.addCategoryOpen = true;
        },
        async searchCategories() {
            this.loading = true;
            await this.$store.dispatch('Categories/getCategories', {search: this.searchCatgory});
            this.loading = false;
        },
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
<style>
.border-rounded-10 {
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
}

</style>