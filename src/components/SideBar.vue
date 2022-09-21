<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="white"
    mini-variant
    mini-variant-width="90"
  >
    <v-avatar class="d-block text-center mx-auto mt-4" size="40">
      <v-icon color="#704232">fas fa-coffee</v-icon>
    </v-avatar>
    <v-list flat class="mt-4">
      <v-list-item-group v-model="selectedItem" @change="changeNavigate">
        <v-list-item
          v-for="(menu, i) in menus"
          :key="i"
          active-class="border"
          :ripple="false"
        >
          <v-list-item-content>
            <v-icon v-text="menu.icon"></v-icon>
            <v-list-item-subtitle
              align="center"
              v-text="menu.text"
              class="mt-3 caption"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div
      style="
        position: absolute;
        bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <v-icon>fas fa-sign-out-alt</v-icon><br /><span class="caption"
        >Logout</span
      >
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    menus: [
      { icon: "fas fa-home", text: "Home", path: "/" },
      { icon: "fas fa-hamburger", text: "Menu", path: "/menu" },
      { icon: "fas fa-history", text: "History", path: "/history" },
      { icon: "fas fa-wallet", text: "Wallet", path: "/wallet" },
      { icon: "fas fa-percent", text: "Promo", path: "/promo" },
      { icon: "fas fa-cog", text: "Setting", path: "/setting" },
    ],
  }),
  created: function () {
    var currentUrl = window.location.pathname;
    const index = this.menus.findIndex((data) => currentUrl == data.path);
    this.selectedItem = index;
  },
  methods: {
    changeNavigate() {
      const path = this.menus[this.selectedItem].path;
      this.$router.push({ path });
    },
  },
};
</script>

<style scoped>
.border {
  margin-left: 8px;
  margin-right: 8px;
  background: #704232;
  border-radius: 20px;
  text-decoration: none;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle,
.theme--light.v-list-item .v-list-item__action-text {
  color: white !important;
}
</style>
