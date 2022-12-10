// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License': 
      return  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'CC Zero License':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
    case 'Unilicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
    case 'none':
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License': 
      return  '';
    case 'CC Zero License':
      return '';
    case 'Unilicense':
      return '';
    case 'none':
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README. THIS IS WHERE WE CREATE THE MARKDOWN TEMPLATE
function generateMarkdown(data) {
  return `# ${data.filename}

## Description

- ${data.projectDescription}

## Technical Skills

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


## Table of Contents 

- [Description](#description)
- [Instalation](#instalation)
- [License](#license)
- [Test](#test)
- [Contact](#contact)
- [How to Contribute](#how-to-contribute)



## License

- ${renderLicenseBadge}



Copyright (c) [2022] [${data.Username}]


## Features

- 
- 

## How to Contribute

Constructive Comments are always welcome. You can e-mail me ${data.emailInfo}. Thank you for checking out our website.`

}


module.exports = generateMarkdown;
