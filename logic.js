// Fetch and display tasks
async function displayTasks() {
    try {
        let tasks = await fetchTasks();
        console.log('Tasks:', tasks);
        // Display tasks in the console or update UI
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// Add and display a new task
async function addNewTask(taskText) {
    try {
        let newTask = await addTask(taskText);
        console.log('Added Task:', newTask);
        // Fetch and display updated tasks
        await displayTasks();
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

// Run the application
(async function runApp() {
    await displayTasks();
    await addNewTask('Learn async/await');
})();
