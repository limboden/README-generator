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
    type: 'list',
    message: 'Select your License',
    name: 'license',
    choices: ['MIT', 'CC', 'Apache-2.0', 'Unlicense']
  },
  {
    type: 'input',
    message: 'List your contributors',
    name: 'contributing'
  },
  {
    type: 'input',
    message: 'List your Tests',
    name: 'tests'
  },
  {
    type: 'input',
    message: 'enter your github username',
    name: 'github'
  },
  {
    type: 'input',
    message: 'enter your email address',
    name: 'email'
  },
];

function handleSubmit(resp) {
  let licenseBadge = '';
  let licenseLink = '';
  switch (resp.license) {
    case 'MIT':
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'CC':
      licenseBadge = '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
      licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Apache-2.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Unlicense':
      licenseBadge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      licenseLink = 'http://unlicense.org/';
      break;
  }


  writeToFile('./generatedREADME.md', `
# ${resp.nameOfProject}

${licenseBadge}


## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


## Description:
${resp.projectDescription}


## Installation:
${resp.installationReq}

## Usage:
${resp.usage}

## Contributing:
${resp.contributing}

## Tests:
${resp.tests}

## License:
This project is under the '${resp.license}' License.
Learn more about this License [here!](${licenseLink})

## Questions:
- [Github!](http://www.github.com/${resp.github})
- [Email me!](mailto:${resp.email})


### Thank you for reading me!
`);
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
