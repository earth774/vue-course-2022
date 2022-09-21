<template>
  <div>
    <v-toolbar color="#EEEEEE" flat>
      <v-toolbar-title>Coffee Menu</v-toolbar-title><v-spacer></v-spacer
      ><span color="grey">{{ products.length }} Coffees Results</span>
    </v-toolbar>
    <v-row>
      <v-col cols="12" sm="6" v-for="product in products" :key="product.id">
        <v-card flat class="rounded-lg mx-5">
          <v-list-item three-line>
            <v-list-item-avatar rounded size="120" color="grey lighten-4">
              <v-img :src="product.image_path"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                {{ product.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="mt-1">{{
                product.description
              }}</v-list-item-subtitle>
              <strong class="mt-3"> {{ product.price | price }} </strong>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-3">{{ product.moods.name }}</strong
                ><br />
                <v-item-group mandatory class="mt-n1">
                  <v-container>
                    <v-row class="">
                      <v-col
                        cols="12"
                        md="4"
                        v-for="mood in product.moods.items"
                        :key="mood.id"
                      >
                        <v-item>
                          <v-card
                            color="#F6EFEF"
                            :class="
                              product.moods.mood_id == mood.id ? 'borderme' : ''
                            "
                            class="d-flex align-center rounded-circle"
                            dark
                            height="50"
                            width="50"
                            @click="product.moods.mood_id = mood.id"
                            flat
                          >
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <v-icon dark :color="mood.colorIcon">
                                  {{ mood.icon }}
                                </v-icon>
                              </v-list-item-content>
                            </v-list-item>
                          </v-card>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-col>
              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-3">{{ product.sizes.name }}</strong
                ><br />
                <v-item-group mandatory class="mt-n1">
                  <v-container>
                    <v-row class="">
                      <v-col
                        cols="12"
                        md="4"
                        v-for="size in product.sizes.items"
                        :key="size.id"
                      >
                        <v-item>
                          <v-card
                            color="#F6EFEF"
                            :class="
                              product.sizes.size_id == size.id ? 'borderme' : ''
                            "
                            class="d-flex align-center rounded-circle"
                            height="50"
                            width="50"
                            @click="product.sizes.size_id = size.id"
                            flat
                          >
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong class="font-weight-black">{{
                                  size.name
                                }}</strong>
                              </v-list-item-content>
                            </v-list-item>
                          </v-card>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-actions>
            <v-row>
              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-3">{{ product.sugars.name }}</strong
                ><br />

                <v-item-group mandatory class="mt-n1">
                  <v-container>
                    <v-row class="">
                      <v-col
                        cols="12"
                        md="4"
                        v-for="sugar in product.sugars.items"
                        :key="sugar.id"
                      >
                        <v-item>
                          <v-card
                            color="#F6EFEF"
                            :class="
                              product.sugars.sugar_id == sugar.id
                                ? 'borderme'
                                : ''
                            "
                            class="d-flex align-center rounded-circle"
                            height="50"
                            width="50"
                            @click="product.sugars.sugar_id = sugar.id"
                            flat
                          >
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong
                                  class="overline"
                                  :class="
                                    product.sugars.sugar_id == sugar.id
                                      ? 'brown--text'
                                      : 'red--text'
                                  "
                                  >{{ sugar.percent }}</strong
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-card>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-col>
              <v-col cols="12" sm="6" class="mt-1">
                <strong class="ml-3">{{ product.ices.name }}</strong
                ><br />
                <v-item-group mandatory class="mt-n1">
                  <v-container>
                    <v-row class="">
                      <v-col
                        cols="12"
                        md="4"
                        v-for="ice in product.ices.items"
                        :key="ice.id"
                      >
                        <v-item>
                          <v-card
                            color="#F6EFEF"
                            :class="
                              product.ices.ice_id == ice.id ? 'borderme' : ''
                            "
                            class="d-flex align-center rounded-circle"
                            height="50"
                            width="50"
                            @click="product.ices.ice_id = ice.id"
                            flat
                          >
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <strong
                                  class="overline"
                                  :class="
                                    product.ices.ice_id == ice.id
                                      ? 'brown--text'
                                      : 'red--text'
                                  "
                                  >{{ ice.percent }}</strong
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-card>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              color="#704232"
              block
              dark
              class="withoutupercase mb-2"
              @click="addOrder(product)"
              >Add Billing</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Product",
  components: {},
  filters: {
    price: function (value) {
      return `${value} บาท`;
    },
  },
  computed: {
    ...mapGetters({
      products: "product/products",
    }),
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    ...mapActions({
      getProduct: "product/getData",
      addOrder: "order/addOrder",
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
