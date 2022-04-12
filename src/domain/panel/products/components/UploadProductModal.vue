<template>
    <div class="modal-card">
        <header class="modal-card-head border-0" style="background-color: #0992CD;">
            <p class="modal-card-title has-text-left has-text-white" style="font-weight: 600">
                Agregar producto
            </p>
        </header>
        <section class="modal-card-body grid-product p-6">
            <div style="width: 100%;">
                <h3 class="grid-product-subtitle has-text-left mb-4">Fotos</h3>
                <b-upload
                    v-model="product.photos"
                    multiple
                    drag-drop
                    accept="image/*"
                    expanded
                >
                    <section class="section">
                        <div class="content has-text-centered">
                            <p>
                                <b-icon
                                    icon="upload"
                                    size="is-large">
                                </b-icon>
                            </p>
                            <p>Sube las imagenes de tus productos</p>
                        </div>
                    </section>
                </b-upload>
                <div class="photos-grid">
                    <div v-for="(file, index) in product.photos" :key="index" style="position: relative">
                        <img :src="encodeImageFileAsURL(file)" alt=""/>
                        <!-- button close -->
                        <feather-icon 
                            class="is-clickable has-text-info" 
                            @click="removePhoto(index)" 
                            icon="XIcon" 
                            style="position: absolute" 
                            size="20"
                        />
                    </div>
                </div>
            </div>
            <div style="width: 100%">
                <div class="is-flex is-justify-content-space-between" style="margin-bottom: 15px">
                    <div style="width:45%">
                        <h3 class="grid-product-subtitle has-text-left">
                            Nombre
                        </h3>
                        <b-field>
                            <b-input 
                                class="input-dashboard"
                                custom-class="has-background-gray"
                                v-model="product.name"
                                ref="name"
                                type="text" 
                                required 
                            />
                        </b-field>
                    </div>
                    <div style="width:45%">
                        <h3 class="grid-product-subtitle has-text-left">
                            Codigo
                        </h3>
                        <b-field>
                            <b-input 
                                class="input-dashboard"
                                custom-class="has-background-gray"
                                v-model="product.code"
                                ref="code"
                                type="text" 
                                required 
                            />
                        </b-field>
                    </div>
                </div>
                <div class="is-flex is-justify-content-space-between" style="margin-bottom: 15px">
                    <div style="width:45%">
                        <h3 class="grid-product-subtitle has-text-left">
                            Importancia: {{product.importance}}
                        </h3>
                        <b-field>
                            <b-slider 
                                v-model="product.importance" 
                                type="is-info"
                                :min="1"
                                :max="10" 
                            />
                        </b-field>
                    </div>
                    <div style="width:45%">
                        <h3 class="grid-product-subtitle has-text-left">
                            Marca
                        </h3>
                        <b-field>
                            <b-select  
                                class="has-background-gray"
                                v-model="product.brand"
                                expanded
                                required
                                ref="brand"
                            > 
                                <option 
                                    v-for="brand in brandsAll" 
                                    :key="brand.id" 
                                    :value="brand.id"
                                >
                                    {{brand.name}}
                                </option>   
                            </b-select>
                        </b-field>
                    </div>
                </div>
                <div>
                    <h3 class="grid-product-subtitle has-text-left">
                        Descripcion
                    </h3>
                    <b-field>
                        <b-input 
                            class="input-dashboard"
                            custom-class="has-background-gray"
                            v-model="product.description" 
                            maxlength="200" 
                            type="textarea"
                            required
                            ref="description"
                        />
                    </b-field>
                </div>
                <h3 class="grid-product-subtitle has-text-left">
                    Aplicacion
                </h3>
                <b-field>
                    <b-input 
                        class="input-dashboard"
                        custom-class="has-background-gray"
                        v-model="product.application" 
                        ref="application"
                        maxlength="200" 
                        type="textarea"
                        required 
                    />
                </b-field>
            </div>
            <div style="width: 100%">
                <h3 class="grid-product-subtitle has-text-left mb-4">Categoria</h3>
                <div class="has-background-gray p-5" 
                    style="
                        border-radius: 15px
                        min-height: 0;
                        max-height: 60vh;
                        overflow-y: scroll;
                    "
                >
                    <template v-for="(cat, index) in categories">
                        <b-radio
                            v-if="cat.children.length === 0"
                            class="my-2"
                            :key="index"
                            v-model="product.category"
                            :native-value="cat.id"
                            type="is-info"
                        >
                            {{ cat.name }}
                        </b-radio>
                        <b-collapse
                            v-if="cat.children.length > 0"
                            :key="index"
                            class="is-flex is-flex-direction-column is-align-items-start is-justify-content-start"
                        >
                            <template #trigger="props">
                            <a
                                class="has-text-black has-text-left is-flex is-align-items-center is-justify-content-start"
                                style="font-weight: 600"
                                :aria-expanded="props.open"
                            >
                                <b-icon class="mr-1" :icon="!props.open ? 'plus' : 'minus'"></b-icon>
                                {{ cat.name }}
                            </a>
                            </template>
                            <div class="is-flex is-flex-direction-column is-align-items-start is-justify-content-start ml-4">
                            <b-radio
                                v-for="(child, index) in cat.children"
                                class="my-2"
                                :key="index"
                                v-model="product.category"
                                :native-value="child.id"
                                type="is-info"
                            >
                                {{ child.name }}
                            </b-radio>
                            </div>
                        </b-collapse>
                    </template>
                </div>
            </div>
        </section>
        <footer class="modal-card-foot has-background-white is-flex is-align-items-center is-justify-content-end">
            <b-button class="button-blue-dashboard is-primary" @click="uploadProduct">Subir producto</b-button>
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import FeatherIcon from '@/components/commons/FeatherIcon.vue';
export default {
    name: 'AddUserModal',
    components: {
        FeatherIcon
    },
    data() {
        return {
            photos: [],
            product: {
                name: '',
                code: '',
                description: '',
                application: '',
                importance: 1,
                brand: '',
                photos: [],
                category: '',
            },
        }
    },
    async created() {
        await this.$store.dispatch("BrandStore/getAllBrands");
        await this.$store.dispatch('Categories/getCategories');
    },
    computed: {
        ...mapState({
            brandsAll: state => state.BrandStore.brandsAll,
            categories: state => state.Categories.categories,
            currentUser: state => state.AuthStore.user,
        }),
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        validateForm(){
            
        },
        removePhoto(index) {
            this.product.photos.splice(index, 1);
        },
        encodeImageFileAsURL(file) {
            return URL.createObjectURL(file);
        },
        validateForm() {
            let response = true;
            if (this.product.photos.length === 0) {
                this.$buefy.snackbar.open({
                    duration: 3000,
                    message: 'Agrega una o mas fotos',
                    type: 'is-info',
                    position: 'is-bottom-left',
                });
                response = false;
            }
            if(this.product.category === ''){
                this.$buefy.snackbar.open({
                    duration: 3000,
                    message: 'Selecciona una categoria',
                    type: 'is-info',
                    position: 'is-top-right',
                });
                response = false;
            }

            const name = this.$refs.name.checkHtml5Validity();
            const code = this.$refs.code.checkHtml5Validity();
            const brand = this.$refs.brand.checkHtml5Validity();
            const description = this.$refs.description.checkHtml5Validity();
            const application = this.$refs.application.checkHtml5Validity();

            return response && name && code && description && application && brand;
        },
        async uploadProduct() {
            if(!this.validateForm()) return;
            // form data to send
            let formData = new FormData();
            console.log(this.product.photos[0] instanceof Blob);
            formData.append('name', this.product.name);
            formData.append('code', this.product.code);
            formData.append('description', this.product.description);
            formData.append('application', this.product.application);
            formData.append('importance', this.product.importance);
            formData.append('brand', this.product.brand);
            formData.append('category', this.product.category);
            formData.append('user_id', this.currentUser.id);
            this.product.photos.forEach((photo) => {
                formData.append('photos[]', photo, photo.name);
            });
            // send request
            try {
                await this.$store.dispatch('Products/addProduct', formData);
                await this.$swal({
                    title: 'Producto agregado',
                    text: 'El producto se ha agregado correctamente',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ok'
                })
                this.closeModal();
            } catch (error) {
                console.log(error);
                this.$swal({
                    title: 'Error',
                    text: 'Ha ocurrido un error al agregar el producto, intentalo otra vez',
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ok'
                })
            }
        },
    },
}
</script>

<style scoped>
.modal-card-head, .modal-card-foot {
    border: none;
}

.grid-product {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 50px;
    justify-items: flex-start;
}
.grid-product-subtitle {
    font-weight: 600;
    font-size: 20px;
}
.photos-grid {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-items: center;
}
</style>

<style>
.select select {
    background: #EBF3F6 !important;
}
</style>