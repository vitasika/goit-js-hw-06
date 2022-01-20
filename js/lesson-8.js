/*
Задание 8
Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть
заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля 
будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы 
используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
*/

// Нахожу строку в html
const formEl = document.querySelector(`.login-form`);

// Вешаем слушателя на formEl (submit)
formEl.addEventListener('submit', click);


function click(event) {

  event.preventDefault();

  const inputElemail = document.querySelector('#email');
  //console.log(inputElemail.value);

  const inputElpass = document.querySelector('#password');
  //console.log(inputElpass.value);

  const retValue = {'email': inputElemail.value, 'password': inputElpass.value}
  //console.log(retValue);

  if (retValue.email === '' || retValue.password === '') {
    return alert('Все поля должны быть заполнены!!!');
  }

  else { console.log(retValue); }

  // очищаем поле формы методом reset
  event.currentTarget.reset();
}; 








