//  Falsy Values: false, 0, "", null, undefined, NaN.

let  age = 10;
if(age){
    console.log("Ok");
}
else{
    console.log("Not Ok");
}

const a = 10;
console.log(a * "five"); // 0
console.log(typeof(NaN), typeof(undefined), typeof(null), typeof(false), typeof(0), typeof(""));