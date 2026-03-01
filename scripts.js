// Initial array of tasks with 3 predefined items
// Each task is an object containing: id, title, description, and status
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo", // status can be "todo", "doing", or "done"
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// STEP 3 – Function to add a new task
function addTask() {
  // Prompt user for task details
  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo/doing/done):").toLowerCase();

  // Validate the status input
  // Keep asking until the user enters one of the valid options
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo/doing/done):").toLowerCase();
  }

  // Create a new task object
  // id is generated based on current array length + 1
  const newTask = {
    id: initialTasks.length + 1,
    title,
    description,
    status,
  };

  // Add the new task to the array using .push()
  initialTasks.push(newTask);
}

// STEP 1 – Keep adding tasks until there are 6 in total
// The while loop runs as long as the array length is less than 6
while (initialTasks.length < 6) {
  addTask();
}

// STEP 2 – Alert the user when the board is full
// Once the loop ends, we check if the array length is exactly 6
if (initialTasks.length === 6) {
  alert("The task board is full with 6 tasks!");
}

// STEP 4 – Function to get only completed tasks
function getCompletedTasks() {
  // Use .filter() to return a new array containing only tasks with status "done"
  return initialTasks.filter(task => task.status === "done");
}

// STEP 5 – Display results in the console
// Show all tasks
console.log("All tasks:", initialTasks);

// Show only completed tasks
console.log("Completed tasks:", getCompletedTasks());
