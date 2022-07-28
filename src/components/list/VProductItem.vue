<template>
  <div 
    class="v-product-item"
    v-for="(product, id) in this.products"
    :key="id"
  >
    <div class="v-product-item__img">
      <img :src="product.image" alt="some fhoto" />
    </div>
    <p class="v-product-item__name">{{product.name}}</p>
    <p class="v-product-item__description">
      {{ product.description }}
    </p>
    <p class="v-product-item__price">{{ product.price }}</p>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  name: "v-product-item",
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  props: {},
  data: () => ({
    products:[]
  }),
  mounted() {
    this.products = this.PRODUCTS
  },
  methods: {},
};
</script>


<style lang="scss">
@import "@/assets/styles/scss/variables.scss";

.v-product-item {
  width: 100%;
  max-width: 330px;
  // display: flex;
  // flex-direction: column;
	// justify-content: space-between;
	background: $items-bg;
	border-radius: 4px;
  img {
    width: 100%;
  }
  p {
    padding: 16px;
  }
  p:last-child {
    padding: 16px 16px 24px 16px;
  }
}
</style>
