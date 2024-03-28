#! /usr/bin/env node

import inquirer from "inquirer";

let currentBalance = 200000;
let myPin = 2005;


let pinAnswer = await inquirer.prompt([
    {
        name: "faysalBankLimited",
        message: "Enter your Pin:",
        type: "number",
    },
]);

if (pinAnswer.faysalBankLimited === myPin) {
    console.log("Correct pin Number!!!");

    let correctPin = await inquirer.prompt({
        name: "pinCode",
        message: "What you want to do?",
        type: "list",
        choices: ["Withdraw", "Check Balance"],
    });

    if (correctPin.pinCode === "Withdraw") {
        let withdrawAmount = await inquirer.prompt({
            name: "amount",
            message: "Please enter the amount you want to withdraw:",
            type: "number",
        });

        if (withdrawAmount.amount > currentBalance) {
            console.log("Insufficient Balance");
        } else {
            currentBalance -= withdrawAmount.amount;
            console.log(`Your remaining balance is = ${currentBalance}`);
        }
    } else if (correctPin.pinCode === "Check Balance") {
        console.log(`Your balance is = ${currentBalance}`);
    }
} else {
    console.log("Incorrect pin code!! Please enter correct.");
}
