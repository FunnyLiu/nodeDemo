
"use strict";
const inquirer = require("inquirer");

// Register plugin
inquirer.registerPrompt("search-list", require("inquirer-search-list"));

inquirer
    .prompt([
        {
            type: "search-list",
            message: "Select topping",
            name: "topping",
            choices: ["Pepperoni", "Ham", "Ground Meat", "Bacon", "Mozzarella", "Bottle"]
        }
    ])
    .then(function(answers) {
        console.log(JSON.stringify(answers, null, "  "));
    })
    .catch(e => console.log(e));