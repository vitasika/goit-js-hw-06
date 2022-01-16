/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна 
отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */


//НАхожу строчку input в документе html для ввода текста
const inputEl = document.querySelector('#name-input');
console.log(inputEl);

//НАхожу строчку span в документе html для ввода текста каторый набирается в input
const spanEl = document.querySelector('#name-output');
console.log(spanEl);


