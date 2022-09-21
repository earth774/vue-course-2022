<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>
      <ProductCategory />
      <Product />
    </v-container>
    <SideBarRight />
  </v-app>
</template>

<script>
import SideBarRight from "../Menu/components/SideBarRight.vue";
import Product from "./components/Product.vue";
import ProductCategory from "./components/ProductCategory.vue";
export default {
  name: "MenuView",
  components: {
    SideBarRight,
    Product,
    ProductCategory,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
