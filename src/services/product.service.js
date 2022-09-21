export default {
  async getProduct() {
    const response = await fetch(
      "https://632add771090510116ca18c7.mockapi.io/api/v1/product"
    );
    let data = await response.json();
    return data[0];
  },
  async getProductCategory() {
    const response = await fetch(
      "https://632add771090510116ca18c7.mockapi.io/api/v1/product-category"
    );
    let data = await response.json();
    return data[0];
  },
};
