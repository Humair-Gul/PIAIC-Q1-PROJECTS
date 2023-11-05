#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var computerGeneratedNumber = Math.random() * 10 + 1;
var randomNumber = Math.round(computerGeneratedNumber);
;
;
console.log(chalk_1.default.bgMagentaBright.bold("Welcome to Number Guessing Game: Lets guess a Number in between 1 to 10 in 3 tries"));
var tries = 3;
var play = true;
while (play) {
    while (tries > 0) {
        var ask = await inquirer_1.default.prompt([
            {
                type: "number",
                name: "guessnumber",
                message: chalk_1.default.bgWhiteBright.blackBright.bold.italic("Enter Your Guess Number :"),
                validate: function (guessnumber) {
                    if (!guessnumber || guessnumber > 10) {
                        return "Please enter a valid number: ";
                    }
                    return true;
                }
            },
        ]);
        if (ask.guessnumber !== randomNumber) {
            console.log("Wrong! You have failed to guess the right number: Try Again");
            if (ask.guessnumber > randomNumber) {
                console.log("Wrong! Your Guess Number is greater than right number ".concat(chalk_1.default.bgWhiteBright.black("Think Lower")));
            }
            else if (ask.guessnumber < randomNumber) {
                console.log("Wrong! Your Guess Number is less than right number ".concat(chalk_1.default.bgWhiteBright.black("Think Higher")));
            }
            console.log(chalk_1.default.redBright("You have only ".concat(tries - 1, " try left")));
        }
        else {
            console.log("Congratulation! The number you guessed is the right number:" + chalk_1.default.bgBlueBright("The Game Ends Here."));
            tries = 0;
        }
        tries--;
    }
    var askPlayAgain = await inquirer_1.default.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: chalk_1.default.bgWhiteBright.blackBright.bold.italic("Do you want to Play Again :")
        },
    ]);
    if (askPlayAgain.playAgain) {
        console.log(chalk_1.default.bgMagentaBright.bold("Welcome to Number Guessing Game: Lets guess a Number in between 1 to 10 in 3 tries"));
        tries = 3;
        computerGeneratedNumber = Math.random() * 10 + 1;
        randomNumber = Math.round(computerGeneratedNumber);
    }
    else {
        console.log(chalk_1.default.bgBlueBright("Closing The Game..."));
        play = false;
    }
}
