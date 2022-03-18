const fs = require('fs');
const path = require('path');
const chalk = require("chalk")
const JavaScriptObfuscator = require('javascript-obfuscator');

function *walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

const config = {

}

for (const filePath of walkSync(path.join(__dirname, "build"))) {

    if (filePath.match(/\.js$/)) {
        console.log(chalk.bgYellow(chalk.black(`Securing ${filePath}`)))
        
        let fileContents = fs.readFileSync(filePath, "utf-8")
        let obfuscatedFileContents = JavaScriptObfuscator.obfuscate(fileContents, config)
        fs.writeFileSync(filePath, obfuscatedFileContents.getObfuscatedCode(), "utf-8")
    }

}

console.log("")