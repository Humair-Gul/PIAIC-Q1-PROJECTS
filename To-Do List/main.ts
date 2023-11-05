import inquirer from "inquirer";



let todos: string[] = []

async function createTodo(todos: string[]) {
    while (true) {
        let answer = await inquirer.prompt({
            type: "list",
            name: "selectOperation",
            message: "Select operation for To Do list",
            choices: ["Add", "Update", "View", "Delete"]
        })

        if (answer.selectOperation === "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "AddTodo",
                message: "Add an item to the to-do list: "
            })
            todos.push(addTodo.AddTodo)
            console.log(todos)
        }
        if (answer.selectOperation === "Update") {
            let updateTodo = await inquirer.prompt([{
                type: "list",
                name: "SelectTodo",
                choices: todos.map(item => item),
                message: "Select an item to update the to-do list: "
            },
            {
                type: "input",
                name: "AddTodo",
                message: "Add an item to to do list:"
            }
            ])
            console.log(updateTodo.SelectTodo)
            let newTodo = todos.filter(val => val !== updateTodo.SelectTodo)
            todos = [...newTodo, updateTodo.AddTodo]
            console.log(todos)
        }
        if (answer.selectOperation === "View") {
            console.log(todos)
        }
        if (answer.selectOperation === "Delete") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "DeleteTodo",
                choices: todos.map(item => item),
                message: "Select an item to delete from to-do list: "
            })
            let newTodo = todos.filter(val => val !== updateTodo.DeleteTodo)
            todos = [...newTodo]
            console.log(todos)
        }
    }
}

createTodo(todos)
