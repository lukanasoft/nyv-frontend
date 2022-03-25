<template>
  <aside>
    <div v-if="showButton" 
      class="is-flex is-align-items-end is-justify-content-end mb-4"
    >
      <b-button 
        @click="showFilter = !showFilter"  
        class="show-button"
        type="is-info"
      >
          <feather-icon icon="FilterIcon" /> Categorias
      </b-button>
    </div>
    <transition name="fade">
      <nav
        v-if="showFilter || !showButton"
        class="has-background-black
              has-text-white 
              is-flex 
              is-flex-direction-column 
              is-align-items-start 
              is-justify-content-start
              p-6
              filter-black
              "
      >
        <b-radio
          class="my-2"
          v-for="(cat, index) in categories"
          :key="index"
          v-model="category"
          :native-value="cat.id"
          type="is-info"
        >
          {{ cat.name }}
        </b-radio>
      </nav>
    </transition>
  </aside>
</template>

<script>
import FeatherIcon from '@/components/commons/FeatherIcon.vue';
import { mapState } from 'vuex';
export default {
  components: { FeatherIcon },
  name: "FilterComponent",
  data() {
    return {
      showButton: false,
      showFilter: false,
      windowWidth: null,
    }
  },
  computed: {
    ...mapState({
      categories: state => state.Categories.categories,
    }),
    category: {
      get() {
        return this.$store.state.Categories.category;
      },
      set(value) {
        this.$store.commit('Categories/SET_CATEGORY', value);
      },
    },
  },
  watch: {
    category: {
      async handler() {
        await this.$store.dispatch('Products/getProducts', {category: this.category});
        if(this.windowWidth < 750) {
          this.showFilter = false;
        }
      },
      deep: true,
    },
    windowWidth(newVal) {
      if(newVal <= 1024) {
        this.showButton = true;
        this.$store.commit('Products/SET_PER_PAGE', 6);
        this.$store.dispatch('Products/getProducts', {category: this.category});
      } else {
        this.showButton = false;
        this.$store.commit('Products/SET_PER_PAGE', 9);
        this.$store.dispatch('Products/getProducts', {category: this.category});
      }
    },
  },
  async created() {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
      console.log(this.isMobile)
    })
    await this.$store.dispatch('Categories/getCategories');
  },
};
</script>

<style scoped>
.b-radio:hover {
  color: white;
}
.font-size-24 {
  font-size: 24px !important;
}
@media(max-width: 1024) {
    .filter-black {
      flex-direction: row !important;
      flex-wrap: wrap;
    }
}
</style>