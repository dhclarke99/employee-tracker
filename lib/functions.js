const mysql = require('mysql2');
const connect = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'tomnjerry',
    database: 'company_db'
  });

const viewDepartments = () => {
    connect.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      console.table(res);
    });
  };

  const viewRoles = () => {
    connect.query("SELECT role.id, role.title, role.salary, department.name AS Department FROM role LEFT JOIN department ON role.department_id=department.id", (err, res) => {
      if (err) throw err;
      console.table(res);
    });
  };

  const viewEmployees = () => {
    connect.query("SELECT e.id, e.first_name, e.last_name, r.title, d.name AS Department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employee m ON e.manager_id = m.id", (err, res) => {
      if (err) throw err;
      console.table(res);
    });
  };

  const addDepartment = (newDept) => {
    connect.query("INSERT INTO department (name) VALUES (?)", newDept, (err, res) => {
      if (err) throw err;
      console.log("Department Added");
    });
  };

  const addRole = (data) => {
    const choices = ["Business Operations", "Sales", "Finance", "HR"];
        const index = choices.indexOf(data.roleDept) + 1;
        console.log(index);
    let name = data.roleName;
    let salary = parseInt(data.roleSalary, 10);
    console.log(salary);
    let realInd = parseInt(index, 10);
    console.log(realInd);
    
    

    connect.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [name, salary, realInd], (err, res) => {
      if (err) throw err;
      console.log("role Added");
    });
  };

  const grabRoles = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT name FROM department", (err, res) => {
        if (err) {
          reject(err);
        } else {
          const choices = res.map(department => department.name);
          resolve(choices);
        }
      });
    });
  }






  module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    grabRoles,
  };
