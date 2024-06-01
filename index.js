#! /usr/bin/env node
import inquirer from "inquirer";
var OPERATIONS;
(function (OPERATIONS) {
    OPERATIONS["AddToDo"] = "Add ToDo";
    OPERATIONS["ViewToDo"] = "View ToDo's";
    OPERATIONS["DeleteToDo"] = "Delete ToDo";
    OPERATIONS["UpdateToDo"] = "Update ToDo";
    OPERATIONS["ExitApp"] = "Exit";
})(OPERATIONS || (OPERATIONS = {}));
const myToDos = [];
let condition = true;
while (condition) {
    await main();
}
async function main() {
    const { chooseTask } = await inquirer.prompt([
        {
            name: "chooseTask",
            message: "Please Select",
            type: "list",
            choices: Object.values(OPERATIONS)
        }
    ]);
    switch (chooseTask) {
        case OPERATIONS.AddToDo:
            await addTodo();
            break;
        case OPERATIONS.ViewToDo:
            await viewTodo();
            break;
        case OPERATIONS.DeleteToDo:
            await deleteTodo();
            break;
        case OPERATIONS.UpdateToDo:
            await updateTodo();
            break;
        case OPERATIONS.ExitApp:
            condition = false;
            console.clear();
            console.log("Exiting Application");
            break;
        default:
            break;
    }
}
async function viewTodo() {
    console.clear();
    if (myToDos.length > 0) {
        console.log("------MY TODO'S------");
        for (let i = 0; i < myToDos.length; i++) {
            console.log(`${i + 1}) ${myToDos[i]}`);
        }
        console.log("");
    }
    else {
        console.clear();
        console.log("");
        console.log("Sorry, No Tasks in ToDo");
        console.log("");
    }
    // const { startAgain } = await inquirer.prompt([
    //     {
    //         name: "startAgain",
    //         type: "confirm",
    //         message: "Want to perform more actions?"
    //     }
    // ])
    // condition = startAgain
}
;
async function addTodo() {
    const { addTask } = await inquirer.prompt([
        {
            name: "addTask",
            type: "input",
            message: "Please enter your ToDo task:"
        }
    ]);
    myToDos.push(addTask);
    console.clear();
    console.log("");
    console.log(`Task: ${addTask}, added to your list`);
    console.log("");
    // const { startAgain } = await inquirer.prompt([
    //     {
    //         name: "startAgain",
    //         type: "confirm",
    //         message: "Want to perform more actions?"
    //     }
    // ])
    // condition = startAgain
}
;
async function deleteTodo() {
    console.clear();
    if (myToDos.length > 0) {
        for (let i = 0; i < myToDos.length; i++) {
            const { removeTodo } = await inquirer.prompt([
                {
                    name: "removeTodo",
                    type: "list",
                    message: "Please select what you want to delete?",
                    choices: myToDos
                }
            ]);
            myToDos.splice(myToDos.indexOf(removeTodo), 1);
            console.clear();
            console.log("");
            console.log(`Task: ${removeTodo}, deleted from the list`);
            console.log("");
            break;
        }
    }
    else {
        console.clear();
        console.log("");
        console.log("Sorry, No Tasks in ToDo");
        console.log("");
    }
    // const { startAgain } = await inquirer.prompt([
    //     {
    //         name: "startAgain",
    //         type: "confirm",
    //         message: "Want to perform more actions?"
    //     }
    // ])
    // condition = startAgain
}
;
async function updateTodo() {
    console.clear();
    if (myToDos.length > 0) {
        for (let i = 0; i < myToDos.length; i++) {
            const { updateTodo, todoUpdated } = await inquirer.prompt([
                {
                    name: "updateTodo",
                    type: "list",
                    message: "Please select which task to update?",
                    choices: myToDos
                }, {
                    name: "todoUpdated",
                    type: "input",
                    message: "Please update your task?"
                }
            ]);
            myToDos.splice(myToDos.indexOf(updateTodo), 1, todoUpdated);
            console.log("");
            console.log(`Task, ${updateTodo} updated to: ${todoUpdated}`);
            console.log("");
            break;
        }
    }
    else {
        console.clear();
        console.log("");
        console.log("Sorry, No Tasks in ToDo");
        console.log("");
    }
    // const { startAgain } = await inquirer.prompt([
    //     {
    //         name: "startAgain",
    //         type: "confirm",
    //         message: "Want to perform more actions?"
    //     }
    // ])
    // condition = startAgain
}
;
