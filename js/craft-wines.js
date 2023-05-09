import { Cart } from './cart-new.js';
import { showAlert } from './alert.js';

let products;

async function loadData() {
  const response = await fetch('api/products.json');
  products = await response.json();
  renderWineCards(products, "red");
  renderWineCards(products, "white");
  addEventListeners();
  productPageListener();
}
loadData();

function renderWineCards(products, type) {
  const wineCards = document.querySelector(`.craft-wines__${type}`);
  wineCards.innerHTML = '';
  for (const product of products) {
    if (product.type === type) wineCards.innerHTML += createProductHtml(product);
  }
}

function createProductHtml(product) {
  return `<article class="craft-wines__item wine-item" data-id=${product.id}>
              <div class="wine-item__link">
                <div class="link__container">
                  <img class="wine-item__picture" src="${product.smallImage}" alt="${product.title}">
                  <div class="wine-item__more-info">
                    <p class="wine-item__info-text">Show more</p>
                  </div>
                </div>  
              </div>
                <p class="wine-item__name">${product.title}</p>
                <p class="wine-item__price">${product.price.toFixed(2)}USD</p>
                <div class="wine-item__button">
                    <button class="add-to-cart" data-id=${product.id}>Add to cart</button>
                </div>                
            </article>`;
}

function addEventListeners() {
  const productCards = document.querySelectorAll('.craft-wines__item, .wine-list__card');
  productCards.forEach(card => {
    const smallImage = card.querySelector('.link__container, .item__picture');
    const buyLink = card.querySelector('.add-to-cart, .add-to-cart-button');
    const productId = card.dataset.id;
    const product = products.find(p => p.id == productId);
    smallImage.addEventListener('click', () => {
      populateProductPage(product);
    });
    buyLink.addEventListener('click', () => {
      if (product.quantity > 0) {
        const cart = new Cart();
        cart.addProduct(productId);
        showAlert(`${product.title} was added to cart!`);
      } else {
        showAlert(`${product.title} is currently out of stock`, false);
      }
    })
  });
}

function populateProductPage(product) {
  const newWindow = window.open('product-page.html');
  newWindow.onload = () => {
    newWindow.document.querySelector('.page__title').textContent = product.title;
    newWindow.document.querySelector('.info__name').textContent = product.title;
    newWindow.document.querySelector('.product__img').src = product.bigImage;
    newWindow.document.querySelector('.product__img').alt = product.title;
    newWindow.document.querySelector('.info__code').textContent = `Product code ${product.id}`;
    newWindow.document.querySelector('.description__text').textContent = product.description;
    newWindow.document.querySelector('.info__price').textContent = `${product.price.toFixed(2)}USD`;
    newWindow.document.querySelector('.info__stock').textContent = product.quantity > 0 ? 'In stock' : 'Out of stock';
    newWindow.document.querySelector('.product__info_form').dataset.id = product.id;
    newWindow.document.querySelector('.form__button').dataset.id = product.id;
    const stock = newWindow.document.querySelector('.info__stock');
    (stock.textContent === 'In stock') ? stock.style.color = 'var(--color-in-stock)' : stock.style.color = 'var(--color-out-of-stock)';
    const wineName = product.title.toLowerCase().replace(/ /g, '-');
    const url = new URL(newWindow.location.href);
    url.searchParams.set('wine', wineName);
    newWindow.history.pushState(null, '', url.toString());
  };
}
