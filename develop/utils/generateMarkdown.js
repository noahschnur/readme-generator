const fs = require("fs");
const { resolve } = require("path");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/${badge})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [license](https://choosealicense.com/licenses/${license})`;
  } else {
    return "";
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
  return new Promise((resolve, reject) => {
    fs.generateMarkdown("./README.md", data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "README created",
      });
      
      return `# ${data.title}
    `;
    });
  });
  
  
}

module.exports = generateMarkdown;
