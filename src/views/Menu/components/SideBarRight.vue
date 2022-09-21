<template>
  <v-navigation-drawer app color="white" right width="290">
    <!-- Header -->
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Jelly Grande</v-list-item-title>
          <v-list-item-subtitle>I'm a Cashier</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-badge bordered overlap color="red" dot>
            <v-icon>far fa-bell</v-icon>
          </v-badge>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <!-- title -->
    <strong class="ml-3">Bills</strong> <br />
    <strong class="ml-3" v-if="orders.length == 0">Data not found</strong>

    <!-- order -->
    <v-list
      subheader
      two-line
      class="mt-1"
      v-for="(order, index) in orders"
      :key="index"
    >
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img :src="order.image_path"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2">{{
            order.name
          }}</v-list-item-title>
          <v-list-item-subtitle
            >X1
            <v-btn plain color="#FF0000" small @click="deleteOrder(index)"
              >Delete
              <v-icon right>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="caption">{{
          order.price | price
        }}</v-list-item-action>
      </v-list-item>
    </v-list>

    <!-- Caculate Total money -->
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <strong>Subtotal</strong><v-spacer></v-spacer
      ><strong>{{ detectTotalPrice | price }}</strong>
    </v-toolbar>
    <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n6">
      <span>Tax(7%)</span><v-spacer></v-spacer
      ><span>{{ detectTax | price }}</span>
    </v-toolbar>
    <v-divider class="mx-4"></v-divider>
    <v-toolbar color="rgba(0,0,0,0)" flat>
      <strong>Total</strong><v-spacer></v-spacer
      ><strong>{{ detectTotalPriceTax | price }}</strong>
    </v-toolbar>
    <strong class="ml-5">Payment Method</strong>
    <v-item-group mandatory class="mt-n1">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-item v-slot="{ active, toggle }">
              <v-card
                color="#F6EFEF"
                :class="active ? 'borderme' : ''"
                class="d-flex align-center rounded-lg"
                dark
                height="70"
                @click="toggle"
                flat
              >
                <v-row>
                  <v-col cols="12" md="12">
                    <v-list-item three-line class="text-center mt-1">
                      <v-list-item-content>
                        <div>
                          <v-icon :color="active ? '#704232' : 'black'"
                            >fas fa-money-bill-wave</v-icon
                          >
                        </div>
                        <v-list-item-subtitle
                          :class="active ? 'brown--text' : 'black--text'"
                          class="mt-n2 caption"
                          >Cach</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="4">
            <v-item v-slot="{ active, toggle }">
              <v-card
                color="#F6EFEF"
                :class="active ? 'borderme' : ''"
                class="d-flex align-center rounded-lg"
                dark
                height="70"
                @click="toggle"
                flat
              >
                <v-row>
                  <v-col cols="12" md="12">
                    <v-list-item three-line class="text-center mt-1">
                      <v-list-item-content>
                        <div>
                          <v-icon :color="active ? '#704232' : 'black'"
                            >fas fa-credit-card</v-icon
                          >
                        </div>
                        <v-list-item-subtitle
                          :class="active ? 'brown--text' : 'black--text'"
                          class="mt-n2 caption"
                          >debit Card</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="4">
            <v-item v-slot="{ active, toggle }">
              <v-card
                color="#F6EFEF"
                :class="active ? 'borderme' : ''"
                class="d-flex align-center rounded-lg"
                dark
                height="70"
                @click="toggle"
                flat
              >
                <v-row>
                  <v-col cols="12" md="12">
                    <v-list-item three-line class="text-center mt-1">
                      <v-list-item-content>
                        <div>
                          <v-icon :color="active ? '#704232' : 'black'"
                            >fas fa-qrcode</v-icon
                          >
                        </div>
                        <v-list-item-subtitle
                          :class="active ? 'brown--text' : 'black--text'"
                          class="mt-n2 caption"
                          >E-Wallet</v-list-item-subtitle
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
    <div class="mx-3 mt-2">
      <v-btn
        color="#704232"
        block
        dark
        class="widthoutupercase"
        @click="clearOrder"
        >Print Bills</v-btn
      >
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SideBarRight",
  data() {
    return {
      tax: 0,
    };
  },
  filters: {
    price: function (value) {
      return `${value} บาท`;
    },
  },
  computed: {
    ...mapGetters({
      orders: "order/orders",
    }),
    detectTotalPrice() {
      return this.calculateTotalPrice();
    },
    detectTax() {
      return this.calculateTax();
    },
    detectTotalPriceTax() {
      return (
        parseFloat(this.calculateTotalPrice()) + parseFloat(this.calculateTax())
      );
    },
  },
  mounted() {
    console.log(this.orders);
  },
  methods: {
    ...mapActions({
      clearOrder: "order/clearOrder",
      deleteOrder: "order/deleteOrder",
    }),
    calculateTotalPrice() {
      let totalPrice = 0;
      for (const order of this.orders) {
        totalPrice += order.price;
      }
      return totalPrice;
    },
    calculateTax() {
      return (this.calculateTotalPrice() * (7 / 100)).toFixed(2);
    },
  },
};
</script>

<style scoped>
.v-card.borderme {
  border: 2px solid #704232 !important;
}
.col-12 {
  padding: 5px !important;
}
.v-btn.widthoutupercase {
  text-transform: none !important;
}
</style>
