const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
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

// STEP 3 – Create addTask function
function addTask() {
  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo/doing/done):").toLowerCase();

  // Validate status
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo/doing/done):").toLowerCase();
  }

  const newTask = {
    id: initialTasks.length + 1,
    title,
    description,
    status,
  };

  initialTasks.push(newTask);
}

// STEP 1 – Keep adding tasks until there are 6
while (initialTasks.length < 6) {
  addTask();
}

// STEP 2 – Alert the user when the board is full
if (initialTasks.length === 6) {
  alert("The task board is full with 6 tasks!");
}

// STEP 4 – Create getCompletedTasks function
function getCompletedTasks() {
  return initialTasks.filter(task => task.status === "done");
}

// STEP 5 – Display the results
console.log("All tasks:", initialTasks);
console.log("Completed tasks:", getCompletedTasks());
