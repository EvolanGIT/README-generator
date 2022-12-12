// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License': 
      return  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'CC Zero License':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]';
    case 'Unilicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License': 
      return  '(https://opensource.org/licenses/MIT)';
    case 'CC Zero License':
      return '(http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Unilicense':
      return '(http://unlicense.org/)';
    default:
      return ''
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  for (i=0; i < license.length; i++) {
    `${renderLicenseBadge(data.license[i])}${renderLicenseLink(data.license[i])}`
  } 
}


// function renderBadgeIcon(badges) {
//   switch (badges) {
//     case 'JavaScript': 
//       return  '- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)';
//     case 'nodeJs':
//       return '- ![NodeJS]https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white';
//     default:
//       return ''
//   }
// }


// TODO: Create a function to generate markdown for README. THIS IS WHERE WE CREATE THE MARKDOWN TEMPLATE
function generateMarkdown(data) {
  return `# ${data.filename}

## Description

${data.projectDescription}

## Technical Skills




## Table of Contents 

- [Description](#description)
- [Instalation](#instalation)
- [License](#license)
- [Test](#test)
- [Contact](#contact)
- [How to Use](#how-to-use)
- [Testing](#testing)
- [How to Contribute](#how-to-contribute)


## License

${renderLicenseSection()}





Copyright (c) [2022] [${data.Username}]


## How to Use

${data.initGuide}

## Testing

-${data.programTest}


## How to Contribute

Constructive Comments are always welcome. You can e-mail me at ${data.emailInfo}. 
Alternativtely you can check my gitHub profile at https://github.com/${data.githubInfo} 
Thank you for checking out our website.`

}


module.exports = generateMarkdown;
