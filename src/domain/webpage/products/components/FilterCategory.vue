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
        <template v-for="(cat, index) in categories">
          <b-radio
            v-if="cat.children.length === 0"
            class="my-2"
            :key="index"
            v-model="category"
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
                class="has-text-white has-text-left is-flex is-align-items-center is-justify-content-start"
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
                v-model="category"
                :native-value="child.id"
                type="is-info"
              >
                {{ child.name }}
              </b-radio>
            </div>
          </b-collapse>
        </template>
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
      perPage: state => state.Products.perPage,

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
      if(newVal <= 1024 && this.perPage !== 6) {
        this.showButton = true;
        this.$store.commit('Products/SET_PER_PAGE', 6);
        this.$store.dispatch('Products/getProducts', {category: this.category});
      } else if(newVal > 1024 && this.perPage !== 9) {
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
    })
    await this.$store.dispatch('Categories/getCategories');
  },
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}
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