export default {
	state: {
		products: JSON.parse(localStorage.getItem('products'))
	},
	mutations: {
		SET_PRODUCT(state, product) {
			state.products.push(product)
			localStorage.setItem('products', JSON.stringify(state.products))
			// state.products = JSON.parse(localStorage.getItem('products'))
			
		}
	},
	actions: {
		GET_PRODUCTS({ commit }, product) {
			commit('SET_PRODUCT', product)
		},
	},
	getters: {
		PRODUCTS(state) {
			return state.products
		},
	},
}