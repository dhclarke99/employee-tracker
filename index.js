const inquirer = require('inquirer');
const mysql = require('mysql2');
// Create a MySQL connection
const connect = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'tomnjerry',
    database: 'company_db'
  });


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
 