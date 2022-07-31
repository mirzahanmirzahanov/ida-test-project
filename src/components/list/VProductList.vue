<template>
  <div class="v-product-list">
    <div class="v-product-list__container">
      <v-product-item
        v-for="(product, index) in this.PRODUCTS"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>


<script>
import VProductItem from "./VProductItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { VProductItem },
  name: "v-product-list",
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang="scss">
.v-product-list {
  // align-self: end;
  &__container {
		display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 0 0 20px;
	}
}
</style>