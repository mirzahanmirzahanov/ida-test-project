<template>
<div class='home-page'>
	<v-form/>
	<v-product-list/>
</div>
</template>


<script>

import VProductList from '@/components/list/VProductList'
import VForm from '@/components/form/VForm'

export default {
components: {VForm, VProductList},
name: 'home-page', 
computed: {},
props: {},
data: () => ({}),
methods: {}
}
</script>


<style>

</style>