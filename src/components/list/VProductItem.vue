<template>
  <div class="v-product-item">
    <div class="v-product-item__img">
      <img :src="product.image" alt="some fhoto" />
    </div>
    <div class="v-product-item__info">
      <p class="v-product-item__name">{{ product.name }}</p>
      <p class="v-product-item__description">
        {{ product.description }}
      </p>
      <p class="v-product-item__price">{{ product.price }}</p>
    </div>
    <div @click="deleteProduct(index)" class="v-product-item__delete">
      <img src="@/assets/images/trashBox.png" alt="trash-icon" />
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
  props: {
    product: {
      type: Object,
      default: () => {},
      required: true,
    },
    index: {
      type: Number,
      default: () => Number,
      required: true,
    }
  },
  data: () => ({}),

  methods: {
    ...mapActions(["DELETE_PRODUCTS"]),
    deleteProduct(index) {
      this.DELETE_PRODUCTS(index);
      
    },
  },
};
</script>


<style lang="scss">
@import "@/assets/styles/scss/variables.scss";

.v-product-item {
  display: flex;
  flex-direction: column;
  justify-content: s;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;
  width: 100%;
  max-width: 330px;
  height: 100%;
  max-height: 430px;
  background: $items-bg;
  border-radius: 4px;

  &__img {
    width: 330px;
    height: 200px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 4px 4px 0 0;
    }
  }
  &__info {
    position: relative;
    p {
      display: block;
      padding: 16px;
    }
    p:last-child {
      padding: 16px 16px 24px;
    }
  }
  &__description {
    flex: 1 1 auto;
  }

  &__delete {
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
  }
}

.v-product-item:hover {
  .v-product-item__delete {
    visibility: visible;
  }
}
</style>
