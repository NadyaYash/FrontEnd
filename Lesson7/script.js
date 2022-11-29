let arr3 = [0, 1, 2, 3, 33, 99, 2];
console.log(arr3.indexOf(arr3[0]));
console.log(arr3.indexOf(arr3[1]));
console.log(arr3.indexOf(arr3[2]));
console.log(arr3.indexOf(arr3[3]));
console.log(arr3.indexOf(arr3[4]));
console.log(arr3.indexOf(arr3[5]));
console.log(arr3.indexOf(arr3[6]));
console.log(arr3.indexOf(arr3[7]));
let sum_arr3 = 0;
for(let i = 0; i < arr3.length; i++){
    if(arr3[i] == arr3.indexOf(arr3[i])){
        sum_arr3 = sum_arr3 + arr3[i];
    }
}
console.log(sum_arr3);