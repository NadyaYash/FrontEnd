// let user = {
//     name: "John", 
//     age: 20,
//     "likes cars": true,
//     home: 54
// };

// delete user['likes cars']




// let key = "street";

// user[key] = prompt("Provide the street");

// console.log(user);

// for(let key in user){
//     console.log(key);
//     console.log(user[key]);
// }

// let codes = {
//     "+49": "Германия",
//     "+38": "Польша",
//     "+1": "США"
// }
// for( let code in codes){
//     console.log(code);
// }

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// for(salary in salaries){
//     sum = sum + salaries[salary];

// } 
// console.log(sum);

// function sum(a, b){
//     console.log(a + b);
// }

// let num1 = Number(prompt("Enter the number"));
// let num2 = Number(prompt("Enter the number"));

// sum(num1, num2);

// function hello(from, text = "Hello"){
//     console.log(from + " " + text);
// }

// hello("Nadya");

// function sum(a, b){
//     return(a + b);
// }

// let num1 = Number(prompt("Enter the number"));
// let num2 = Number(prompt("Enter the number"));

// console.log(sum(num1, num2));

// function checkAge(age){
//     if(age > 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let user_age = prompt("How old are you");

// if(checkAge(user_age)){
//     alert("Доступ получен");
// }
// else{
//     alert("Доступ закрыт");
// }

// function checkNumber(number){
// if(number % 2 == 0){
//     console.log("Da");
// }
// else{
//     console.log("Net");
// }
// }
// let num = Number(prompt("Enter the number"));
// checkNumber(num);

// function checkNumber(){
//     let number = Number(prompt("Enter the number"));
//     if(number % 2 == 0){
//         console.log("Da");
//     }
//     else{
//         console.log("Net");
//     }
//     }

//     checkNumber();

    // function min(a, b){
    //     if(a > b){
    //         console.log(b);
    //     }
    //     else{
    //         console.log(a);
    //     }
    // }
    
    // let number_1 = Number(prompt("Enter the number"));
    // let number_2 = Number(prompt("Enter the number"));
    // min(number_1, number_2);
    
let num = Number(prompt("Enter the number"));
function pow(x){
    for(let n = 0; n > 0; n++){
        if(Number.isInteger(x)){
            console.log(Math.pow(x, n));
        }      
    
    } 
}

pow(num);