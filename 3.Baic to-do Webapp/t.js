const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const pending = document.getElementById("pending");
const completed = document.getElementById("completed");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", toggleTask);
        pending.appendChild(li);
        taskInput.value = "";
    }
}

function toggleTask(event) {
    const li = event.target;
    li.classList.toggle("completed");
    if (li.parentElement === pending) {
        completed.appendChild(li);
    } else {
        pending.appendChild(li);
    }
}
