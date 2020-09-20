function renderLicense(license){
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-blue.svg)`
  }
}

// function to generate markdown for README
module.exports = templateData => {
  // destructure page data by section
  const {...info } = templateData;

  return `
  # ${info.app}

  # Description
  * ${info.description}

  ## Table of Contents, 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests Instructions](#test)
  * [Questions](#questions)

  ## Installation
  * ${info.installation}

  ## Usage
  * ${info.usage}

  ## License
  ${renderLicense(info.license)}

  ## Contribution
  * ${info.contribution}

  ## Test Instructions
   * ${info.test}

  ## Questions
  * if you have any question please contact me.
  ** ${info.author}
  ** [email](${info.email})
  ** [GitHub](https://github.com/${info.github})

    `;
  };
