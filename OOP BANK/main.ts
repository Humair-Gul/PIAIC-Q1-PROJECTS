import inquirer from "inquirer";
import { de, faker } from "@faker-js/faker"
import chalk from 'chalk';


class Customer {
    fname: string
    lname: string
    gender: string
    age: number
    mobileNo: number
    accNo: number
    constructor(fname: string, lname: string, gender: string, age: number, mobileNo: number, accNo: number) {
        this.fname = fname,
            this.lname = lname,
            this.gender = gender,
            this.age = age,
            this.mobileNo = mobileNo
        this.accNo = accNo
    }
}


interface BankAccount {
    accNo: number,
    pin: number,
    balance: number
}


class Bank {
    Customer: Customer[] = []
    BankAccount: BankAccount[] = []

   
    addCustomer(object: Customer) {
        this.Customer.push(object)
    }
    
    addAccount(object: BankAccount) {
        this.BankAccount.push(object)
    }
    
    addTransaction(object: BankAccount) {
        let newAccount = this.BankAccount.filter(val => val.accNo !== object.accNo)
        this.BankAccount = [...newAccount, object]
    }
}


let customers = new Bank()

for (let i = 1; i <= 5; i++) {
    let fname = faker.person.firstName("male");
    let lname = faker.person.lastName("male");
    let gender = "Male"
    let age = faker.number.int({ min: 18, max: 60 })
    let mobileNo = parseInt(`+923${Math.random() * 10000000000}`)
    let accNo = 2000 + i;
    let pin = 5000 + i;
    let balance = 1000 * i;
    const cus = new Customer(fname, lname, gender, age, mobileNo, accNo)
    const acc: BankAccount = {
        accNo: accNo,
        pin: pin,
        balance: balance
    }
    customers.addCustomer(cus)
    customers.addAccount(acc)
}

let bankFunctions = async (customers: Bank) => {

    while (true) {
        
        let res = await inquirer.prompt([
            {
                type: "number",
                name: "accNo",
                message: "Enter Bank Account Number:"
            },
            {
                type: "number",
                name: "pin",
                message: "Enter Your Pin Code"
            }
        ])


        let account = customers.BankAccount.find(val => val.accNo === res.accNo && val.pin === res.pin)
        if (!account) {
            console.log(`${chalk.red.bold("You Have Entered Invalid Account or Pin. Please Try Again.")}`)
        }
        if (account) {
            let user = customers.Customer.find(val => val.accNo === res.accNo)
            console.log(`${chalk.yellow.italic("Welcome Mr.", user?.fname, user?.lname)}`)

           
            let services = await inquirer.prompt({
                type: "list",
                name: "Service",
                message: "Please Select an Operation You Want To Perform: ",
                choices: ["Deposit", "Withdraw", "Balance Inquiry"]
            })

            
            if (services.Service === "Deposit") {
                let deposit = await inquirer.prompt({
                    type: "number",
                    name: "deposit",
                    message: "Enter Amount To Deposit: "
                })
                if (deposit.deposit) {
                    let addDeposit = account.balance + deposit.deposit;
                    customers.addTransaction({ accNo: account.accNo, pin: account.pin, balance: addDeposit })

                    console.log(`${chalk.blue.bold("Desposit Amount:")} ${chalk.blue.bold(deposit.deposit)}`)
                    console.log(`${chalk.green.bold("Current Balance:")} ${chalk.green.bold(addDeposit)}`)
                }
            }

            if (services.Service === "Withdraw") {
                let withdraw = await inquirer.prompt({
                    type: "number",
                    name: "Withdraw",
                    message: "Enter Amount To Withdraw: "
                })
                if (withdraw.Withdraw <= account.balance) {
                    
                    let lessWithdraw = account.balance - withdraw.Withdraw;
                    customers.addTransaction({ accNo: account.accNo, pin: account.pin, balance: lessWithdraw })

                    console.log(`${chalk.blue.bold("Withdrawal Amount:")} ${chalk.blue.bold(withdraw.Withdraw)}`)
                    console.log(`${chalk.green.bold("Current Balance:")} ${chalk.green.bold(lessWithdraw)}`)
                }
                else {
                    console.log(`${chalk.red.bold("Transaction Error!")} Please Enter Valid Amount.`)
                }
            }

            if (services.Service === "Balance Inquiry") {
                console.log(`${chalk.green.bold("Available Balance: ", account.balance)} `)
            }
        }
    }
}

bankFunctions(customers)