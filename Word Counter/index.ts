import inquirer from "inquirer";


const wordCounter =(paragraph:string)=>paragraph.replace(/\s/g,"").length
 
 



async function startWordCount(wordCounter :(text:string)=>number){
    
        do{
            let res=await inquirer.prompt({
                type:"input",
                message:"Write The Paragraph To Start Words Count. ",
                name:"paragraph"
            })
            console.log(wordCounter(res.paragraph));
            
    }
    while(true)
}
    
   
    


startWordCount(wordCounter)




