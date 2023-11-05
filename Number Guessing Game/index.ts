import inquirer,{Answers} from "inquirer"


interface ComplexInterface {
    name:string,
    age:number,
    isStudent:boolean,
    interests:string[]
    address:{
      street:string
      city:string
      postalCode:string
     }
     grades:{
      math:{
        midterm:number
        final:number
      }
      Canvas:{
        midterm: number
        final: number
      }
     }
     contact: {
      email:string
      phone: string
     }
     tuple:[number,string,boolean ],
     tuple1:(x:number) => number

}
const complexObject:ComplexInterface = {
    name: "Humair G.",
    age: 25,
    isStudent: false,
    interests: ["Music", "Reading", "Cricket"],
    address: {
      street: "123 East Main Street",
      city: "Victoria",
      postalCode: "00000",
    },
    grades: {
      math: {
        midterm: 80,
        final: 95,
      },
      Canvas:{
        midterm: 67,
        final: 90,
      },
    },
    contact: {
      email: "humair.gm@example.com",
      phone: "+000000000",
    },
    tuple: [1, "two", true],
    tuple1: function (x:number) {
      return x * 2;
    },
  };


  interface accountInterface {
    accountNumber : string,
    pin:string,
    balance:number,
    transactions:string[]
}

let account:accountInterface = {
    accountNumber:"PKHB004020035",
    pin:"0000",
    balance:1000,
    transactions:[]
}

async function login():Promise<void> {

    let userAccountLogin:Answers = await inquirer.prompt([
        {
            name:"accountNumber",
            type:"string",
            message:"Enter Your Bank Account Number"
        },
        {
            name:"pin",
            type:"string",
            message:"Enter Your Four Digits Pin"
        }
    ]) 

    if(userAccountLogin.accountNumber === account.accountNumber && userAccountLogin.pin === account.pin) {
        console.log("Your Login Successful")
        actionToPerform()
    }else {
        console.error(`Incorrect Login Details. Please Retry Again.`)
    }


}


function logout() {
    console.log("You Logout Successfully");
    
}

function checkBalance() {
    console.log(`Your Account Balance is: ${account.balance}`);
    actionToPerform()
}

async function withdraw():Promise<void> {
    let withdrawAmount = await inquirer.prompt([
        {
            name:"amount",
            type:'number',
            message:`Enter Amount to Withdraw From Your Account`,
            validate:(input: number) => (input > 0 && input < account.balance)
        }
    ])

    let amount = withdrawAmount.amount
    account.balance -= amount
    console.log(`${amount} has been successfully withdrawn from your account`);
    account.transactions.push(amount)
    actionToPerform()


}


function viewTransactions() {
    if(account.transactions.length > 0) {
        for (let i = 0; i < account.transactions.length; i++) {
            const element = account.transactions[i];
            console.log(element);   
        }
    }else {
        console.warn('No Any Transactions Yet')
    }
    actionToPerform();
}



async function actionToPerform():Promise<void> {
        let actions = await inquirer.prompt([
            {
                name:"action",
                type:"list",
                message:"Please Choose What Operation You Want To Perform: ",
                choices:["Check Balance","Withdraw","View Transactions","Logout"]
            }
        ])

        switch (actions.action) {
            case "Check Balance":
                checkBalance()
                break;
            case "Withdraw":
                withdraw()   
                break; 
            case "View Transactions":
                viewTransactions()
                break;
            case "Logout":
                logout()    
                break;
            default:
                actionToPerform()
                break;
        }
}





login()