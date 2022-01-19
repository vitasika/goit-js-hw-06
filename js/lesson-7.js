/* Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> 
*/


// Найти элементы input и span для дальнейшей работы с ними

const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.log(inputEl);
console.log(spanEl);

// нужно добавить слушателя события на inputEl и вызвать функцию колбек
inputEl.addEventListener('input', fontSizeChange);

// Создаю стрелочную функцию которая вызвращает spanEl и в стиль fontSize которого присваевается
// значение строки input и добавляет в значение px.

function fontSizeChange(event) {
    return spanEl.style.fontSize = `${event.currentTarget.value}px`;
}





/*

ЕЩЕ ОДИН ВАРИАНТ ОТ СТУДЕНТОВ!!!

// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль span#text 
// обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeControl = document.querySelector("input");
const text = document.querySelector("span");
text.style.fontSize = fontSizeControl.value + "px";
//console.log(fontSizeControl);
fontSizeControl.addEventListener("input", sizeControlHandler);

function sizeControlHandler(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}
*/
