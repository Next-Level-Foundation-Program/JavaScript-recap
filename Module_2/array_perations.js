let marks = [45, 67, 89, 90, 38, 56, 94, 85];
// find maximum marks
let max = marks[0];
for (let i = 0; i < marks.length; i++) {
    if (max < marks[i]) {
        max = marks[i];
    }
}

console.log(max);

// sum of all marks
// let sum = 0;
// for (let i = 0; i < marks.length; i++) {
//     sum += marks[i];
// }

let sum = 0;
for (let mark of marks) {
    sum += mark;
    avg = sum / marks.length;
}
console.log(sum, avg);

// reverse an array
let reMarks = [];
for (let i = marks.length - 1; i >= 0; i--) {
    reMarks.push(marks[i]);
}
console.log(reMarks);