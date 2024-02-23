//código do Angelo 01 - Add task
var readline = require("readline-sync");

let tasks = [];

function start() {
  let action = readline.question(
      "Please choose an option to organize your life: \n   1. Add task \n   2. Edit task \n   3. Show to do list \n   4. Remove task \n   5. Find task \n   6. Exit \n"
  );
  switch (action) {
    case "1":
      addTask();
      break;
    case "2":
      editTask();
      break;
    case "3":
      showTasks(tasks);
      break;
    case "4":
      removeTask();
      break;
    case "5":
      findTask();
      break;
    case "6":
      console.log("Exiting...");
      exitProgram = true;
      setTimeout(() => {
        process.exit();
      }, 1000);
      break;
    default:
      console.error(
          "Invalid option. Please choose an option between  1 and  6."
      );
      break;
  }
  if (action !== "6") {
    start();
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
function removeTask() {
  let taskToRemove = readline.question("Enter the index of the task you want to remove: ");
  taskToRemove = parseInt(taskToRemove);
  if (isNaN(taskToRemove) || taskToRemove < 0 || taskToRemove >= tasks.length) {
    console.log("Invalid index. Please enter a valid index.");
    return;
  }
  let removedTask = tasks.splice(taskToRemove, 1)[0]; // Remover a tarefa e armazenar seu valor
  console.log(`Task "${removedTask}" successfully removed!`);
  start(); // Voltar para o menu
}

/* exemplo:
   let tasks = [1,2,3,4];
   let tasksToRemove = 3;
   tasks = removeTask(tasks, tasksToRemove);
   console.log(tasks);
*/

//código do Arthur 02
function findTask() {
  let indexToFind = readline.question("Enter the index of the task you want to find: ");
  indexToFind = parseInt(indexToFind);
  if (isNaN(indexToFind) || indexToFind < 0 || indexToFind >= tasks.length) {
    console.log("Invalid index. Please enter a valid index.");
    return;
  }
  console.log("Task found:");
  console.log(tasks[indexToFind]);
  start(); // Voltar para o menu
}

/* exemplo:
let tasks = ["Clean my bedroom", "Code tank", "Buy meat"];
findTask(tasks, 1);
*/
