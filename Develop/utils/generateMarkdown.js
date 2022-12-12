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
  let genLic = ``;
  for (i=0; i < license.length; i++) {
    genLic+=`${renderLicenseBadge(license[i])}${renderLicenseLink(license[i])}  
  `
  } 
  return genLic;
};

// This function was created as an extra feature to offer the user an option
// it gives the user the option to add technical skill badges to their README file.
// If there no badge is chosen, it will return an empty string.
function chooseBadges(badges) {
  switch (badges) {
    case 'JavaScript': 
      return  '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)';
    case 'nodeJs':
      return '![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)';
    default:
      return ''
  }
};

// This function renders the chosen badge or badges into the Markdown. it will render an empty string if none is chosen.
function renderBadges(badges) {
  let genBadge = ``;
  for (i=0; i < badges.length; i++) {
    genBadge += `${chooseBadges(badges[i])}`
  }
  return genBadge;
};


// TODO: Create a function to generate markdown for README. THIS IS WHERE WE CREATE THE MARKDOWN TEMPLATE
function generateMarkdown(data) {
  return `# ${data.filename}

## Description
  
- ${data.projectDescription}

## License

${renderLicenseSection(data.license)}


## Table of Contents 

- [Title](#title)
- [Description](#description)
- [License](#license)
- [Instalation](#instalation)
- [Testing](#test)
- [How to Use and Contact](#how-to-use)
- [Technical Skills](#technical-skills)


## Instalation

- ${data.initGuide}


## Testing

- ${data.programTest}


## How to Contribute and Contact

- Constructive Comments are always welcome. You can e-mail me at ${data.emailInfo}. 
Alternativtely you can check my gitHub profile at https://github.com/${data.githubInfo}.  
Thank you for checking out my website.

## Technical Skills

${renderBadges(data.badges)}

Copyright (c) [2022] [${data.Username}]
`
}


module.exports = generateMarkdown;
