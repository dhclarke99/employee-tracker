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
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"]
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
                    message: 'What is the department name?',
                    
                  }
                ]) .then((data) => {
                    let newDept = data.departmentName
                    functions.addDepartment(newDept);

                    return askQuestions();   
                });  
        } else if (data.action === "Add a role") {
            return functions.grabDepartments().then(departmentNames => {
            return inquirer.prompt([
                
                {
                    type: 'input',
                    name: 'roleName',
                    message: 'What is the name of the role?',
                    
                  },
                {
                    type: 'input',
                    name: 'roleSalary',
                    message: 'What is the salary of the role?',
                }, 
                {
                    type: 'list',
                    name: 'roleDept',
                    message: 'What department does the role belong to?',
                    choices: departmentNames,
                
                } 
                ]) .then((data) => {
                   
                    functions.addRole(data, departmentNames);


                    return askQuestions();   
                });  
            });
        } else if (data.action === "Add an employee") {
            return Promise.all([functions.grabRoles(), functions.grabManagers()]).then(([roleNames, managerNames]) => {
            return inquirer.prompt([
                
                {
                    type: 'input',
                    name: 'roleName',
                    message: 'What is the employees first name?',
                    
                  },
                {
                    type: 'input',
                    name: 'roleSalary',
                    message: 'What is the employees last name?',
                }, 
                {
                    type: 'list',
                    name: 'roleDept',
                    message: 'What is the employees role?',
                    choices: roleNames,
                
                }, 
                {
                    type: 'list',
                    name: 'roleDept',
                    message: 'Who is the employees manager?',
                    choices: managerNames,
                
                }
                ]) .then((data) => {
                    
                    functions.addEmployee(data, roleNames, managerNames);


                    return askQuestions();   
                });  
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
 