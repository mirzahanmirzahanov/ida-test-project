module.exports = {
	css: {
		loaderOptions: {
			sass: {
				sassOptions: {
					prependData: `@import "@/assets/styles/scss/styles.scss";`
				}
			}
		}
	}
};