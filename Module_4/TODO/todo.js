let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks = []; // Array to store tasks
let taskIdCounter = 0; // Counter to assign unique IDs to tasks

function render() {
    taskList.innerHTML = ""; // Clear the task list before rendering
    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.classList.add("task-item"); // Add a class for styling

        let span = document.createElement("span");
        span.classList.add("task-text"); // Add a class for styling
        span.textContent =`task: ${task.text} Completed: ${task.completed}`;

        let btnWrapper = document.createElement("div");
        btnWrapper.classList.add("task-buttons"); // Add a class for styling

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";

        completeBtn.addEventListener("click", ()=> {
            completedTask(task.id)
        })

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () =>{
            deleteTask(task.id)

        });

        btnWrapper.appendChild(completeBtn);
        btnWrapper.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnWrapper);

        taskList.appendChild(li);
    });
}

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText == "") {
        return;
    }
    let newTask = {
        id: taskIdCounter++,
        text: taskText,
        completed: false

    };

    tasks.push(newTask);
    taskInput.value = "";
    render: void
    render();
};

addBtn.addEventListener("click", addTask);

function completedTask(id) {
    let task = tasks.find((task) => task.id == id);
    task.completed = !task.completed;
    render()
}

function deleteTask(id){
   tasks = tasks.filter((task) => task.id != id);
    render();
}