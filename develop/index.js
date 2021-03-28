// TODO: Include packages needed for this application
// const CheckboxPrompt = require("inquirer/lib/prompts/checkbox");
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Reruired)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a title for your project");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about? (Reruired)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "contents",
        message: "Table of Contents:",
        choices: "Installation, Usage, License, Contributing, Tests, Questions",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project (Reruired)",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter installation instructions for your project");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please ender information on how to use your project (Reruired)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter information on how to use your project");
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "What type of license does your project use?",
        choices: "ISC, GNU GOLv3, Apache License 2.0, MIT"
    },
    {
        type: "input",
        name: "Conributing",
        message: "How can others contribute to this project?",
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log("Please enter information on how others can contribute to this project");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any tests that can be run on your code?"
    },
    {
        type: "input",
        name: "questions",
        message: "Where can people reach out to contact you with questions? Please add your GitHub username and email address.",
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username and email address");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();