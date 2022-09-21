import productService from "../../services/product.service.js";
export default {
  namespaced: true,
  state: {
    products: [],
    productCategorys: [],
  },
  getters: {
    products: (state) => state.products,
    productCategorys: (state) => state.productCategorys,
  },
  actions: {
    async getData({ commit }) {
      let products = await productService.getProduct();
      for (const product of products.data) {
        product.moods.mood_id = product.moods.items[0].id;
        product.sizes.size_id = product.sizes.items[0].id;
        product.sugars.sugar_id = product.sugars.items[0].id;
        product.ices.ice_id = product.ices.items[0].id;
      }
      commit("SET_PRODUCT", products.data);
    },
    async getDataProductCategory({ commit }) {
      const productCategorys = await productService.getProductCategory();
      commit("SET_PRODUCT_CATEGORY", productCategorys.data);
    },
  },
  mutations: {
    SET_PRODUCT(state, products) {
      state.products = products;
    },
    SET_PRODUCT_CATEGORY(state, productCategorys) {
      state.productCategorys = productCategorys;
    },
  },
};
