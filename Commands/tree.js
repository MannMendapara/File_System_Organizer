let fs = require("fs");
let path = require("path");

function treefn(dirpath) {
  let destinationPath;
  if (dirpath == undefined) {
    treeHelper(process.cwd(), "");
    return;
  } else {
    // Check if file path is valid or not.
    let doesExist = fs.existsSync(dirpath);
    if (doesExist) {
      treeHelper(dirpath, "");
    } else {
      console.log("Invalid Path");
      return;
    }
  }
}

function treeHelper(dirpath, indent) {
  // Check Is file or folder
  let isFile = fs.lstatSync(dirpath).isFile();
  if (isFile) {
    let filename = path.basename(dirpath);
    console.log(indent + "├── " + filename);
  } else {
    // If file then print else If Directory than Again check for the file and directory.
    let dirname = path.basename(dirpath);
    console.log(indent + "└──> " + dirname);
    let childrens = fs.readdirSync(dirpath);
    for (let i = 0; i < childrens.length; i++) {
      let childpath = path.join(dirpath, childrens[i]);
      treeHelper(childpath, indent + "\t");
    }
  }
}

module.exports = {
  treeKey: treefn
}