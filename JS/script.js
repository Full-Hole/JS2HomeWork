'use strict'

const products = [
  {id: 1, title: 'Notebook', price: 2000},
  {id: 2, title: 'Mouse', price: 20},
  {id: 3, title: 'Keyboard', price: 200},
  {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (product, img='img/1.jpg') => {
  return `<div class="product-item">
              <h3 class="product-title">${product.title}</h3>
              <img src="${img}" class="product-img">
              <p>${product.price}</p>
              <button class="buy-btn">Купить</button>
          </div>`
};
const renderPage = list => {
  const productsList = list.map(item => renderProduct(item));
  console.log(productsList);
  document.querySelector('.products').innerHTML = productsList.join("");
};

renderPage(products);
  