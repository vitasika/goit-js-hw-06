const listWithClass = document.querySelectorAll('.item');
console.log('Number of categories: ', listWithClass.length);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
listWithClass.forEach(  el => { 

    // console.log(el)
    // el.getAttribute('h2');
    // console.log(el.getAttribute('h2'))
    console.log(el.childNodes)

    el.childNodes.find()

})
