//código do Angelo 01 - Add task
var readline = require("readline-sync");

let tasks = [];

function start() {
  let action = readline.question(
    "Please choose an option to organize your life: \n  1. Add task \n  2. Edit task \n  3. Show to do list \n  4. Remove task \n"
  );
  switch (action) {
    case "1":
      console.log(addTask());
      break;
    case "2":
      console.log(editTasks());
      break;
    case "3":
      console.log(showTasks());
      break;
    case "4":
      console.log(removeTask());
      break;
    default:
      console.error("Invalid option. Please choose an option between 1 and 4.");
      break;
  }
}

start();

function backToStart() {
  start();
}

function addTask() {
  let newTask = readline.question("Add a task to your list: ");
  tasks.push(newTask);
  console.log("Task " + `"${newTask}"` + " successfully added!");
  backToStart();
}
// Código Júlia 01 - Edit task

function editTasks(array, indices, editedTasks) {
  if (indices.length !== editedTasks.length) {
    console.log("Invalid ID. Please try again");
    return array;
  } else {
    for (let i = 0; i < indices.length; i++) {
      array[indices[i]] = editedTasks[i];
    }
    return array;
  }
}

/*
let tasks = ["Clean my bedroom", "Code tank", "Buy meat"];

console.log(editTasks(tasks, [0, 2], ["Go on dog walk", "Workout"]))
*/

//código da Julia 02 - Show tasks

function showTasks(tasks) {
  let tasksToShow = tasks.map((task, index) => {
    return {
      id: index,
      tasks: task,
    };
  });

  console.table(tasksToShow, ["tasks"]);
}

/*
showTasks(tasks);
*/

//código do Arthur 01 - Remove task
function removeTask(array, element) {
  const index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
/* exemplo:
   let tasks = [1,2,3,4];
   let tasksToRemove = 3;
   tasks = removeTask(tasks, tasksToRemove);
   console.log(tasks);
*/

//código do Arthur 02
function findTask(array, index) {
  if (index >= 0 && index < array.length) {
    console.log(array[index]);
  } else {
    console.log("Task index not found.");
  }
}
/* exemplo:
let tasks = ["Clean my bedroom", "Code tank", "Buy meat"];
findTask(tasks, 1);
*/
