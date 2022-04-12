<template>
  <section class="has-background-white p-3 mt-6" style="border-radius: 20px">
        <b-modal
            v-model="editBrandModalOpen"
            :has-modal-card="true"
            :can-cancel="['outside', 'escape', 'x']"
        > 
                <edit-brand-modal @close="editBrandModalOpen = false"/>
        </b-modal>
      <div class="p-4">
          <div class="grid-table grid-table-header">
              <span>
                  Nombre
              </span>
              <span>
                  Principal
              </span>
              <span style="justify-self: center">
                  Acciones
              </span>
          </div>
          <div v-for="(brand, index) in brands" :key="index" class="grid-table has-background-gray mb-2 grid-table-row" style="border-radius: 10px">
                <span>{{brand.name}}</span>
                <span>{{brand.image ? 'Si' : 'No'}}</span>
                <div style="justify-self: center" class="is-flex is-align-items-center">
                    <feather-icon 
                        icon="Edit2Icon" 
                        size="18" 
                        class="has-text-info is-clickable"
                        @click="openEditBrand(brand)"
                    />
                    <feather-icon 
                        @click="deleteBrand(brand)" 
                        icon="Trash2Icon" 
                        size="18" 
                        class="ml-4 has-text-danger is-clickable"
                    />
                </div>
          </div>

      </div>
  </section>
</template>

<script>
import EditBrandModal from "../components/EditBrandModal.vue";
import FeatherIcon from '@/components/commons/FeatherIcon.vue'
import {mapState} from 'vuex'
export default {
  components: { FeatherIcon, EditBrandModal }, 
    name: 'UsersTable',
    computed: {
        ...mapState({
            brands: state => state.BrandStore.brandsAll,
        })
    },
    data() {
        return {
            editBrandModalOpen: false,
        }
    },
    async created() {
        await this.$store.dispatch('BrandStore/getAllBrands')
    },
    methods: {
        async deleteBrand(brand) {
            const result = await this.$swal({
                title: '¿Estás seguro que desea eliminar esta marca?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                cancelButtonText: 'No',
            })
            if (result.isConfirmed) {
                await this.$store.dispatch('BrandStore/deleteBrand', {id: brand.id})
                await this.$store.dispatch('BrandStore/getAllBrands')
            }
        },
        openEditBrand(brand) {
            this.$store.commit('BrandStore/SET_BRAND', brand)
            this.editBrandModalOpen = true;
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
</style>