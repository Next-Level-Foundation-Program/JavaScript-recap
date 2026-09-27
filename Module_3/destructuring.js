// Object destructuring 
let student = {
    name: "Rana",
    age: 25,
    address: "bangladesh"
}

// old 
const oldName = student.name;

// new
const {name, age, address} = student; // destructuring
console.log(address);

let student1 = {
    name: "Rana",
    age: 25,
    address: {
        division: "Rajshahi",
        country: "Bangladesh",
        zipcode: 6230
    }
}

//destructuring
const {name: studentName, address: {division, country, zipcode}} = student1;
console.log(division, studentName);

// Array destructuring
const arr = ["Red", "Green", "Blue", "Yellow"];
const [, secondColor, thirdColor] = arr;
console.log(secondColor, thirdColor);

let student2 = {
    name: "Sagor",
    age: 25,
    address: {
        division2: "Rajshahi",
        country2: "Bangladesh",
        zipcode2: 6230
    },
    interests: ["Programming", "Gaming", "Travelling"]
}

const {name: studentName2, address:{country2, division2, zipcode2}, interests:[firstInterest, secondInterest, thirdInterest]} = student2;

console.log(studentName2, division2, secondInterest);