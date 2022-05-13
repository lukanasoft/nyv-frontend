<template>
  <article>
      <div class="is-grid-title">
          <h3 class="is-font-48">Productos</h3>
          <div class="line-title"/>
      </div>
      <div class="is-grid-cards" v-if="products.length > 0">
          <product-card 
            v-for="(product, index) in products" 
            :key="index"
            :product="product" 
          />
      </div>
      <div v-else>
            <b-message
                type="is-info" 
            >
                No se encontraron productos en su busqueda
            </b-message>
      </div>
      <div>
          <b-pagination
            v-if="products.length > 0"
            :total="total"
            :per-page="perPage"
            size="is-small"
            v-model="page"
            order="is-centered"
          />
      </div>
  </article>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '@/domain/webpage/products/components/ProductCard.vue';
export default {
    name: "ProductsGrid",
    components: {
        ProductCard,
    },
    computed: {
        ...mapState({
            products: state => state.Products.products,
            perPage: state => state.Products.perPage,
            total: state => state.Products.total,
            category: state => state.Categories.category,
        }),
        page: {
            get() {
                return this.$store.state.Products.page;
            },
            set(value) {
                this.$store.commit('Products/SET_PAGE', value);
            },
        },
        searchQuery() {
            return this.$route.query.search;
        }
    },
    watch: {
        page: {
            async handler() {
                await this.$store.dispatch('Products/getProducts', {category: this.category});
            },
            deep: true,
        },
        async searchQuery() {
           await this.$store.dispatch('Products/getProducts', {search: this.$route.query.search});
        },
    },
    async created() {
        // if have param query in url
        if (this.$route.query.search) {
            await this.$store.dispatch('Products/getProducts', {search: this.$route.query.search});
        } else {
            await this.$store.dispatch('Products/getProducts', {category: this.category});
        }
    },

}
</script>

<style scoped>
.is-font-48 {
  font-size: 48px;
  font-weight: 600;
  justify-self: start;
}
.is-grid-title {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
}
.line-title {
    background-color: #088EC8;
    height: 4px;
}
.is-grid-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    gap: 20px;
}
@media(max-width: 1024px) {
    .is-grid-cards {
        grid-template-columns: repeat(2, 1fr);
    }
    .is-grid-title {
        display: none;
    }
}
@media(max-width: 566px) {
    .is-grid-cards {
        grid-template-columns: 1fr !important;
    }
}
</style>
<style>
.pagination-link.is-current {
    background-color: #088EC8 !important;
    color: white;
    border: none;
}
</style>