<template>
    <div class="modal-card" style="max-width: 600px">
        <header class="modal-card-head border-0" style="background-color: #0992CD;">
            <p class="modal-card-title has-text-left has-text-white" style="font-weight: 600">Editar marca</p>
        </header>
        <section class="modal-card-body">
            <b-field label="Nombre" class="has-text-left">
                <b-input
                    custom-class="has-background-gray"
                    type="text"
                    v-model="brand.name"
                    placeholder="Nombre"
                    ref="name"
                    required
                />
            </b-field>
            <b-field class="is-flex is-align-items-start">
                <b-checkbox v-model="checkbox" type="is-info">
                    ¿Es una marca principal? 
                </b-checkbox>
            </b-field>
            <transition name="fade">
                <div v-if="checkbox">
                    <b-field>
                        <b-upload v-if="!brand.image" v-model="brand.image" drag-drop expanded>
                            <section class="section">
                            <div class="content has-text-centered">
                                <p>
                                <b-icon icon="upload" size="is-large"></b-icon>
                                </p>
                                <p>Sube el logo de la marca</p>
                            </div>
                            </section>
                        </b-upload>
                    </b-field>
                    <div v-if="brand.image">
                        <img :src="encodeImageFileAsURL(brand.image)" alt="brand" />
                        <feather-icon 
                            class="is-clickable has-text-info" 
                            @click="removePhoto" 
                            icon="XIcon" 
                            style="position: absolute" 
                            size="20"
                        />
                    </div>
                    
                </div>
            </transition>
        </section>
        <footer class="modal-card-foot has-background-white is-flex is-align-items-center is-justify-content-end">
            <b-button class="button-blue-dashboard is-primary" @click="editBrand">Agregar</b-button>
        </footer>
    </div>
</template>

<script>
import FeatherIcon from '@/components/commons/FeatherIcon.vue';
import { mapState } from 'vuex';
export default {
    name: 'AddBrandModal',
    components: {
        FeatherIcon
    },
    data() {
        return {
            brand: {
                name: '',
                image: null,
            },
            checkbox: false,
        }
    },
    computed: {
        ...mapState({
            brandState: state => state.BrandStore.brand,
        }),
    },
    created() {
        this.brand = JSON.parse(JSON.stringify(this.brandState));
        if(this.brand.image) {
           this.checkbox = true;
        }
    },
    methods: {
        async removePhoto(file) {
            if(file instanceof File) {
                this.brand.image = null;
                return
            }
            const result = await this.$swal({
                title: '¿Estás seguro de eliminar esta foto?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                cancelButtonText: 'No'
            });     
            if(result.isConfirmed) {
                await this.$store.dispatch('BrandStore/removePhoto', {id: this.brand.id})
                this.brand.image = null;
            }
        },
        closeModal() {
            this.$emit('close')
        },
        encodeImageFileAsURL(file) {
            if(file instanceof File) return URL.createObjectURL(file);
            return file;
        },
        validateForm(){
            const name = this.$refs.name.checkHtml5Validity()
            if(this.checkbox) {
                if(!this.brand.image) {
                    this.$buefy.snackbar.open({
                        duration: 4000,
                        message: 'Debes subir una imagen',
                        type: 'is-danger',
                        position: 'is-top-right',
                    })
                    return false
                }
            }
            return name
        },
        async editBrand() {
            if(!this.validateForm()){
                return
            }
            //form data
            const formData = new FormData()
            formData.append('name', this.brand.name)
            if(this.brand.image instanceof File) {
                formData.append('images[]', this.brand.image, this.brand.image.name)
            }
            await this.$store.dispatch('BrandStore/editBrand', {formData, id: this.brand.id})
            this.closeModal()
        },
    },
    watch: {
        checkbox(value) {
            if(!value){
                this.brand.image = null
            }
        }
    }
}
</script>

<style scoped>
.modal-card-head, .modal-card-foot {
    border: none;
}
</style>