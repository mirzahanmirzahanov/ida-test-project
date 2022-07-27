<template>
<div class='v-product-list'>
	<v-product-item/>
</div>
</template>


<script>
import VProductItem from './VProductItem.vue'

export default {
components: {VProductItem},
name: 'v-product-list', 
computed: {},
props: {},
data: () => ({}),
methods: {}
}
</script>


<style lang="scss">
.v-product-list{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	padding: 0 0 0 20px;
}
</style>