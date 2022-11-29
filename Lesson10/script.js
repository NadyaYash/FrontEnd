// // let elements = document.querySelectorAll('li:last-child');

// // // console.log(elements[1].innerHTML);

// // for(let element of elements){
// //     console.log(element.innerHTML);
// // }

// // let first_elem = document.querySelector('li');
// // first_elem.innerHTML = 'Hello';

// // document.querySelector('.paragraph2').innerText = 'привет';

// let pars = document.querySelectorAll('p');
// for(let par of pars ){
//     par.innerText = 'привет';
// }

// document.querySelector('#main').innerText = 'Я главный элемент';

// document.querySelector('a').setAttribute('href', 'https://www.google.com/');
// document.querySelector('a').setAttribute('target', '_blank');

// console.log(document.querySelector('#link1').getAttribute(href));

let imgs = document.querySelectorAll('.main > img');
// for(let i = 0; i < 5; i++){
//     imgs[i].setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG/1200px-POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG');
//         }
let i = 0;
for(let img of imgs){
    i++
    if(i==5){
        break;
    }
    img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG/1200px-POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG');
}

    

