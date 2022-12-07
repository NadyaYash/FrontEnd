// let button = document.querySelector('.click');
// // button.addEventListener('click', function(){alert('Hello world!')});
// // function myFunc(){
// //     alert("Hello world!")
// // }
// // // button.addEventListener('click', myFunc);
// // button.addEventListener('click', myFunc2);
// // // button.addEventListener('mouseover', myFunc2);

// // function myFunc2(){
// //     console.log('Hello JS!');
// // }

// // button.removeEventListener('mouseover', myFunc2);
// // let cons = button.addEventListener('click', myFunc);
// // console.log(cons);


// let num = Number(document.querySelector('p').innerText);
// function myFunc3(){
//     document.querySelector('p').innerText = ++num;
    
// }
// button.addEventListener('click', myFunc3);

// let button1 = document.createElement('button');
// button1.innerText = 'Plus';
// button1.classList.add('plus');

// let button2 = document.createElement('button');
// button2.innerText = 'Minus';
// button2.classList.add('minus');

// document.body.append(button1, button2);
// let a = 10;
// function plus(){
    
//     console.log(Number(++a));
// }

// function minus(){
    
//     console.log(--a);
// }

// button1.addEventListener('click', plus);
// button2.addEventListener('click', minus);

// let button = document.querySelector('.click');
// button.style.backgroundColor = 'black';
// button.style.color = 'white';
// button.style.width = '100px';
// button.style.height = '150px';
// button.style.height = '';
// button.style.fontSize = '40px';
// button.style.fontStyle = 'italic';

// Задание: Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет (все шаги сделать с помощью JS).

let div = document.createElement('div');
document.body.append(div);
let block = document.querySelector('div');
div.style.width = '140px';
div.style.height = '140px';
div.style.border = '5px solid black';
div.addEventListener('mouseover', ColorCh);
function ColorCh(){
    let color = prompt('Enter color');
    div.style.backgroundColor = color;
}