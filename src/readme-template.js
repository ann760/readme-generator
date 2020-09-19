const generateURL = websiteURL => {
  if (!websiteURL) {
    return '';
  }

  return `
  ## Website
  * [${info.app}](${websiteUrl})
  `;
};

const generateImg = imgName => {
  if (!imgName) {
    return '';
  }

  return `
  ![img](./assets/images/${imgName})
  `;
};

const generateTest = test => {
  if (!test) {
    return '';
  }

  return `
  ## Tested on the following browser
    Devices and Browsers used:
    * 
  `;
};

const generatefuture = future => {
  if (!future) {
    return '';
  }

  return `
  ## Future Enhancement
  * 
  `;
};


module.exports = templateData => {
  // destructure page data by section
  const { img, enhansment, test, future, ...info } = templateData;

  return `
  # Application Name
  * ${info.name}

  # Application description
  * ${info.description}

  ## Built With
  * ${info.languages}

  ## User Story
  * ${info.uStroy}

  ## Acceptance Criteria
  * ${info.uStroy}

  ## Author
  * [${info.author}](https://github.com/${info.github})

    `;
  };