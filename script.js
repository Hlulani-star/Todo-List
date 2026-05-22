let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please add a task first!");
        return;
    }

    let li = document.createElement("li");
    
    let taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    taskSpan.style.color = "#b91d73";
    taskSpan.style.fontWeight = "600";
    li.appendChild(taskSpan);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText ="Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});