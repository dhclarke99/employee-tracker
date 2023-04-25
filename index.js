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
        } else if (data.action === "Add a department") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'departmentName',
                    message: 'Enter the Department name',
                    
                  }
                ]) .then((data) => {
                    let newDept = data.departmentName
                    functions.addDepartment(newDept);

                    return askQuestions();   
                });  
        } else if (data.action = "quit") {
                console.log("All Done!"); 
                return 
            }
        });
      }
      return askQuestions();
    };
  
  
  questions();
 