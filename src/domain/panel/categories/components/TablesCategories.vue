<template>
  <div class="has-background-white p-3" style="border-radius: 20px">
      <b-modal
        v-model="addSubcategoryOpen"
        :has-modal-card="true"
        :can-cancel="['outside', 'escape', 'x']"
      >
            <add-subcategory-modal @close="addSubcategoryOpen = false"/>
      </b-modal>
      <div v-for="(category, index) in categories" class="p-4" :key="index">
          <div class="is-flex is-align-items-center is-justify-content-space-between mb-3">
              <h3 style="font-size: 20px; font-weight: 600; margin: auto 0;">{{category.name}}</h3>
              <div>
                  <feather-icon size="22" icon="PlusIcon" class="is-clickable mr-3" @click="openAddSubcategory(category)" style="color: #0992CD"/>
                  <feather-icon size="20" icon="Trash2Icon" class="is-clickable" @click="deleteCategory(category.id)"/>
              </div>
          </div>
          <div class="has-background-gray px-4 py-2 mb-2 is-flex is-align-items-center is-justify-content-space-between" style="border-radius: 10px" v-for="(subcategory, index) in category.children" :key="index">
              <div>
                  <span>
                      {{subcategory.name}}
                  </span>
              </div>
              <feather-icon size="18" icon="Trash2Icon" class="is-clickable" @click="deleteCategory(subcategory.id)"/>

          </div>
      </div>
  </div>
</template>

<script>
import AddSubcategoryModal from "./AddSubcategoryModal.vue"
import FeatherIcon from '@/components/commons/FeatherIcon.vue'
import {mapState} from 'vuex'
export default {
    components: { FeatherIcon, AddSubcategoryModal },
    name: 'TablesCategories',
    computed: {
        ...mapState({
            categories: state => state.Categories.categories
        })
    },
    data() {
        return {
            addSubcategoryOpen: false,
        }
    },
    async created() {
        await this.$store.dispatch('Categories/getCategories')
    },
    methods: {
        openAddSubcategory(category) {
            this.$store.commit("Categories/SET_CATEGORY", category);
            this.addSubcategoryOpen = true;
        },
        async deleteCategory(subcategory) {
            const response = await this.$swal({
                title: '¿Estas seguro que deseas eliminar esta categoria?',
                text: "No podras revertir esta accion!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                cancelButtonText: 'No'
            })
            if(response.isConfirmed) {
                await this.$store.dispatch('Categories/deleteCategory', subcategory)
                await this.$store.dispatch('Categories/getCategories')
            }
        }
    }
}
</script>

<style scoped>

</style>>

</style>