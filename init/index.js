// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');

const generateBadges = require('./assets/generateBadges.js')
// TODO: Create an array of questions for user input
const questions = (inquirer);

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the title of your README?",
            name: 'Title',
        },
        {
            type: 'input',
            message: "Write a quick description of the README",
            name: 'Description',
        },
        {
            type: 'input',
            message: "What is your Github username?",
            name: 'username',
        },
        {
            type: 'input',
            message: "What is the name of your Github repo?",
            name: 'repo',
        },
        {
            type: 'input',
            message: "What is your email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "If applicable, describe the steps required to install your projects",
            name: 'installation',
        },
        {
            type: 'input',
            message: "Provide instructions and examples of your project in use for the Usage section.",
            name: 'usage',
        },
        {
            type: 'input',
            message: "Provide guidlines on how other developers can contribute.",
            name: 'contributing',
        },
        {
            type: 'input',
            message: "Provide any tests written for your application and provide examples on how to run them.",
            name: 'tests',
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license'
        }
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been generated")
    });
}

const generateFileAsync = (writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses!");

        console.log("Generating your README next...")
        const badges = generateBadges(userResponses);
        console.log(badges);

        await generateFileAsync('GeneratedREADME.md', badges);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
