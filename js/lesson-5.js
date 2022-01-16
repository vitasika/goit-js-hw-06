/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна 
отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */


//НАхожу строчку input в документе html для ввода текста
const inputEl = document.querySelector('#name-input');
console.log(inputEl);

// Нахожу строчку span в документе html для ввода текста каторый набирается в input
const spanEl = document.querySelector('#name-output');
console.log(spanEl);

// Нужно повесить слушателя события на input (вводимый текст в строку input) 
// и вызвать коллбек функцию которая будет записывать в span вводимое значение.
inputEl.addEventListener('input', inputSpanEl);


function inputSpanEl(event) {
    if (event.currentTarget.value === '') {

        // Возвращает в span текс Anonymous
        return spanEl.textContent = 'Anonymous';
    };

    // Записывает в строку вводимое значение из input строки при вводе
    return spanEl.textContent = event.currentTarget.value;
    
}

