"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([{
        type: "number",
        name: "number1",
        message: "Enter The First Number:"
    },
    {
        type: "number",
        name: "number2",
        message: "Enter The Second Number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["-", "+", "*", "/"],
        message: "Please Select Operation:"
    }]);
var number1 = answers.number1, number2 = answers.number2, operator = answers.operator;
if (number1 && number2 && operator) {
    var result = 0;
    if (operator == "-") {
        result = number1 - number2;
    }
    else if (operator == "+") {
        result = number1 + number2;
    }
    else if (operator == "/") {
        result = number1 / number2;
    }
    else if (operator == "*") {
        result = number1 * number2;
    }
    console.log("The Result is:", result);
}
else {
    console.log("Invalid Input.");
}
