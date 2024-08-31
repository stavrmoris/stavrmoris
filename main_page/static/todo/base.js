let input = document.getElementById("in1");
let button = document.getElementById('b');
let listElement = document.getElementById('uwu');

// Load tasks from localStorage, or set a default task if none are found
let tasks = JSON.parse(localStorage.getItem('tasks')) || ['Created for educational purposes'];

// Function to render the list of tasks
function renderTasks(newTaskIndex = null) {
    // Clear the existing list of tasks
    listElement.innerHTML = '';

    // Loop through the tasks and add them to the list element
    for (let note in tasks) {
        listElement.insertAdjacentHTML('beforeend',
            `
            <li class="${newTaskIndex === Number(note) ? 'fade-in' : ''}">
                <h1>${tasks[note]}</h1>
                <button class="close" data-index="${note}">x</button>
            </li>
        `);
    }
}

renderTasks();

// Add an event handler for when the "Add Task" button is clicked
button.onclick = function() {
    // If the input field is empty, do nothing
    if (input.value === "") {
        return;
    }

    // Add the value from the input to the tasks array
    tasks.push(input.value);

    // Save the updated tasks array to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Re-render the tasks list and highlight the newly added task
    renderTasks(tasks.length - 1);

    // Clear the input field
    input.value = '';
}

// Add an event handler for when the close button of a task is clicked
listElement.onclick = function(event) {
    // Check if the clicked element has the 'close' class
    if (event.target.classList.contains('close')) {
        // Get the index of the task to be removed
        let index = Number(event.target.dataset.index);

        // Get the closest 'li' element (task item)
        let li = event.target.closest('li');

        // Add a shrinking animation to the task item before removing it
        li.classList.add('shrink');

        // Wait 500ms (duration of the shrink animation) before removing the task
        setTimeout(() => {
            // Remove the task from the tasks array
            tasks.splice(index, 1);

            // Update the tasks in localStorage
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // Re-render the tasks list after removal
            renderTasks();
        }, 500);
    }
}
