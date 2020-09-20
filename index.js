const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'app',
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
      type: 'input',
      name: 'installation',
      message: 'Please provide the installation instruction. (Required)', 
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the installation instruction!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide the usage information. (Required)', 
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter usage information!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'lincense',
      message: 'Please provide lincense? (Required)',
      choices: ['MIT', 'Apache 2.0', 'GPL', 'None'],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please select a lincense!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide the contribution guidelines. (Required)', 
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the testing instructions? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'author',
      message: 'What is the name of the author? (Required)',
      validate: nameInput => {
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
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email(Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter email!');
          return false;
        }
      }
    },
  ]);
};

//  const promptAcceptanceCriteria = acceptanceData => {

// // If there's no 'projects' array property, create one
//  if (!acceptanceData.criteria) {
//    acceptanceData.criteria = [];
//  }

//   console.log(`
//  =================
//  Add Acceptance Criteria
//  =================
//  `);
//    return inquirer.prompt([
//      {
//        type: 'input',
//        name: 'description',
//        message: 'Provide the acceptance criteria (Required)',
//        validate: nameInput => {
//          if (nameInput) {
//            return true;
//         } else {
//            console.log('Please enter the acceptance critera!');
//           return false;
//          }
//        }
//      },
//      {
//        type: 'confirm',
//        name: 'confirmAddCriteria',
//        message: 'Would you like to enter another criteria?',
//        default: false
//      }
//    ])
//    .then(acceptanceCriteria => {
//      acceptanceData.criteria.push(acceptanceCriteria);
//      if (acceptanceCriteria.confirmAddCriteria) {
//        return promptAcceptanceCriteria(acceptanceData);
//      } else {
//        return acceptanceData;
//     }
//   });
//  };

promptUser()
  //.then(promptAcceptanceCriteria)
  .then(answers => {
    const pageHTML = generatePage(answers);

  fs.writeFile('readme.md', pageHTML, err => {
    if (err) throw err;
    console.log('ReadMe complete! Check out readme.md to see the output!');
  });
});