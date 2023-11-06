"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var conversionMoney = {
    "PKR": {
        "USD": 0.00375,
        "GBP": 0.00386,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.30,
        "PKR": 272,
        "GBP": 1
    },
    "USD": {
        "PKR": 276,
        "GBP": 0.90,
        "USD": 1
    }
};
var answers = await inquirer_1.default.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select Your Currency You Want To Convert From: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select The Currency You Want To Convert in: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter The Conversion Amount "
    }
]);
var from = answers.from, to = answers.to, amount = answers.amount;
if (from && to && amount) {
    var result = conversionMoney[from][to] * amount;
    console.log("The conversion Amount from \"".concat(from, "\" to \"").concat(to, "\" is: ").concat(result));
}
else {
    console.log("The Invalid Is Invalid.");
}
