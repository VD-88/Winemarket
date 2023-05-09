import { Cart } from './cart-new.js';
import { showAlert } from './alert.js';

let products;

async function loadData() {
  const response = await fetch('api/products.json');
  products = await response.json();
  productPageListener();
}
loadData();

function productPageListener() {
    const buyLink = document.querySelector('.form__button');
    const productId = buyLink.dataset.id;
    const product = products.find(p => p.id == productId);
    buyLink.addEventListener('click', () => {
      if (product.quantity > 0) {
        const cart = new Cart();
        cart.addProduct(productId);
        showAlert(`${product.title} was added to cart!`);
      } else {
        showAlert(`${product.title} is currently out of stock`, false);
      }
    });
  }
  