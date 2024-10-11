// TODO: Include packages needed for this application
import inq from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'what is your name',

  },
  {

  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions).then();
}

// Function call to initialize app
init();
