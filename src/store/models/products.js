export default {
	state: {
		products: JSON.parse(localStorage.getItem('products') || '[]')
	},
	mutations: {
		SET_PRODUCT(state, product) {
			
			state.products.push(product),
			localStorage.setItem('products', JSON.stringify(state.products))
		},
		DELETE_PRODUCT(state, index) {
			state.products.splice(index, 1)
			localStorage.setItem('products', JSON.stringify(state.products))
		}
	},
	actions: {
		GET_PRODUCTS({ commit }, product) {
			commit('SET_PRODUCT', product)
		},
		DELETE_PRODUCTS({ commit }, index) {
			commit('DELETE_PRODUCT', index)
		},
		
	},
	getters: {
		PRODUCTS(state) {
			return state.products
		},
	},
}