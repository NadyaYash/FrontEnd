// //Array

// let fruits = ['Apple', 'Banana'];
// console.log(fruits.length);

// let fruit1 = fruits[0];
// console.log(fruit1);

// let fruit2 = fruits[1];
// console.log(fruit2);

// let new_fruits = fruits.push('Orange');
// console.log(fruits);

// let del_last = fruits.pop();
// console.log(fruits);

// console.log(del_last);

// fruits.unshift('Orange');
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.push('Mango');
// console.log(fruits);
// console.log(fruits.indexOf('Mango'));

// let removeitem = fruits.splice(1,1);
// console.log(fruits);
// console.log(removeitem);

// let arr = [];

// let num1 = Number(prompt('Enter the number'));
// let num2 = Number(prompt('Enter the number'));
// let num3 = Number(prompt('Enter the number'));

// arr.push(num1, num2, num3);

// console.log(arr);


// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles);
// styles[Math.floor((styles.length - 1)/2)] = 'Классика';

// console.log(styles.shift());
// console.log(styles);
// styles.unshift('Reggy', 'Rap');
// console.log(styles);

// let arr = [1, 4, 2, 5, 3];
// let new_arr = [arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2];
// console.log(arr);
// console.log(new_arr);

// for(StaticRange, end, step){}

// let arr = [1, 4, 2, 5, 3];
// let new_arr = [];
// for(let i = 0; i < 5; i++){
//     new_arr.push(arr[i]**2);
// }
// console.log(arr);
// console.log(new_arr);

let arr = [1, -2, 8, 10, 5, -100];
// for(let i = 0; i < 5; i++){
//     if(arr[i]>0){
//         console.log(arr[i]);
//     }
// }
let sum = 0;
// for(let i = 0; i < 6; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);

for(let i = 0; i < 6; i++){
    if(arr[i] > 0){

    sum = sum + arr[i];
    }
    }
    console.log(sum);

