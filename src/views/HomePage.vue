<template>
  <div class="home-page">
    <v-form />
    <v-product-list />
  </div>
</template>


<script>
import VProductList from "@/components/list/VProductList";
import VForm from "@/components/form/VForm";

export default {
  components: { VForm, VProductList },
  name: "home-page",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang="scss" scoped>
.home-page {
  padding: 30px;
	display: flex;
	justify-content: space-between;
}

@media (max-width: 720px) {
	.home-page {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}

</style>