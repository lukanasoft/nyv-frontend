<template>
    <div class="modal-card" style="max-width: 600px">
        <header class="modal-card-head border-0" style="background-color: #0992CD;">
            <p class="modal-card-title has-text-left has-text-white" style="font-weight: 600">Editar categoría</p>
        </header>
        <section class="modal-card-body">
            <b-field label="Categoria" class="has-text-left">
                <b-input
                    type="text"
                    v-model="category.name"
                    placeholder="Categoria"
                    ref="categoryName"
                    required
                />
            </b-field>
            <b-field>
                <template #label> 
                    <div class="is-flex is-align-items-center is-justify-content-space-between">
                        <span>
                            Subcategorias
                        </span>
                        <feather-icon @click="addChildren" class="is-clickable" style="color: #0992CD;" icon="PlusIcon" size="20"/>
                    </div>
                </template>
                <div class="is-flex is-flex-direction-column">
                    <div style="width: 100%" class="is-flex is-align-items-center is-justify-content-space-between" v-for="(child, index) in category.children" :key="index">
                        <b-input
                                type="text"
                                v-model="child.name"
                                placeholder="Subcategoria"
                                class="mb-2"
                                required
                                style="width: 95%"
                                ref="childrens"
                            />
                        <feather-icon @click="removeChildren(index)" class="is-clickable" style="color: red;" icon="Trash2Icon" size="15"/>
                    </div>
                </div>
            </b-field>
        </section>
        <footer class="modal-card-foot has-background-white is-flex is-align-items-center is-justify-content-end">
            <b-button class="button-blue-dashboard is-primary" @click="editCategory">Actualizar</b-button>
        </footer>
    </div>
</template>

<script>
import FeatherIcon from '@/components/commons/FeatherIcon.vue'
import {mapState} from 'vuex'

export default {
  components: { FeatherIcon },
    name: 'AddSubcategoryModal',
    data() {
        return {
            category: {
                name: '',
                children: [
                    {
                        name: ''
                    }
                ],
            },
        }
    },
    computed: {
        ...mapState({
            categoryState: state => state.Categories.category,
        }),
    },
    created() {
        this.category = JSON.parse(JSON.stringify(this.categoryState))
    },
    methods: {
        addChildren() {
            this.category.children.push({
                name: ''
            })
        },
        removeChildren(index) {
            if(this.category.children.length > 1) {
                this.category.children.splice(index, 1)
            }
        },
        closeModal() {
            this.$emit('close')
        },
        validateForm(){
            //checkHtml5Validity
            const categoryName = this.$refs.categoryName.checkHtml5Validity()
            if(this.$refs.childrens) {
                const childrens = this.$refs.childrens.reduce((acc, child) => child.checkHtml5Validity() && acc, true)
                return categoryName && childrens
            }
            console.log(childrens)
            return categoryName
        },
        async editCategory() {
            if(!this.validateForm()){
                return
            }
            await this.$store.dispatch('Categories/updateCategory', this.category)
            this.closeModal()
        },
    },
}
</script>

<style scoped>
.modal-card-head, .modal-card-foot {
    border: none;
}
</style>