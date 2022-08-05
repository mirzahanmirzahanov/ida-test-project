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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
}

@media (max-width: 720px) {
  
  .home-page {
    &__main {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }
  }
}
</style>