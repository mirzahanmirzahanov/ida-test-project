<template>
  <div class="v-product-list">
    <div class="v-product-list__container">
      <v-product-item
        v-for="(product, index) in this.PRODUCTS"
        :key="index"
        :product="product"
				:index="index"
      />
    </div>
  </div>
</template>


<script>
import VProductItem from "./VProductItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { VProductItem },
  name: "v-product-list",
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  props: {},
  data: () => ({}),
  methods: {
    deleteProduct(index) {
      this.DELETE_PRODUCTS(index);
    },
  },
};
</script>


<style lang="scss" scoped>
.v-product-list {
  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 1400px) {
  .v-product-list {
    &__container {
      display: grid;
      grid-template-columns: repeat(2, 330px);
      justify-content: center;
    }
  }
}

@media (max-width: 1070px) {
  .v-product-list {
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}

@media (max-width: 720px) {
  .v-product-list {
    position: relative;
    padding: 30px 0 0 0;
  }
}
</style>