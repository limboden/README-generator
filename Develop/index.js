// TODO: Include packages needed for this application
import inq from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'what is the name of your project',
    name: 'nameOfProject'
  },
  {
    type: 'input',
    message: 'Write a short description for what the project is',
    name: 'projectDescription'
  },
  {
    type: 'input',
    message: 'What is required to install your project?',
    name: 'installationReq'
  },
  {
    type: 'input',
    message: 'Provide instructions and examples of use of your project.',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'List your credits',
    name: 'credits'
  },
  {
    type: 'list',
    message: 'Select your License',
    name: 'license',
    choices: ['MIT', 'CC', 'Apache-2.0', 'Unlicense']
  }
];

function handleSubmit(resp) {
  writeToFile('./generatedREADME.md', `
# ${resp.nameOfProject}

## Description:
${resp.projectDescription}

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation:
${resp.installationReq}

## Usage:
${resp.usage}

## Credits:
${resp.credits}

## License:
${resp.license}`);
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
