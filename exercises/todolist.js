// Select elements

let input = document.getElementById("todo-input");


let addButton = document.getElementById("add-button");
let todoList = document.getElementById("todo-list");

// Function to add a new todo item

function addTodo() {
  let task = input.value; // Get the value from the input field

  if (task.trim() !== "") {
    // Check if the input is not empty

    let listItem = document.createElement("li"); // Create a new list item
    listItem.textContent = task;

    const tabSpace = document.createTextNode(" ");

    // to create a deletebutton
    let deleteButton = document.createElement("delete");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", function () {
      todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    listItem.appendChild(tabSpace);
    todoList.appendChild(listItem); // Add the new list item to the todo list
    input.value = ""; // Clear the input field after adding the item
  }
}

// Add click event listener to the Add button
addButton.addEventListener("click", addTodo);
