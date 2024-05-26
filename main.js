#!/usr/bin/env node
// Above Line of code used to make our commands Access Global.

// import of command objects which contains the functions that perform the task according to the command.
let help = require("./Commands/help");
let tree = require("./Commands/tree");
let organize = require("./Commands/organize");

// Gives array of command line inputs.
let inputArray = process.argv.slice(2);
let command = inputArray[0];

// Types of files and its categories.
const types = require('./utility')

// Switch statement for identify which command will have to execute.
switch (command) {
  case "tree":
    tree.treeKey(inputArray[1]);
    break;

  case "organize":
    organize.organizeKey(inputArray[1]);
    break;

  case "help":
    help.helpKey();
    break;

  default:
    console.log("Invalid Command");
    break;
}
