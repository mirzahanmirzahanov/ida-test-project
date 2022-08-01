<template>
  <div class="home-page">
    <v-header/>
    <div class="home-page__main">
      <v-form />
      <v-product-list />
    </div>
  </div>
</template>


<script>
import VProductList from "@/components/list/VProductList";
import VForm from "@/components/form/VForm";
import VHeader from '@/components/layout/vHeader.vue';

export default {
  components: { 
    VForm, 
    VProductList, 
    VHeader
  },
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
  &__main {
    display: flex;
    justify-content: space-between;
  }
}

@media (max-width: 720px) {
  .home-page {
    &__main {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>