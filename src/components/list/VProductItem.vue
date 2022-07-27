<template>
  <div class="v-product-item">
    <div class="v-product-item__img">
      <img src="@/assets/images/camera.png" alt="some fhoto" />
    </div>
    <p class="v-product-item__name">Наименование товара</p>
    <p class="v-product-item__description">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <p class="v-product-item__price">10 000 руб.</p>
  </div>
  <div class="v-product-item">
    <div class="v-product-item__img">
      <img src="@/assets/images/camera.png" alt="some fhoto" />
    </div>
    <p class="v-product-item__name">Наименование товара</p>
    <p class="v-product-item__description">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <p class="v-product-item__price">10 000 руб.</p>
  </div>
  <div class="v-product-item">
    <div class="v-product-item__img">
      <img src="@/assets/images/camera.png" alt="some fhoto" />
    </div>
    <p class="v-product-item__name">Наименование товара</p>
    <p class="v-product-item__description">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <p class="v-product-item__price">10 000 руб.</p>
  </div>
  <div class="v-product-item">
    <div class="v-product-item__img">
      <img src="@/assets/images/camera.png" alt="some fhoto" />
    </div>
    <p class="v-product-item__name">Наименование товара</p>
    <p class="v-product-item__description">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <p class="v-product-item__price">10 000 руб.</p>
  </div>
  <div class="v-product-item">
    <div class="v-product-item__img">
      <img src="@/assets/images/camera.png" alt="some fhoto" />
    </div>
    <p class="v-product-item__name">Наименование товара</p>
    <p class="v-product-item__description">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <p class="v-product-item__price">10 000 руб.</p>
  </div>
  <div class="v-product-item">
    <div class="v-product-item__img">
      <img src="@/assets/images/camera.png" alt="some fhoto" />
    </div>
    <p class="v-product-item__name">Наименование товара</p>
    <p class="v-product-item__description">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <p class="v-product-item__price">10 000 руб.</p>
  </div>
</template>


<script>
export default {
  components: {},
  name: "v-product-item",
  computed: {},
  props: {},
  data: () => ({}),
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
