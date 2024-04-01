#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 50000;
let myPin = 2005;
let pinAnswer = await inquirer.prompt([
    {
        name: "faysalBankLimited",
        message: "Enter your Pin:",
        type: "number",
    },
]);
if (pinAnswer.faysalBankLimited === myPin) {
    let atmMachine = await inquirer.prompt([
        {
            name: "accountType",
            message: "Select your account type",
            type: "list",
            choices: ["Current Account", "Saving Account"],
        },
        {
            name: "transMethod",
            message: "Select your transaction method",
            type: "list",
            choices: ["Cash Withdrawal", "Fast Cash"],
        },
    ]);
    if (atmMachine.transMethod == "Cash Withdrawal") {
        let cashWithdrawAmount = await inquirer.prompt([
            {
                name: "withdrawal",
                message: "Enter the amount you want to withdraw",
                type: "number",
            },
        ]);
        if (currentBalance >= cashWithdrawAmount.withdrawal) {
            currentBalance -= cashWithdrawAmount.withdrawal;
            console.log(`Your Total Balance is :${currentBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: ["500", "1000", "3000", "5000", "10000"],
            },
        ]);
        if (currentBalance >= fastCashAmount.fastcash) {
            currentBalance -= fastCashAmount.fastcash;
            console.log(`Your Total Balance is :${currentBalance}`);
        }
        else {
            console.log("Insufficent Balance");
        }
    }
}
