// Wait for the HTML to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // When the remove button is clicked, remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Add the button to the task item
        li.appendChild(removeBtn);

        // Add the task item to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // When the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // When Enter key is pressed inside the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});