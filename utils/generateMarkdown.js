// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log("renderLicenseBadge: " + license)

  if (license == "No License") {
    return ""
  }
  return (
    `![License](<https://img.shields.io/badge/License-${license}-blue.svg>)`
  )
  // label-message-color, example: License-Apache 2.0-blue)
  // choices: ["Apache 2.0", "Boost Software License 1.0", "Mozilla Public License 2.0", "The MIT License", "No License"]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "No License") {
    return ""
  }
  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "No License") {
    return ""
  }
  return `## License
  Licensed under ${license}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command: 
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Contact me for any questions. You can send me an email at ${data.email}.
  
  Link to my GitHub: github.com/${data.username}
`;
}

module.exports = generateMarkdown;
