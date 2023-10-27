/*
Filename: ComplexCode.js
Content: Sample code demonstrating a complex shopping cart system
*/

// Define product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Define shopping cart class
class ShoppingCart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  // Add a product to the cart
  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }

  // Remove a product from the cart
  removeProduct(productId) {
    const index = this.products.findIndex((product) => product.id === productId);

    if (index !== -1) {
      const removedProduct = this.products.splice(index, 1)[0];
      this.total -= removedProduct.price;
    }
  }

  // Get the number of products in the cart
  getProductCount() {
    return this.products.length;
  }

  // Get the total price of the products in the cart
  getTotalPrice() {
    return this.total;
  }
}

// Create some product instances
const product1 = new Product(1, 'Phone', 699);
const product2 = new Product(2, 'Laptop', 1499);
const product3 = new Product(3, 'Headphones', 199);

// Create a shopping cart instance
const cart = new ShoppingCart();

// Add products to the cart
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

// Display cart information
console.log(`Product count: ${cart.getProductCount()}`);
console.log(`Total price: $${cart.getTotalPrice()}`);

// Remove a product from the cart
cart.removeProduct(2);

// Display updated cart information
console.log(`Product count: ${cart.getProductCount()}`);
console.log(`Total price: $${cart.getTotalPrice()}`);

// Output:
// Product count: 3
// Total price: $2397
// Product count: 2
// Total price: $1596