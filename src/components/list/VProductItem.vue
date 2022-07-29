<template>
  <div 
    class="v-product-item"
    v-for="(product, index) in this.PRODUCTS"
    :key="index"
  >
    <div class="v-product-item__img">
      <img :src="product.image" alt="some fhoto" />
    </div>
    <p class="v-product-item__name">{{product.name}}</p>
    <p class="v-product-item__description">
      {{ product.description }}
    </p>
    <p class="v-product-item__price">{{ product.price }}</p>
    <div 
      @click="deleteProduct(index)"
      class="v-product-item__delete"
    >
      <img src="@/assets/images/trashBox.png" alt="trash-icon">
    </div>
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
  }),

  methods: {
    ...mapActions([
      'DELETE_PRODUCTS'
    ]),
    deleteProduct(index) {
      this.DELETE_PRODUCTS(index)
    }
  },
};
</script>


<style lang="scss">
@import "@/assets/styles/scss/variables.scss";

.v-product-item {
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: 330px;
  z-index: 5;
  // display: flex;
  // flex-direction: column;
	// justify-content: space-between;
	background: $items-bg;
	border-radius: 4px;
  &__img {
    img {
      width: 100%;
      border-radius: 4px 4px 0 0;
    }
  }
  p {
    padding: 16px;
  }
  p:last-child {
    padding: 16px 16px 24px 16px;
  }
  &__delete{
    visibility: hidden;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    top: -10px;
    right: -10px;
    background: $red;
    padding: 8px;
    z-index: 3;
    // transition: .3s ease-in-out;
  }

}

.v-product-item:hover {
  .v-product-item__delete {
    visibility: visible;
  }
}
</style>
