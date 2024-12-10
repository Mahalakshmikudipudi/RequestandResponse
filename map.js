// const numbers=[1,2,3,4];

// //changed to [2,4,6,8]

// let newArray=[];
// numbers.forEach((item)=> {
//     let x=item*2;
//     newArray.push(x);
// })

// console.log(newArray);

// //map with numbers we create 

// let newArr = numbers.map((item) => {
//     return item * 2;

// })

// console.log(newArr);

// console.log(numbers);


// const student = [
//     {name:"Maha", score:95},
//     {name:"Prashu", score:65},
//     {name:"Kiyansh", score:96}
// ]

//Goal: we want to increase the value for score by 5 points

// let updatedArr=[];
// student.forEach((item) => {
//     let newobj={
//         name: item.name,
//         score: item.score+5
//     }

//     updatedArr.push(newobj)
// });

// console.log(updatedArr);
// console.log(student);

//How map method improves the code

// let updatedStudents = student.map((item) => {
//     let newobj={
//         name:item.name,
//         score:item.score+5
//     }

//     return newobj;
// })

// console.log(updatedStudents);


// function extractValues(people, key) {
//     return people.map((obj) => {
//         return obj[key];
//     })
// }

// const people = [

//     { name: 'Alice', age: 25 },
   
//     { name: 'Bob', age: 30 },
   
//     { name: 'Charlie', age: 35 },
   
// ];

// let key='city';

// let result=extractValues(people, key);
// console.log(result);

function applyDiscounts(products) {
    return products.map(product => ({
        name: product.name,
        discountedPrice: product.price * (1 - product.discount),
    }));
}

products =[{

    name: 'Laptop',
    
    price: 1000,
    
    discount: 0.1 },
    
    { name: 'Phone',
    
    price: 500,
    
    discount: 0.05
    
}];

let result=applyDiscounts(products);
console.log(result);