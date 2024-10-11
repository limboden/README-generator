// TODO: Include packages needed for this application
import inq from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'what is your name',
    name: 'name'
  }
];

function handleSubmit(resp) {
  writeToFile('./generatedREADME.md', resp.name);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('generated!');
  })
}

// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions).then(handleSubmit);
}

// Function call to initialize app
init();
