// scope  block scope < function scope < global scope
// let age; //global scope
// function sayAge(){  //function scope
//     age = 20; 
// }
// sayAge();
// console.log(age);

// {
//     let age = 10; // block scope
// }
// console.log(age); // global scope // ReferenceError: age is not defined

let age ; // global scope

{
   age = 10; // block scope
}

console.log(age); // global scope
