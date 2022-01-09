// Показывает число категорий
const listWithClass = document.querySelectorAll('.item');
console.log('Number of categories: ', listWithClass.length);

// Показывает название и часло элементов в категории
listWithClass.forEach(  el => { 

    // Показывает название категории
    console.log('Categories: ', el.childNodes[1].textContent)

    // Показывает количество элементов в категории
    console.log('Elements: ', el.childNodes[3]);
    

})
