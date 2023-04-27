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
    return `<article class="craft-wines__red_item wine-item">
                <div class="wine-item__link">
                    <p><a href="product-page"><img class="wine-item__picture" src="${product.smallImage}"
                    alt="${product.title}"></a>
                    </p>
                </div>
                <p class="wine-item__name">${product.title}</p>
                <p class="wine-item__price">${product.price}USD</p>
                <div class="wine-item__button">
                    <button type="button" class="add-to-cart">Add to cart</button>
                </div>
            </article>`;
}

renderRedWines(products)
renderWhiteWines(products)