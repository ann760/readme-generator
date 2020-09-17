const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/readme-template.js');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the project? (Required)'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What technoloqies is the project created with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a user story'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the application website url?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the path to an image of the application?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What platforms was the application tested on?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'Who created the application? (Required)'
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username'
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
      message: 'Provide the acceptance criteria'
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
//.then(answers => console.log(answers))
.then(promptAcceptanceCriteria)
.then(acceptanceAnswers => console.log(acceptanceAnswers));

// fs.writeFile('readme.md', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('ReadMe complete! Check out readme.md to see the output!');
// });