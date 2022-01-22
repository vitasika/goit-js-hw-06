/*
Задание 10 (выполнять не обязательно)

Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и 
нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов 
очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, 
сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для 
получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Кнопка Create
const buttonCreate = document.querySelector(`#data-create`);
console.log(buttonCreate);

// Кнопка Destroy
const buttonDestroy = document.querySelector(`#data-destroy`);
console.log(buttonDestroy);

// Контейнер div class=boxes
const divBox = document.querySelector(`#boxes`);
console.log(divBox);

// Контейнер input type="number"
const inputNumber = document.querySelector(`#number`);
console.log(inputNumber.textContent);

buttonDestroy.addEventListener('click', buttonDestroyListener)
buttonCreate.addEventListener('click', buttonCreateListener)


// Функция добавления
function buttonCreateListener() {
    let sizeEl = 30; // размер первого блока по заданию
    for (let index = 1; index < inputNumber.valueAsNumber; index++) {    
        // const countIdDiv = document.querySelectorAll('.block').length;
        const iDiv = document.createElement('div'); // создаем div в html
        iDiv.id = 'block' + index; // добавляем id в div
        // iDiv.className = 'block';
        iDiv.textContent = 'amount' + index;
        iDiv.style.background = getRandomHexColor();
        iDiv.style.width = sizeEl +'px';
        iDiv.style.height = sizeEl +'px';
        divBox.appendChild(iDiv);
        sizeEl += 10;        
    }
}

// Функция удаления
function buttonDestroyListener() {
    const arrayNodes = [];
    divBox.childNodes.forEach(element => { arrayNodes.push(element) });
    arrayNodes.forEach(element => { divBox.removeChild(element) });    
}


