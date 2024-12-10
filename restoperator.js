// function sum(num1, num2, num3) {
//     return num1+num2+num3;
// }
// let result=sum(1,2,3);
// console.log(result);

// function sumOfFour(num1, num2, num3, num4) {
//     return num1+num2+num3+num4;
// }
// let res=sumOfFour(1,2,3,4);
// console.log(res);

//so we repeat the same code for the same operations, which increase the memory and the size of the code
//let try to write the code using rest operators to make it more flexible.

// function sum(...numbers) {
//     //console.log(numbers);
//     let totalSum=0;
//     for(let i=0;i<numbers.length;i++) {
//         totalSum+=numbers[i];
//     }
//     return totalSum;
// }
// let result=sum(1,2,3,4,5,6,7,8);
// console.log(result);

// //the advanges of rest operator is that we can use it for accessing any number of
//arguments, making it versatile and adaptable to various situations.
//It also helps us eliminating the need to add multiple functions with functions trying to do the same
//code is cleaner and easier to maintain as we do not have to duplicate logic for different number of arguments


function sum(num1, ...numbers) {
    console.log(numbers);
    console.log(num1);
    let totalSum=0;
    for(let i=0;i<numbers.length;i++) {
        totalSum+=numbers[i];
    }
    return totalSum;
}
let result=sum(1,2,3,4,5,6,7,8);
console.log(result);

