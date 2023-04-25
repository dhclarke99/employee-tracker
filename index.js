const inquirer = require('inquirer');

const functions = require('./lib/functions');
// Create a MySQL connection




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
       if (data.action === "View all departments") {
            functions.viewDepartments();
            return askQuestions();   
        } else if (data.action === "View all roles") {
            functions.viewRoles();
            return askQuestions();   
        }  else if (data.action === "View all employees") {
            functions.viewEmployees();
            return askQuestions();   
        }
      });
    };
  
 
    return askQuestions();
  };
  
  questions();
 