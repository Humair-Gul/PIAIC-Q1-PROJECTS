"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var inquirer_1 = require("inquirer");
var result = await inquirer_1.default.prompt({
    type: "number",
    name: "userInput",
    message: "Enter an amount of time in seconds",
    validate: function (input) {
        if (isNaN(input)) {
            return "Please Enter a Valid Number";
        }
        else if (input > 60) {
            return "Seconds can't exceed 60. Please Choose between 1 to 60";
        }
        else {
            return true;
        }
    }
});
var input = result.userInput + 2;
function startTimer(val) {
    var intTime = new Date().setSeconds(new Date().getSeconds() + val);
    var intervalTime = new Date(intTime);
    setInterval(function () {
        var currentTime = new Date();
        var diffTime = (0, date_fns_1.differenceInSeconds)(intervalTime, currentTime);
        if (diffTime <= 0) {
            console.log("The Timer Has Expired");
            process.exit();
        }
        var min = Math.floor((diffTime % (3600 * 24)) / 3600);
        var sec = Math.floor((diffTime % 60));
        console.log("".concat(min.toString().padStart(2, "0"), ":").concat(sec.toString().padStart(2, "0")));
    }, 1000);
}
startTimer(input);
