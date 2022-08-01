<template>
  <div class="v-header">
		<!-- <h1>Добавить товар</h1> -->
		<div></div>
    <v-select
      :options="selectOptions"
      @selectedOption="showSelectedOption"
      :selected="selected"
    />
  </div>
</template>


<script>
import VSelect from "../select/vSelect.vue";

import { mapGetters } from "vuex";

export default {
  components: { VSelect },
  name: "v-header",
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  props: {},
  data: () => ({
    selectOptions: [
      { name: "Сначала дешевые", value: 1 },
      { name: "Сначала дорогие", value: 2 },
      { name: "По наименованию", value: 3 },
    ],
    selected: { name: "Выберите фильтр", value: 0 },
    products: [],
  }),
  // mounted() {
  //   this.products = [...this.PRODUCTS];
  // },
  methods: {
    showSelectedOption(option) {
      this.selected = option;
      this.sortedProducts();
    },
    sortedProducts() {
      switch (this.selected.value) {
        case 1:
          this.PRODUCTS.sort((minPrice, maxPrice) => {
            return minPrice.price - maxPrice.price;
          });
          break;
        case 2:
          this.PRODUCTS.sort((minPrice, maxPrice) => {
            return maxPrice.price - minPrice.price;
          });
          break;
        case 3:
          console.log("Функция пока не работает :)");
          // this.PRODUCTS.sort((a, b) => {
					// 		return b.name > a.name;
          // });
          break;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
}

@media (max-width: 720px) {
	.v-header {
		max-width: 310px;
		margin: 20px auto;
	}
}

</style>