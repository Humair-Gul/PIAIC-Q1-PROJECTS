import inquirer from "inquirer";

let conversionMoney ={
    "PKR":{
        "USD":0.00375,
        "GBP":0.00386,
        "PKR":1
    },
    "GBP":{
        "USD":1.30,
        "PKR":272,
        "GBP":1
    },
    "USD":{
        "PKR":276,
        "GBP":0.90,
        "USD":1
    }
}

const answers :{
    from:"PKR"|"USD"|"GBP",
    to:"PKR"|"USD"|"GBP",
    amount:number
}
=await inquirer.prompt([
    {
        type:"list",
        name:"from",
        choices:["PKR","GBP","USD"],
        message:"Select Your Currency You Want To Convert From: "
    },
    {
        type:"list",
        name:"to",
        choices:["PKR","GBP","USD"],
        message:"Select The Currency You Want To Convert in: "
    },
    {
        type:"number",
        name:"amount",
        message:"Enter The Conversion Amount "
    }
    
]);
const {from,to,amount} = answers;
if(from && to && amount){
    let result = conversionMoney[from][to] * amount
    console.log(`The conversion Amount from "${from}" to "${to}" is: ${result}`);
    
}else{
    console.log("The Amount Is Invalid.");
    
}
