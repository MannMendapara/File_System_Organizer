let fs = require("fs");
let path = require("path");

function organizefn(dirpath) {
    // 1. Dir path is given
    let destinationPath;
    if (dirpath == undefined) {
      destinationPath = process.cwd()
      return;
    } else {
      let doesExist = fs.existsSync(dirpath);
      if (doesExist) {
        // 2. Create One Dir OrganizeFiles name
        destinationPath = path.join(dirpath, "Organized_Files");
        if (!fs.existsSync(destinationPath)) {
          fs.mkdirSync(destinationPath);
        }
      } else {
        console.log("Invalid Path");
        return;
      }
    }
    organizeHelper(dirpath, destinationPath);
  }
  
  function organizeHelper(srcPath, desPath) {
    // 3. Check all files category
    let childfiles = fs.readdirSync(srcPath);
    for (let i = 0; i < childfiles.length; i++) {
      let ChildfilesPaths = path.join(srcPath, childfiles[i]);
      let isfile = fs.lstatSync(ChildfilesPaths).isFile();
      if (isfile) {
        let fileCategory = getCatogery(childfiles[i]);
        // 4. copy / cut files to that organize directory > category directory
        setFiles(ChildfilesPaths, desPath, fileCategory);
      }
    }
  }
  
  function getCatogery(file) {
    let ext = path.extname(file);
    ext = ext.slice(1);
    for (let type in types) {
      let currentType = types[type];
      for (let i = 0; i < currentType.length; i++) {
        if (ext == currentType[i]) {
          return type;
        }
      }
    }
    return "other";
  }
  
  function setFiles(srcPath, desPath, category) {
    let categoryPath = path.join(desPath, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
    let filepath = path.basename(srcPath);
    let desfilePath = path.join(categoryPath, filepath);
    fs.copyFileSync(srcPath, desfilePath);
    fs.unlinkSync(srcPath);
    console.log(filepath, "Copied", category);
  }

  module.exports = {
    organizeKey: organizefn
  }