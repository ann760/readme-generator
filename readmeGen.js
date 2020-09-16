const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;


fs.writeFile('readme.md', generatePage(name, github), err => {
  if (err) throw err;

  console.log('ReadMe complete! Check out readme.md to see the output!');
});