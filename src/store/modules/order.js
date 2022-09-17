export default {
  namespaced: true,
  state: {
    data: {},
  },
  getters: {
    data: (state) => state.data,
  },
  actions: {
    async getData({ commit }) {
      const data = await fetch("https://api.coincap.io/v2/assets");
      commit("SET_DATA", await data.json());
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
  },
};
