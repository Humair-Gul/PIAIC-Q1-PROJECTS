#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let computerGeneratedNumber:number = Math.random() * 10 + 1;

let randomNumber:number = Math.round(computerGeneratedNumber)


interface guessnumber {
    guessnumber: number
};
interface playagain {
    playAgain: boolean
};


console.log(chalk.bgMagentaBright.bold("Welcome to Number Guessing Game: Lets guess a Number in between 1 to 10 in 3 tries"))


let tries:number = 3
let play:boolean = true;

while (play) {
while (tries > 0) {
const ask: guessnumber = await inquirer.prompt([
        {
            type: "number",
            name: "guessnumber",
            message: chalk.bgWhiteBright.blackBright.bold.italic("Enter Your Guess Number :"),
            validate: (guessnumber) => {
                if (!guessnumber || guessnumber > 10) {
                   return "Please enter a valid number: "     
                }
                return true;
            }

        },
        
])

    
if (ask.guessnumber !== randomNumber) {
    console.log ("Wrong! You have failed to guess the right number: Try Again")
    if (ask.guessnumber > randomNumber) {
        console.log(`Wrong! Your Guess Number is greater than right number ${chalk.bgWhiteBright.black("Think Lower")}`)
    }
    else if (ask.guessnumber < randomNumber) {
        console.log(`Wrong! Your Guess Number is less than right number ${chalk.bgWhiteBright.black("Think Higher")}`)
    }
    console.log(chalk.redBright(`You have only ${tries - 1} try left`));
    
}
else {
    console.log ("Congratulation! The number you guessed is the right number:" + chalk.bgBlueBright("The Game Ends Here."))
    tries = 0;
 
}
tries --;
}
const askPlayAgain: playagain = await inquirer.prompt([
    {
        type: "confirm",
        name: "playAgain",
        message: chalk.bgWhiteBright.blackBright.bold.italic("Do you want to Play Again :")
    },
    
]);

if (askPlayAgain.playAgain) {
    console.log(chalk.bgMagentaBright.bold("Welcome to Number Guessing Game: Lets guess a Number in between 1 to 10 in 3 tries"))
    tries = 3
   computerGeneratedNumber = Math.random() * 10 + 1;
   randomNumber= Math.round(computerGeneratedNumber)    
   

}

else {
    console.log(chalk.bgBlueBright("Closing The Game..."))
    play = false;
}
}