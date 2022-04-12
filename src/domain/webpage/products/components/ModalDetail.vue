<template>
    <div class="modal-card" style="min-width: auto">
        <header 
            class=" modal-card-head 
                    is-flex 
                    is-align-items-center
                    is-justify-content-end 
                    has-background-white
                    p-0
                "
        >
            <button type="button" class="delete" @click="closeModal"/>
        </header>
        <section class="modal-card-body is-grid">
            <div style="max-height: 200px">
                <b-carousel :autoplay="false" :indicator-inside="false" style="max-height: 200px">
                    <b-carousel-item v-for="(image, index) in product.photos" :key="index">
                        <div class="is-flex is-align-items-center is-justify-content-center">
                            <img class="image" :src="image.url" style="max-height: 200px" />
                        </div>
                    </b-carousel-item>
                </b-carousel>
            </div>
            <div class="px-6">
                <h1 class="is-text-24 has-text-left mb-2">{{ product.name }}</h1>
                <p class="is-text-18 has-text-left mb-2">Marca: {{ product.brand.name }}</p>
                <p class="is-text-18 has-text-left mb-2">Aplicacion: {{ product.aplication }}</p>
                <p class="is-text-18 has-text-left mb-2">Descripcion: {{ product.description }}</p>
                <div
                    class="is-flex is-justify-content-start is-align-items-center"
                >
                    <b-button
                        class="button-blue mt-5"
                        @click="addToCart"
                    >
                        Cotiza Ahora
                    </b-button>
                </div>
            </div>
        </section>
        <footer class="modal-card-foot">
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "ModalDetail",
    methods: {
        closeModal() {
            this.$store.commit('Products/SET_DETAIL_OPEN', false);
        },
        addToCart() {
            this.$store.commit('Products/ADD_TO_CART', this.product);
            this.closeModal();
        }
    },
    computed: {
        ...mapState({
            product: state => state.Products.product,
        }),
    },
}
</script>

<style scoped>
.is-text-24 {
    font-size: 24px;
    font-weight: 600;
}
.is-text-18 {
    font-size: 18px;
}
.delete, .delete:hover, .delete:focus {
    background: #B70006;
    border: none;
    border-radius: 0;
    width: 45px !important;
    height: 45px !important;
    max-width: 45px !important;
    max-height: 45px !important;
    min-width: 45px !important;
    min-height: 45px !important;
}
.modal-card-head, .modal-card-foot {
    border: none;
}
.modal-card-foot {
    background: linear-gradient(180deg, #BA0107 0%, #4D0103 100%);
}
.is-grid {
    display: grid;
    grid-template-columns: 3fr 5fr;
    gap: 30px;
}
@media(max-width: 768px) {
    .is-grid {
        grid-template-columns: 1fr 1fr;
    }
}
@media(max-width: 600px) {
    .is-grid {
        grid-template-columns: 1fr;
        justify-items: center;
    }
}
</style>
<style>
.is-active > .al img {
    border: 1px solid #fff;
    filter: grayscale(0%);
}
.al img {
    border: 1px solid transparent;
    filter: grayscale(100%);
}
</style>