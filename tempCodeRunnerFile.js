var readline = require("readline-sync");

let tasks = [];

function addTask(newTask) {
  tasks.push(newTask);
  return "Tarefa " + `"${newTask}"` + " adicionada com sucesso!";
}

let newTask = readline.question("Adicione uma tarefa a sua lista: ");
console.log(addTask(newTask));

console.log(tasks);