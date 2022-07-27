export default {
	state: {
		products: []
	},
	mutations: {
		SET_PRODUCT(state, product) {
			state.products.push(product)
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