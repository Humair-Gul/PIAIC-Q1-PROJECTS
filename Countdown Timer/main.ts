import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";



const result = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Enter an amount of time in seconds",
    validate: (input)=>{
        if(isNaN(input)){
            return "Please Enter a Valid Number"
        }
        else if(input > 60) {
            return "Seconds can't exceed 60. Please Choose between 1 to 60"
        }
        else{
            return true
        }
    }
})

let input = result.userInput + 2;

function startTimer(val: number) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val)
    const intervalTime = new Date(intTime)
    setInterval(() => {
        const currentTime = new Date()
        const diffTime = differenceInSeconds(intervalTime, currentTime)
        if (diffTime <= 0) {
            console.log(`The Timer Has Expired`)
            process.exit()
        }
        const min = Math.floor((diffTime % (3600 * 24)) / 3600)
        const sec = Math.floor((diffTime % 60))
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`)
    }, 1000)
}

startTimer(input)