/* Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue. */



//Создал переменную в которой будет храниться результат вычислений
let counterValue = 0;

//Нахожу в html разметке элементы button которые будут прибавлять и уменьшать значение в строке span
const minusButtonEl = document.querySelector('button[data-action="decrement"]'); //<button type="button" data-action="decrement" "-"
console.log(minusButtonEl);

const valueEl = document.querySelector('#value');//span id="value" "="
console.log(valueEl);

const plusButtonEl = document.querySelector('button[data-action="increment"]');//button type="button" data-action="increment" "+"
console.log(plusButtonEl);

//Делаю цикл на прибавление +1 на counterValue и его запись в это значение
plusButtonEl.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
})

//Делаю цикл на прибавление -1 на counterValue и его запись в это значение
minusButtonEl.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
})