#!/usr/bin/env node
let help = require('./Commands/help')
let tree = require('./Commands/tree')
let organize = require('./Commands/organize')

// Gives array of command line inputs.
let inputArray = process.argv.slice(2);
let command = inputArray[0];

// Types of files and its categories.
let types = {
  media: ["mp4", "mkv"],
  archives: ["zip", "rar", "7z", "tar", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odg",
    "odf",
    "txt",
    "ps",
    "pptx",
  ],
  app: ["exe", "dng", "pkg", "deb"],
};

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
