const inquirer = require('inquirer');
const fs = require('fs')

//Inquirer prompts for command line inputs
inquirer.prompt([
    {
        type: 'input',
        message: `What is your GitHub username?`,
        name: `username`
    },
    {
        type: 'input',
        message: `What is your GitHub associated email?`,
        name: `email`
    },
    {
        type: 'input',
        message: `What is your project's title?`,
        name: `title`
    },
    {
        type: 'input',
        message: `What is your project's description?`,
        name: `description`
    },
    {
        type: 'input',
        message: `How do you install your product?`,
        name: `installation`
    },
    {
        type: 'input',
        message: `What is your project's usage information?`,
        name: `usage`
    },
    {
        type: 'checkbox',
        choices: [`a`, `b`, `c`],
        message: `What is your project's licensing?`,
        name: `license`
    },
    {
        type: 'input',
        message: `What is your project's contribution guidelines?`,
        name: `contribution`
    },
    {
        type: 'input',
        message: `What is your project's test instructions?`,
        name: `tests`
    },
    
])
.then(response => {
    console.log(response);
    //Makes a new markdown file with a template literal that inserts the code and the responses from the inquirer prompts 
    fs.writeFile('PRO.md', `# ${response.title}

## Description
    
${response.description}
    
## Table of Contents 
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
${response.installation}
    
## Usage
    
${response.usage}
    
## License
    
${response.license}
    
## Contribute
    
${response.contribution}
    
## Tests
    
${response.tests}
    
## Questions
    
If you would like to contact me with questions or suggestions you can reach me through...
    
Email: ${response.email}
    
GitHub: [github.com/${response.username}](https://github.com/${response.username})`, err => {
        if(err) {
            console.log(err);
        }
    })
})

function init() {}

// Function call to initialize app
init();