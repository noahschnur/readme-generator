// TODO: Include packages needed for this application
const CheckboxPrompt = require("inquirer/lib/prompts/checkbox");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
// const {writeToFile} = require("./utils/generateMarkdown.js");
const fs = require("fs");
const questionsAnswers = [];

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        choices: ["ISC", "GNU GOLv3", "Apache License 2.0", "MIT"],
    },
    {
        type: "input",
        name: "conributing",
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
        message: "Does your application have any tests to be written?",
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please enter what tests should be run");
                return false;
            }
        }
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
    },
])
.then(data => {
    questionsAnswers.push(data);
    })

};

questions()
    .then(data => {
        return generateMarkdown(data);
    })
    .catch(err => {
        console.log(err);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, err => {
          if (err) {
          console.log(err);
          }
          console.log("README created");
    });
}

// return new Promise((resolve, reject) => {
//     fs.writeToFile("./utils/readme.md", fileName, err => {
//         if (err) {
//             reject(err);
//             return;
//         }
//         resolve({
//             ok: true,
//             message: "File created!"
//         });
//     });
// }); 

// TODO: Create a function to initialize app
function init(generateMarkdown) {
    generateMarkdown = fs.writeToFile("./utils/readme.md", README, err => {
        if (err) {
            console.log(err);
        } else {
            return true;
        }
    });
}

// Function call to initialize app
init();