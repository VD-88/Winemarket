import { products } from "./product-list.js";

function renderRedWines(products) {
  const winesRed = document.querySelector('.craft-wines__red');
  winesRed.innerHTML = '';
  for (const product of products) {
    if (product.type === "red") winesRed.innerHTML += createProductHtml(product);
  }
}

function renderWhiteWines(products) {
  const winesRed = document.querySelector('.craft-wines__white');
  winesRed.innerHTML = '';
  for (const product of products) {
    if (product.type === "white") winesRed.innerHTML += createProductHtml(product);
  }
}

function createProductHtml(product) {
  return `<article class="craft-wines__item wine-item" data-id=${product.id}>
              <div class="wine-item__link">
                <img class="wine-item__picture" src="${product.smallImage}" alt="${product.title}">
              </div>
                <p class="wine-item__name">${product.title}</p>
                <p class="wine-item__price">${product.price.toFixed(2)}USD</p>
                <div class="wine-item__button">
                    <button class="add-to-cart">Add to cart</button>
                </div>
            </article>`;
}

renderRedWines(products)
renderWhiteWines(products)

const productCards = document.querySelectorAll('.craft-wines__item');

productCards.forEach(card => {
  const smallImage = card.querySelector('.wine-item__picture');
  smallImage.addEventListener('click', () => {
    const productId = card.dataset.id;
    const product = products.find(p => p.id == productId);
    populateProductPage(product);
  });
});

function populateProductPage(product) {
  const newWindow = window.open('product-page.html');
  newWindow.onload = () => {
    newWindow.document.querySelector('.info__name').textContent = product.title;
    newWindow.document.querySelector('.product__img').src = product.bigImage;
    newWindow.document.querySelector('.product__img').alt = product.title;
    newWindow.document.querySelector('.info__code').textContent = `Product code ${product.id}`;
    newWindow.document.querySelector('.description__text').textContent = product.description;
    newWindow.document.querySelector('.info__price').textContent = `${product.price.toFixed(2)}USD`;
    newWindow.document.querySelector('.info__stock').textContent = product.quantity > 0 ? 'In stock' : 'Out of stock';
    const stock = newWindow.document.querySelector('.info__stock');
    (stock.textContent === 'In stock') ? stock.style.color = 'var(--color-in-stock)' : stock.style.color = 'var(--color-out-of-stock)';
    const wineName = product.title.toLowerCase().replace(/ /g, '-');
    const url = new URL(newWindow.location.href);
    url.searchParams.set('wine', wineName);
    newWindow.history.pushState(null, '', url.toString());
  };
}
