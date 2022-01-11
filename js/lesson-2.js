/* Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients. */



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const option = ingredients[i];
//   const titleEl = document.createElement('li');
//   titleEl.classList.add('item');
//   titleEl.textContent = option.ingredients[i]  
//   elements.push(titleEl);
// }

  const titleEl = document.createElement('li');
  titleEl.classList.add('item');
  titleEl.textContent = ingredients[0]

console.log(titleEl);
  



ingredients.forEach(function (ingredient, index) {
  console.log(`Индекс ${index}, значение ${ingredient}`);  
});