import inquirer from "inquirer";
import { faker } from "@faker-js/faker"


interface UserInfo {
    name: string;
    pin: number;
    balance: number;
    id: number;
    accountNumber: number;
}

const createUsers = () => {
    let users: UserInfo[] = []
    for (let i = 0; i < 99; ++i) {
        let user: UserInfo = {
            name: faker.person.fullName(),
            pin: 5000 + i,
            balance: 1000 * i,
            id: 1000 + i,
            accountNumber: Math.floor(1000000 * (Math.random() * 50000))
        }
        users.push(user)
    }
    return users
}

const usersData = createUsers();



const response = async (usersData: UserInfo[]) => {
    const res = await inquirer.prompt([
        {
            type: "number",
            message: "Please Enter your ID: ",
            name: "id"
        },
        {
            type: "number",
            message: "Please Enter Your Pin Code: ",
            name: "pin"
        }
    ])
    const user = usersData.find(val => val.id === res.id && val.pin === res.pin)
    if (user) {
        console.log(`Welcome ${user.name}`)
        return atmFunction(user)
    }
    else {
        return console.log(`You Have Entered Invalid ID or Pincode. Try Again.`)
    }

}

const atmFunction = async (user: UserInfo) => {
    const ans = await inquirer.prompt([
        {
            type: "list",
            choices: ["Withdraw", "Deposit", "Balance"],
            message: "Please Select the Operation You Want to Perform: ",
            name: "operation"
        }
    ])
    if (ans.operation === "Withdraw") {
        const withdraw = await inquirer.prompt([
            {
                type: "number",
                message: "Enter Amount You Want to Withdraw: ",
                name: "withdrawlAmount"
            }
        ])
        if (withdraw.withdrawlAmount > user.balance) {
            console.log(`Your Account Balance Is Insufficient.`)
            console.log(`Balance: ${user.balance}`)
        }
        else {
            console.log(`Withdrawl Amount: ${withdraw.withdrawlAmount}`);
            console.log(`Balance Amount: ${user.balance - withdraw.withdrawlAmount}`)
        }
    }
    if (ans.operation === "Deposit") {
        const deposit = await inquirer.prompt([
            {
                type: "number",
                message: "Enter Amount You Want To Deposit: ",
                name: "depositAmount"
            }
        ])
        console.log(`Deposit Amount: ${deposit.depositAmount}`);
        console.log(`Balance Amount: ${user.balance + deposit.depositAmount}`)
    }
    if (ans.operation === "Balance") {
        return console.log(`Balance: ${user.balance}`)
    }
}


response(usersData)

