import inquirer from "inquirer";
const answers:{
    number1:number,
    number2:number,
   operator:string
}=await inquirer.prompt([{
    type:"number",
    name:"number1",
    message:"Enter The First Number:"
},
{
    type:"number",
    name:"number2",
    message:"Enter The Second Number:"
},
{
type:"list",
name:"operator",
choices:["-","+","*","/"],
message:"Please Select Operation:"
}])
const {number1,number2,operator} = answers;
if(number1 && number2 && operator){
    let result :number = 0;
    if(operator == "-"){
        result = number1 - number2;
    }
       else if(operator == "+"){
        result = number1 +number2;
    }
    else if(operator == "/"){
        result = number1 / number2;
    } 
    else if(operator == "*"){
        result = number1 * number2;
    }
    console.log(`The Result is:` , result );
}else{
    console.log("Invalid Input.")
}
