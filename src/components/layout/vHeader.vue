<template>
  <div class="v-header">
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
          this.PRODUCTS.sort((minName, maxName) => {
            return minName.name > maxName.name;
          });
          break;
      }
    },
  },
};
</script>


<style lang="scss" scoped>

.v-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
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