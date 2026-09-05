
let students = [
    { id: 101, name: "Rana", age: 22, department: "CSE" },
    { id: 102, name: "Mainul", age: 23, department: "Physics" },
];

// add a new student
function addStudent(name, age, dept) {
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;

    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: dept,
    };
    students.push(newStudent);
    // console.log(`Student ${name} added successfully!`);
}

addStudent("Jubaier", 22, "AI");

function getAll() {
    for (let student of students) {
        console.log(student);
    }
}

// getAll();

// find student by ID
function findStudent(id) {
    let foundStudent = null;
    for (let student of students) {
        if (student.id == id) {
            foundStudent = student;
            break;
        }
    }
    if (foundStudent) {
        console.log("Found Student:", foundStudent
        );
    }
    else {
        console.log("404 not found");
    }
}

findStudent(102);

// delete student by ID
function deleteStudent(id) {
    let targetStudent = -1;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            targetStudent = i;
            break;
        }
    }
    if (targetStudent !== -1) {
        students.splice(targetStudent, 1);
        console.log(`Student with ID ${id} deleted successfully!`);
    } else {
        console.log("404 not found");
    }
}

deleteStudent(102);
getAll();