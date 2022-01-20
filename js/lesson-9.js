/* 
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
при клике на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
*/

// Нахожу строку в html
// const formEl = document.querySelector(`.widget`);
// console.log(formEl);

const buttonEl = document.querySelector(`.change-color`);
//console.log(formEl);
const spanEl = document.querySelector(`.color`);
// console.log(spanEl);
const bodyRef = document.querySelector("body");
// console.log(bodyRef);

// Вешаем слушателя на formEl (submit)
buttonEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
    spanEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyRef.style.backgroundColor = spanEl.textContent; 
}





