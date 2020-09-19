const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/readme-template.js');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the application name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What technoloqies is the project created with? (Required, Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a language!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'uStroy',
      message: 'Provide a user story(Required)', 
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a user story!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'websiteUrl',
      message: 'What is the application website url? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the website!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project.',
    },
    {
      type: 'input',
      name: 'imageName',
      message: 'What is the path to an image of the application?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What platforms was the application tested on?'
    },
    {
      type: 'input',
      name: 'author',
      message: 'What is the name of the author? (Required)',
      validate: nameInput =>{
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the author!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username(Required)',
      validate: nameInput =>{
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter GitHub username!');
          return false;
        }
      }
    },
  ]);
};

const promptAcceptanceCriteria = acceptanceData => {

  // If there's no 'projects' array property, create one
if (!acceptanceData.criteria) {
  acceptanceData.criteria = [];
}

  console.log(`
=================
Add Acceptance Criteria
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'description',
      message: 'Provide the acceptance criteria (Required)',
      validate: nameInput =>{
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the acceptance critera!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddCriteria',
      message: 'Would you like to enter another criteria?',
      default: false
    }
  ])
  .then(acceptanceCriteria => {
    acceptanceData.criteria.push(acceptanceCriteria);
    if (acceptanceCriteria.confirmAddCriteria) {
      return promptAcceptanceCriteria(acceptanceData);
    } else {
      return acceptanceData;
    }
  });
};

promptUser()
  .then(promptAcceptanceCriteria)
  .then(acceptanceAnswers => {
    const pageHTML = generatePage(acceptanceAnswers);

  fs.writeFile('readme.md', pageHTML, err => {
    if (err) throw err;
    console.log('ReadMe complete! Check out readme.md to see the output!');
  });
});