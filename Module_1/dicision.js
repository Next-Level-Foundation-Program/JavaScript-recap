// if else, switch case, ternary operator
let marks = 40;
// if(marks >= 80 && marks <= 100){
//     console.log("A+");
// }
// else if(marks >= 70 && marks < 80){
//     console.log("A");
// }
// else if(marks >= 60 && marks < 70){
//     console.log("A-");
// }
// else if(marks >= 50 && marks < 60){
//     console.log("B");
// }
// else {
//     console.log("Need Improvement");
// }

switch(true){
    case marks >= 80 && marks <= 100:
        console.log("A+");
        break;
    case marks >= 70 && marks < 80:  
        console.log("A");
        break;
    default:     
        console.log("Need Improvement");
        break;
}

// ternary operator condition ? true : false;
let age = 37;
age >= 18 ? console.log("Eligible for vote") : console.log("Not Eligible for vote");