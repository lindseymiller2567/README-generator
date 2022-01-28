// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage information."
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter the contribution guidelines."
    },
    {
        type: "input",
        name: "test",
        message: "Enter the test instructions."
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license is your application covered under?",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public", "Apache", "MIT", "Boost Software", "Unlicense"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// for development testing purposes only
const mockData = {
    username: 'lindsey',
    email: 'lindsey@email.com',
    title: 'Lindseys Project',
    description: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    installation: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    usage: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    contribution: 'Lindsey',
    test: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    license: "MIT"
}

// Function call to initialize app
init()
    //.then(answers => console.log(mockData))
    .then(answers => {
        return generateMarkdown(answers)
    })
    .then(markDown => {
        // console.log(markDown)
        fs.writeFile('./dist/README.md', markDown, err => {
            if (err) {
                reject(err)
            }
        })
        console.log("file created")
    })
    .catch(err => { console.log(err) })