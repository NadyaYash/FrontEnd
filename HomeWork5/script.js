// // 1.Написать функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 
function arr(a, b){
    let array = [];
    if(a < b){
    for(let i = a; i <= b; i++){
        array.push(i);
    }
    
} else if(a > b){
    for(let i = b; i <= a; i++){
        array.push(i);
    }
}
return array;
}

console.log(arr(9, 16));

// // 2.Создать HTML страницу с разными ссылками.
// // Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.
let links = document.querySelectorAll('a');
let newArr = [];
for(let link of links){
    newArr.push(link.getAttribute('href'));
}
console.log(newArr);


// // 3.Написать функцию addAttribute, которая приминает три аргумента SelectorName, AttName и AttValue, и соответственно для селектора(SelectorName) добавляет атрибут(AttName) со значением (AttValue).
// // Функция должна работать как объединение уже готовых функций querySelector и setAttribute.

function addAttribute(SelectorName, AttName, AttValue){
    document.querySelector(SelectorName).setAttribute(AttName, AttValue);

}

addAttribute('p', 'align', 'left');

// 4.Создать HTML страницу с блоком с классом images и внутри блока добавить 10 картинок.
// Написать скрипт, который запрашивает у пользователя url адреса пяти картинок и хранит их в массиве, находит все картинки, которые находятся в блоке с классом images и заменяет картинки с четными номерами на те, которые ввел пользователь по тому же порядку. 
// Два варианта решения
// Вариант решения 1
// let arrImg = [];
// let j = 0;
// let k = 1;

// for(let i = 0; i < 5; i++){
//     let url = prompt('Enter url');
//     arrImg.push(url);

// }
//
// let imgs = document.querySelectorAll('.images > img');
// for(let imag of imgs){
//     if(k%2 == 0){
//         imag.setAttribute('src', arrImg[j++]);}
//         k++;
        
//     }

// Вариант решения 2
// let arrImg = [];
// let j = 0;
// for(let i = 0; i < 5; i++){
//     let url = prompt('Enter url');
//     arrImg.push(url);

// }

// let imgs = document.querySelectorAll('.images > img:nth-child(even)');
// for(let imag of imgs){
    
//     imag.setAttribute('src', arrImg[j++]);
        
//     }    

// Создать HTML страницу с заголовком, с тремя блоками, в каждом блоке должен быть соответствующий заголовок(My profession, My hobby, My family) и должна быть картинка. Получится страница, похожую на первое дз "Мой блог". CSS тоже можно добавить к странице.
// Написать скрипт, который будет запрашивать у пользователя имя, url  адрес картинки, которая описывает его профессию, url  адрес картинки, которая описывает его хобби и url  адрес картинки, которая описывает его семью.
// В результате должны получить страницу с заголовком "Hello, <имя пользователя>", а в блоках соответствующие картинки.

let username = prompt('Enter your name');
let url_proff = prompt('Enter url1');
let url_hobby = prompt('Enter url2');
let url_family = prompt('Enter url3');
let h = document.querySelector('h1');
h.innerText = 'Hello, ' + username + ' !';
let p = document.querySelector('.proff > img');
p.setAttribute('src', url_proff);
let hobby = document.querySelector('.hobby > img');
hobby.setAttribute('src', url_hobby);
let f = document.querySelector('.family > img');
f.setAttribute('src', url_family);















