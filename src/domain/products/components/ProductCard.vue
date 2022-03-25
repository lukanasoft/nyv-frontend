<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="product.images[0].image" :alt="product.images[0].title" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content is-text-18">
        {{ product.name }}
      </div>
    </div>
    <footer class="card-footer">
      <b-button 
        class="w-50 button-red"
      >
        Cotiza
      </b-button>
      <b-button 
        class="w-50 button-blue"
        @click="openDetail"
      >
        Detalles
      </b-button>
    </footer>
  </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      openDetail() {
        this.$store.commit('Products/SET_PRODUCT', this.product);
        this.$store.commit('Products/SET_DETAIL_OPEN', true);
      },
    },
}
</script>

<style scoped>
.is-text-18 {
  font-size: 18px;
}
.card-footer {
  border: none;
}
</style>