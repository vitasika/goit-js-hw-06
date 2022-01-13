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
//нашел элемент по id в html разметке
const firstEl = document.querySelector('#ingredients');

//делаю цикл map на переборку масива и добавление li и class
const totalListIngredient = ingredients.map(ingredient => {  
  const titleEl = document.createElement('li');
  titleEl.classList.add('item');
  titleEl.textContent = ingredient;
  console.log(titleEl);

  
  return titleEl;

  
});

firstEl.append(totalListIngredient);


// const titleEl = document.createElement('li');
// titleEl.classList.add('item');
// titleEl.textContent = ingredients[0]

// console.log(titleEl);
  