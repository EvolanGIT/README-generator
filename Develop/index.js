// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'Username',
        message: 'What is your Name?',
    },
    {
        type: 'input',
        name: 'filename',
        message: 'What is the name of the Project you are working on?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'What is the purpose of this program?',
    },
    {
        type: 'checkbox',
        name: 'badges',
        message: 'Would you like to add any badges to the md file?',
        choices: ['JavaScript', 'nodeJs'],
    },
    {
        type: 'input',
        name: 'initGuide',
        message: 'can you describe how to install this program?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'please choose the License badge(s) you would like to add.',
        choices: ['MIT License', 'CC Zero License', 'Unilicense', 'none'],
    },
    {
        type: 'input',
        name: 'programTest',
        message: 'please provide a small description on how to use this program:',
    },
    {
        type: 'input',
        name: 'emailInfo',
        message: 'Enter your email for contact:',
        },
    {
        type: 'input',
        name: 'githubInfo',
        message: 'Please provide your Github username: ',
    },
    ])
    .then((data) => {
        writeToFile(data);
})};

// TODO: Create a function to write README file
function writeToFile(data) {
    //fs.writefile - if there is no file, it will generate one. if there is a file, it will overwrite what's in it.
    // if there is no file, it needs three arguments.
    //
    fs.writeFile('./dist/newREADME.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Readme file created successfuly!')
    );}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
