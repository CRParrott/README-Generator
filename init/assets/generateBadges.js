function generateBadges(userResponses) {

    let draftContents = `## Table of Contents`;

    if (userResponses.installation !== '') { draftContents += `
    * [Installation](#installation)` };

    if (userResponses.usage !== '') { draftContents += `
    * [Usage](#usage)` };

    if (userResponses.contributing !== '') { draftContents += `
    * [Contributing](#contributing)` };

    if (userResponses.tests !== '') { draftContents += `
    * [Tests](#tests)` };



    let draftBadges =
    `# ${userResponses.title}
    
    ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) 
    ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
    
    ## Description

    *A short description of the project:*
    
    ${userResponses.description}`

    draftBadges += draftContents;

    draftBadges += 
    `* [License](#license)`;


    if (userResponses.installation !== '') {
        draftBadges +=
        `## Installation

        *Steps required to install project and how to get the development enviroment running:*

        ${userResponses.installation}`
    };

    if (userResponses.usage !== '') {
        draftBadges +=

        `## Usage
        
        *Instructions and examples for use:*
        ${userResponses.usage}`
    };

    if (userResponses.contributing !== '') {
        `## Contributing
        
        *If you would like to contribute it, you can follow these guidelines for how to do so.*
        
        ${userResponses.contributing}`
    };

    if (userResponses.tests !== '') {

        draftBadges +=
        `## Tests
  
        *Tests for application and how to run them:*
        
        ${userResponses.tests}`
    };

    draftBadges +=
    `## License
    
    ${userResponses.license}`;

    return draftBadges;

}

module.exports = generateBadges;