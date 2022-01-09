// Показывает число категорий
const listWithClass = document.querySelectorAll('.item');

console.log('Number of categories: ', listWithClass.length);

// Показывает название и часло элементов в категории
listWithClass.forEach(el => {

    // Показывает название категории
    // console.log('Categories:',el.childNodes[1].textContent)

    console.log('Categories: ', el.getElementsByTagName('h2').item(0).innerText);
    
    // Показывает количество элементов в категории    
    console.log('Elements: ',el.getElementsByTagName('li').length);

})

