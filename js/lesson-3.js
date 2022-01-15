// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй 
// шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//нашел элемент по классу в html разметке
const cardGaleryList = document.querySelector(".gallery");

console.log(cardGaleryList);

//делаю цикл map на переборку масива и добавление li через шаблонную строку
const totalImgList = images.map(image => `<li class="imgflex"><img src="${ image.url }" alt="${ image.alt }"></li>`).join("");


//добавляю все в страницу html
cardGaleryList.insertAdjacentHTML("beforeend", totalImgList);


// Пробы разного
// const totalImgList = images.map(image => '<li class='imgflex'><img src='${ image.url }' alt='${image.alt}' width='320'></li>')

// const markup = images.map(image => `<li class="gallery-item flex-container"><img src="${image.url}" alt="${image.alt}" width="200"></li>`).join("");