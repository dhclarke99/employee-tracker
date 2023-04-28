const mysql = require('mysql2');
const ctable = require('console.table');
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

      console.table("Departments", res);
    });
  };

  const viewRoles = () => {
    connect.query("SELECT role.id, role.title, role.salary, department.name AS Department FROM role LEFT JOIN department ON role.department_id=department.id", (err, res) => {
      if (err) throw err;
      console.table("Roles", res);
    });
  };

  const viewEmployees = () => {
    connect.query("SELECT e.id, e.first_name, e.last_name, r.title, d.name AS Department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employee m ON e.manager_id = m.id", (err, res) => {
      if (err) throw err;
      console.table("employees", res);
    });
  };

  const addDepartment = (newDept) => {
    connect.query("INSERT INTO department (name) VALUES (?)", newDept, (err, res) => {
      if (err) throw err;
      console.log("Department Added");
    });
  };

  const addRole = (data, departmentNames) => {
   
    
    const choice = data.roleDept;
        const index = departmentNames.indexOf(choice);
       
    let name = data.roleName;
    let salary = parseInt(data.roleSalary, 10);
    let realInd = parseInt(index, 10);
    let deptId = realInd + 1;

    connect.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [name, salary, deptId], (err, res) => {
      if (err) throw err;
      console.log("role Added");
    });
  };

  const grabDepartments = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT name FROM department", (err, res) => {
        if (err) {
          reject(err);
        } else {
          const departmentNames = res.map(department => department.name);
          resolve (departmentNames);
          
        }
      });
    });
  }
  const grabRoles = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT title FROM role", (err, res) => {
        if (err) {
          reject(err);
        } else {
          const roleNames = res.map(role => role.title);
          console.log(roleNames);
          resolve (roleNames);
          
        }
      });
    });
  }

  const grabManager = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT first_name FROM employee WHERE ", (err, res) => {
        if (err) {
          reject(err);
        } else {
          const managerFirst = res.map(employee => employee.first_name);
          const managerLast = res.map(employee => employee.last_name);
          const managerNames = concat(managerFirst, managerLast)

          resolve (managerNames);
          
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
    grabDepartments,
    grabRoles,
    grabManager,
  };
