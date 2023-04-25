const inquirer = require('inquirer');


const questions = () => { 
    const askQuestions = () => {
      return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "add a role", "add an employee", "update an employee role", "Quit"]
          }
 
      ]).then((data) => {
        console.log(data);
        if (data.action !== "Quit") {
         
          return askQuestions();
        } else {
            return
        }
      });
    };
  
 
    return askQuestions();
  };
  
  questions();
 