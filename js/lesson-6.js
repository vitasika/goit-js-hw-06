/* Задание 6
Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его 
содержимое на правильное количество введённых символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже 
добавили в исходные файлы задания.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336; 
} */


// Нахожу элемент input в html разметке
const inputEl = document.querySelector('#validation-input');
// проверка нашел или нет input. Если в консоле показывает строку html разметки значит нашел. )
console.log(inputEl);
//console.log(inputEl.dataset.length);




// Стелочная функция для проверки правильной длинны введенных символов в input.
const inputBlurCheck = (event) => {
    if (event.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
        return inputEl
    };
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
    return inputEl
}

/* Добавляем слушателя на input (событие blur) когда клиент кликает в другом месте экрана после ввода в input. */
inputEl.addEventListener('blur', inputBlurCheck);




/*  примеры со Скулоджи

textInput.addEventListener("blur", () => {
    textInput.value = "";
    }); 

    console.log();

    const inputBlurCheck = () => {
    console.log("Button was clicked");
} 
*/


/* Задание студента для ознакомления!!!

// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector("#validation-input");
// console.log(inputRef.dataset.length);
inputRef.addEventListener("blur", unFocusHandler);


function unFocusHandler(event) { 
    //console.log("текущая длина ввода", event.currentTarget.value.length);
    // console.log("заданный параметр", inputRef.dataset.length);
    // console.log("они равны?", event.currentTarget.value.length == inputRef.dataset.length);
    function removeClasses (){
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.remove("valid");
    }

    if (event.currentTarget.value.length == inputRef.dataset.length) {
        removeClasses ();
        event.currentTarget.classList.add("valid");    
    }

    else if(event.currentTarget.value.length === 0){
        // event.currentTarget.classList.remove("invalid");
        // event.currentTarget.classList.remove("valid");
        removeClasses ();
        
    }

    else {
        removeClasses ();
        event.currentTarget.classList.add("invalid");
    }
        
} */