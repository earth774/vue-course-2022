<template>
  <div>
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <v-toolbar-title class="mt-1">Choose Category</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        label="Search category or menu..."
        class="mt-5"
        color="brown"
        filled
        append-icon="mdi-magnify"
        dense
        solo
        flat
        background-color="grey lighten-4"
      ></v-text-field>
    </v-toolbar>
    <v-item-group mandatory class="mt-n1">
      <v-container>
        <v-row justify="center" class="space">
          <v-col
            cols="12"
            md="2"
            v-for="product_category in productCategorys"
            :key="product_category.id"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? '#F6EFEF' : 'white'"
                :class="active ? 'borderme' : 'borderout'"
                class="d-flex align-center rounded-lg mx-2"
                dark
                height="140"
                @click="toggle"
                flat
              >
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-list-item three-line class="text-center">
                      <v-list-item-content>
                        <div align="center" justify="center">
                          <v-img
                            :src="product_category.image_path"
                            :max-height="product_category.height"
                            :max-width="product_category.width"
                            contain
                          ></v-img>
                        </div>
                        <v-list-item-subtitle
                          :class="active ? 'brown--text' : 'black--text'"
                          class="caption mt-4"
                          >{{ product_category.name }}</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductCategory",
  computed: {
    ...mapGetters({
      productCategorys: "product/productCategorys",
    }),
  },
  mounted() {
    this.getDataProductCategory();
  },
  methods: {
    ...mapActions({
      getDataProductCategory: "product/getDataProductCategory",
    }),
  },
};
</script>

<style scoped>
.v-list-item {
  padding: 0 9px;
}
.v-card.borderme {
  border: 2px solid #704232 !important;
}
.v-card.borderout {
  border: 1px solid #bcaaa4 !important;
}
</style>
