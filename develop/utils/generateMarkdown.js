// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return "";
  } else {
    return `![Badge](https://img.shields.io/badge/${badge})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "";
  } else {
    return `\n* [license](https://shields.io/category/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return "";
  } else {
    return `[License](#license)`;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
# ${data.title}

## Description

${data.description}

## License

![Alt Text](https://img.shields.io/badge/License-${data.license}-Green)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contribute}

## Tests

${data.tests}

## Questions

${data.questions}
`;
}

renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();

module.exports = generateMarkdown;