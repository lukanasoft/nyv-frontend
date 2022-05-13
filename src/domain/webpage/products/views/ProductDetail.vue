<template>
  <section class="container is-custom-flex p-6">
    <products-gallery class="gallery-class" :items="product.photos ? product.photos : []" />
    <div style="max-width: 450px;" class="is-flex is-flex-direction-column is-align-items-start is-justify-content-space-between">
      <div class="is-flex is-flex-direction-column is-align-items-start">
        <h2 class="product-title has-text-left">
          {{product.code}} - {{ product.name }}
        </h2>
        <p class="has-text-left" style="font-size: 18px">Codigo: {{product.code}}</p>
        <p class="has-text-left" style="font-size: 18px">Categoria: {{product.category ? product.category.name : ''}}</p>
        <p class="has-text-left" style="font-size: 18px">Marca: {{product.brand ? product.brand.name : product.brand}}</p>
        <p class="has-text-left" style="font-size: 18px">Descripcion: {{product.description}}</p>
        <p class="has-text-left" style="font-size: 18px">Aplicacion: {{product.aplication}}</p>
      </div>
      <b-button @click="addToCart" class="button-red mt-4" expanded>Cotiza Ahora</b-button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ProductsGallery from "../components/ProductsGallery.vue";
export default {
  name: "ProductDetailView",
  components: {
    ProductsGallery
  },
  computed: {
    ...mapState({
      product: state => state.Products.product
    })
  },
  async created() {
    this.$store.commit("LayoutsStore/SET_LAYOUT", "SimpleLayout");
    await this.$store.dispatch("Products/getProduct", {id: this.$route.params.id});
  },
  methods: {
    addToCart() {
        this.$store.commit('Products/ADD_TO_CART', this.product);
      },
  }
};
</script>
<style scoped>
.gallery-class {
  margin-right: 60px
}
.is-custom-flex {
  display: flex;
  align-items: start;
  justify-content: center;
 
}
.product-title{
  font-weight: 600;
  font-size: 36px;
}
@media screen and (max-width: 768px) {
  .is-custom-flex {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .gallery-class {
    margin-right: 0
  }
}
</style>
