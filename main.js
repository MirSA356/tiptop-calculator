#! /usr/Bin/env node
// shabang;;;;
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number",
        name: "fisrtNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log(answer);
// conditonal statement 
if (answer.operator === "Addition") {
    console.log(answer.fisrtNumber + answer.secondNumber);
}
else if (answer.operator === "Subtration") {
    console.log(answer.fisrtNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.fisrtNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.fisrtNumber / answer.secondNumber);
}
else {
    console.log("please select a valid operator");
}
// move to desired folder 
// run npm init 
// run tsc --init
// install inquirer, @types/ inquirer code
