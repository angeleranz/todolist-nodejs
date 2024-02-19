//código do Angelo 01 - Add task
var readline = require("readline-sync");

let tasks = [];

function addTask(newTask) {
  tasks.push(newTask);
  return "Tarefa " + `"${newTask}"` + " adicionada com sucesso!";
}

let newTask = readline.question("Adicione uma tarefa a sua lista: ");
console.log(addTask(newTask));

console.log(showTasks(tasks));

// Código Júlia 01 - Edit task

function editTasks(array, indices, editedTasks) {
  if (indices.length !== editedTasks.length) {
    console.log("Indices and editedTasks must have the same length");
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
