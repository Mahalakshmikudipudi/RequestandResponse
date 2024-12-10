// const profile = ["Yash", "Raj", "www.google.com"];

// const [firstName, lastName, website] = profile;

// console.log(firstName, lastName, website);

// const [firstName, ...otherInfo] = ["Yash", "Raj", "www.google.com"];

// console.log(firstName, otherInfo);

// const [, , website] = ["Yash", "Raj", "www.google.com"];

// console.log(website); 


// const [firstName = "Tony", website = "sharpener"] = ["Rishab"];

// console.log(firstName,website);


// const profile = {

//     firstName: "Julian",

//     lastName: "Anthony",

//     website: "Sharpener"

// };

// const { firstName: forename, lastName: surname, website: onlineSite } = profile;

// console.log(forename, surname, onlineSite)


const profile = {

    lastName: { familyName: "Smith" }

};



const { lastName: { familyName: surname } } = profile;



console.log(surname);
