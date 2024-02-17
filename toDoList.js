//código do Angelo


//código da Julia 01

//código do Arthur 01
function removeTask (array, element) {
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


//código da Julia 02

//código do Arthur 02
function findTask (array, index) {
    if (index >=0 && index < array.length) {
        console.log(array[index]);
    } else {
        console.log ("Task index not found.");
    }
}
/* exemplo:
let tasks = ["Clean my bedroom", "Code tank", "Buy meat"];
findTask(tasks, 1);
*/