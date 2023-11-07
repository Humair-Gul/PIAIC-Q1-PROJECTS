import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateText(text: string): Promise<void> {
    for (let i = 0; i < text.length; i++) {
        process.stdout.write(text[i]);
        await delay(50);
    }
    console.log();
}

async function main() {
    console.clear();

    await animateText("Welcome to the Quiz.");

    const questions = [
        {
            question: "How Many Bones are There in Human Body",
            choices: ["A. 206", "B. 207", "C. 208"],
            correctAnswer: "A"
        },
        {
            question: "The SI Unit of Electric Charge is",
            choices: ["A. Farad", "B. Coloumb", "C. Henry"],
            correctAnswer: "B"
        },
        {
            question: "Electrons Carry",
            choices: ["A. Positive Charge", "B. Negative Charge", "C. No Charge"],
            correctAnswer: "B"
        }
    ];

    let score = 0;

    for (const [index, question] of questions.entries()) {
        console.log(`\nQuestion ${index + 1}: ${question.question}`);
        for (const choice of question.choices) {
            console.log(choice);
        }

        const userAnswer = await askQuestion(`\nYour answer (A/B/C): `);
        if (userAnswer.toUpperCase() === question.correctAnswer) {
            console.log("👏 Correct!\n");
            score++;
        } else {
            console.log("❌ Incorrect! The correct answer is: " + question.correctAnswer + ".\n");
        }
    }

    await animateText(`🎉 Quiz Completed! You have scored ${score} out of ${questions.length}! 🎉`);

    rl.close();
}

function askQuestion(question: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

if (require.main === module) {
    main();
}
