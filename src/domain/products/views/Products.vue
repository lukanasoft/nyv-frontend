<template>
  <section class="container is-grid p-6">
    <filter-category class="mb-4" />
    <products-grid />
  </section>
</template>

<script>
import FilterCategory from '@/domain/products/components/FilterCategory.vue';
import ProductsGrid from '@/domain/products/components/ProductsGrid.vue';
export default {
  name: "ContactView",
  components: {
    FilterCategory,
    ProductsGrid,
  },
};
</script>

<style scoped>
.is-grid {
  display: grid;
  grid-template-columns: 2fr 5fr;
  column-gap: 30px;
}
@media(max-width: 1024px) {
    .is-grid {
        grid-template-columns: 1fr;
    }
}
</style>
