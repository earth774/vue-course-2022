export default {
  namespaced: true,
  state: {
    orders: [],
  },
  getters: {
    orders: (state) => state.orders,
  },
  actions: {
    async addOrder({ commit }, product) {
      commit("SET_ORDER", product);
    },
    async deleteOrder({ commit }, index) {
      commit("DELETE_ORDER", index);
    },
    async clearOrder({ commit }) {
      commit("CLEAR_ORDER");
    },
  },
  mutations: {
    SET_ORDER(state, product) {
      state.orders.push(product);
    },
    DELETE_ORDER(state, index) {
      state.orders.splice(index, 1);
    },
    CLEAR_ORDER(state) {
      state.orders = [];
    },
  },
};
