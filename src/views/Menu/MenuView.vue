<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <ContentMenu />
    <SideBarRight />
  </v-app>
</template>

<script>
import SideBarRight from "../Menu/components/SideBarRight.vue";
import ContentMenu from "../Menu/components/ContentMenu.vue";

export default {
  name: "MenuView",
  components: {
    SideBarRight,
    ContentMenu,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
