// Run the script only after the HTML content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the Add button, input field, and task list container
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input and remove extra spaces

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // ✅ Correctly use classList.add

        // When the remove button is clicked, remove the task from the list
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Add the button to the list item, then add the item to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listeners
    addButton.addEventListener('click', addTask); // Button click
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Pressing Enter also adds task
        }
    });
});