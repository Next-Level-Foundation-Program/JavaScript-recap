// process.argv[0] is the node path
// process.argv[1] is the script path
// process.argv[2] is the first argument
// ... and so on

// to get the command line arguments, we can use process.argv array
const weight = process.argv[2];
const height = process.argv[3];
// console.log(weight, height); 

function calculateBMI(weight, height) {
    const BMI = weight / (height * height);
    return BMI;
}
const bmi = calculateBMI(weight, height);
console.log(bmi);

if (bmi < 18.5) {
    console.log("Underweight");
}
else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal weight");
}
else {
    console.log("Overweight: kom kore kha");
}