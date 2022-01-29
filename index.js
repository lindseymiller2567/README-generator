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
        message: "What command should be run to install dependencies?"
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
        type: "list", // list allows user to only pick one license
        name: "license",
        message: "What license is your application covered under?",
        choices: ["Apache_2.0", "Boost_Software_License_1.0", "Mozilla_Public_License_2.0", "The_MIT_License", "No License"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err)

        console.log("READ ME file created! Check dist folder.")
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// for development testing purposes only
const mockData = {
    username: 'lindseymiller2567',
    email: 'lindseymiller2567@email.com',
    title: "Lindsey's Awesome Project",
    description: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    installation: 'npm install',
    usage: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    contribution: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    test: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    license: "Apache 2.0"
}

// Function call to initialize app
init()
    .then(answers => {
        return generateMarkdown(answers)
    })
    .then(markDown => {
        // console.log(markDown)
        writeToFile('./dist/README.md', markDown)
    })
    .catch(err => { console.log(err) })