// change the title of the doccument 
var titleElement = document.getElementsByTagName("title")[0];
titleElement.textContent = "To Do List";

var addTask = document.getElementById("addTask");
var inputTask = document.getElementById("inputTask");
var taskList = document.getElementById("taskList");

addTask.addEventListener("click", function() {
    var taskText = inputTask.value;

    if (taskText !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = taskText;
        inputTask.value = "";
        
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);

        var deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "x";
        listItem.appendChild(deleteButton);
        
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });

        taskList.appendChild(listItem);

    } else {
        alert("Enter a new task.");
    }
});


