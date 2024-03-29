// Código do Angelo 01 - Add task
var readline = require("readline-sync");

let tasks = [];
let exitProgram = false; // Variável de controle

function start() {
  while (!exitProgram) { // Loop principal
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
        exitProgram = true; // Ativa a variável de controle para sair do loop
        setTimeout(() => { // Adiciona um atraso de 3 segundos antes de sair
          process.exit(); // Sai do programa após 3 segundos
        }, 3000);
        break;
      default:
        console.error(
            "Invalid option. Please choose an option between  1 and  6."
        );
        break;
    }
  }
}

start();

function addTask() {
  let newTask = readline.question("Add a task to your list: ");
  tasks.push(newTask);
  console.log("Task " + `"${newTask}"` + " successfully added!");
}

// Código da Júlia 01 - Edit task
function editTask(){

  let taskToEdit = readline.question("Enter the index of the task you want to edit: ");
  let index = parseInt(taskToEdit);

  if(index <= tasks.length - 1){

    let editedTask = readline.question("Enter the new task: ");

    let oldTask = tasks[index];
    tasks[index] = editedTask;

    console.log(`'${oldTask}' was changed to new task '${editedTask}'.`);
  }

  else {
    console.log("Invalid index. Please enter a valid index.");
  }
}

// Código da Julia 02 - Show tasks
function showTasks(tasks) {
  let tasksToShow = tasks.map((task, index) => {
    return {
      id: index,
      tasks: task,
    };
  });

  console.table(tasksToShow, ["tasks"]);
}

// Código do Arthur 01 - Remove tasks
function removeTask() {
  let taskToRemove = readline.question("Enter the index of the task you want to remove: ");
  taskToRemove = parseInt(taskToRemove);
  if (isNaN(taskToRemove) || taskToRemove < 0 || taskToRemove >= tasks.length) {
    console.log("Invalid index. Please enter a valid index.");
    return;
  }
  let removedTask = tasks.splice(taskToRemove, 1)[0];
  console.log(`Task "${removedTask}" successfully removed!`);
}

// Código do Arthur 02 - Find tasks
function findTask() {
  let indexToFind = readline.question("Enter the index of the task you want to find: ");
  indexToFind = parseInt(indexToFind);
  if (isNaN(indexToFind) || indexToFind < 0 || indexToFind >= tasks.length) {
    console.log("Invalid index. Please enter a valid index.");
    return;
  }
  console.log("Task found:");
  console.log(tasks[indexToFind]);
}
