let inputField = document.querySelector(".input-task");
const taskListContainer = document.querySelector(".lists");
const addTask = document.querySelector(".add-btn");

addTask.addEventListener("click", () => {
    const task = inputField.value.trim();
    if(!task) {
        alert("Please write down a task!");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span class="task-text">${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;
    taskListContainer.appendChild(li);
    inputField.value = "";
});

taskListContainer.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target);
    
    if(target.classList.contains("delete-btn")) {
        const li = target.closest("li");
        if(confirm("Do you want to delete this task")) {
            li.remove();
        }
    }

    if(target.classList.contains("edit-btn")) {
        const li = target.closest("li");
        const taskSpan = li.querySelector(".task-text");

        const newTask = prompt("Edit your Task:", taskSpan.textContent);
        if(newTask !== null && newTask.trim() !== "") {
            taskSpan.textContent = newTask.trim();
        }
    }

    if(target.type === "checkbox") {
        const taskSpan = target.closest("label").querySelector(".task-text");
        taskSpan.classList.toggle("completed", target.checked);
    }
});
