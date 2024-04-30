var titleElement = document.getElementsByTagName("title")[0];
titleElement.textContent = "To Do List";

var addTask = document.getElementById("addTask");
var inputTask = document.getElementById("inputTask");
var taskList = document.getElementById("taskList");


window.onload = function() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(taskText) {
        addTaskToList(taskText);
    });
};

function addTaskToList(taskText) {
    var listItem = document.createElement("li");
    // listItem.textContent = taskText;
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(taskText));

    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    listItem.appendChild(deleteButton);
    
    deleteButton.addEventListener("click", function() {
        listItem.remove();
        updateLocalStorage();
    });

    taskList.appendChild(listItem);
}

function updateLocalStorage() {
    var tasks = [];
    var listItems = taskList.getElementsByTagName("li");
    for (var i = 1; i < listItems.length; i++) {
        var listItem = listItems[i];
        tasks.push({
            taskText: listItem.textContent.trim(), // Trim whitespace
            completed: listItem.querySelector("input[type=checkbox]").checked
        });
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addTask.addEventListener("click", function() {
    var taskText = inputTask.value;

    if (taskText !== "") {
        addTaskToList(taskText);
        inputTask.value = "";
        updateLocalStorage();
    } else {
        alert("Enter a new task.");
    }
});
