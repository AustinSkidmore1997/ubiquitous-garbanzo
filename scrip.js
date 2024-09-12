// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let taskCounter = 0;

// Todo: create a function to generate a unique task id
function generateTaskId() {
    taskCounter++;
    return `task-${Date.now()}-${taskCounter}`;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
 // Create a new div element for the task card
 const taskCard = $('<div class="task-card"></div>');

 // Add the title and description
 const title = $('<h3></h3>').text(task.title);
 const description = $('<p></p>').text(task.description);
 
 // Add the deadline
 const deadline = $('<p class="deadline"></p>').text(`Deadline: ${task.deadline}`);

 // Append title, description, and deadline to the task card
 taskCard.append(title, description, deadline);

 // Add a delete button
 const deleteButton = $('<button class="delete-button">Delete</button>');
 deleteButton.on('click', function() {
     // Functionality to delete the task
     taskCard.remove();
     // Add code to remove the task from localStorage as well
 });
 taskCard.append(deleteButton);

 // Return the completed task card
 return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const taskListContainer = document.getElementById('task-list');
  
    // Clear the existing content
    taskListContainer.innerHTML = '';
  
    // Loop through the tasks and create HTML elements
    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.className = 'task';
      taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Status: ${task.status}</p>
      `;
      taskListContainer.appendChild(taskElement);
    });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
      
    
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

const modal = document.getElementById("taskModal");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const closeModalSpan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModalSpan.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById('taskForm').onsubmit = function(event) {
  event.preventDefault(); // Prevent the default form submission

  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDescription').value;
  const status = document.getElementById('taskStatus').value;

  // Add the new task to your tasks array (you'll need to implement this part)
  tasks.push({ id: tasks.length + 1, title, description, status });

  // Clear the form fields
  document.getElementById('taskForm').reset();

  // Close the modal
  modal.style.display = "none";

  // Re-render the task list (you'll need to implement this function)
  renderTaskList();
}