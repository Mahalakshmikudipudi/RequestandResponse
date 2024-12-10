//let colors=["blue", "red", "green"];

// let firstColor= colors[0];

// let secondColor= colors[1];
// console.log(firstColor, secondColor);

//Destructuring
//let [firstColor, secondColor] = colors;
//console.log(firstColor, secondColor);

// function printDetails({brand, model}) {
//     console.log(brand, model);
// }


// let car = {
//     'brand': 'Toyota',
//     'model':'Camry'
// };

// let brandName=car.brand;
// let modelName=car.model;

// console.log(brandName, modelName);

//Destructuring

// let car = {
//     'brand': 'Toyota',
    
// };

//let {brand, model='Camry'} = car
//console.log(brand, model);

// let {brand:carBrand, model:carModel} = car;
// console.log(carBrand, carModel);

//printDetails(car);


// const students={
//     name: 'Maha',
//     address: {
//         city: 'Mumbai',
//         country: 'India'
//     }
// }

//Traditional
// const city=students.address.city;
// console.log(city);

//Destructuring
// const {address:{city}}=students;
// console.log(city);

// const {address:{city:cityName}}=students;
// console.log(cityName);

// const users = [
//     {
//         name:'Ravi',
//         age:20
//     },
//     {
//         name:'Rajesh',
//         age:25
//     }

// ]

//Traditional

// let firstName=users[0].name;
// let secondName=users[1].name;

// console.log(firstName, secondName);

//Using Destructring

//const [{name:firstName, age}, {name:secondName, age:secondAge}]=users;
//console.log(firstName, secondName, age, secondAge);


const studentDetails={
    name:'Shubham',
    city:'Goa',
    age:35,
    id:5,
    class:12
}

const {name, city, ...restOfTheAttributes}=studentDetails;
console.log(name, city, restOfTheAttributes);

