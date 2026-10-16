
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// console.log(taskInput, addBtn, taskList);

// alternative way to select elements
// const addButton1 = document.querySelector("button");
// const addButton2 = document.querySelector("#addBtn");
// const taskInput2 = document.querySelector("#taskInput");

// addBtn.addEventListener("click", function() {
//     console.log("Button clicked!");
// });

addBtn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
});

taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        console.log("Enter pressed:", taskInput.value);
    }
});

// create element and append to the list
// let li = document.createElement("li");
// li.textContent = "New Task";
// taskList.appendChild(li);

console.log(li);