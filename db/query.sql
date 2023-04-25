-- query to display all departments
SELECT * FROM department;

-- query to display all roles
SELECT role.id, role.title, role.salary, department.name AS Department
FROM role
LEFT JOIN department ON role.department_id=department.id;

-- query to display all employees
SELECT e.id, e.first_name, e.last_name, r.title, d.name AS Department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee e
LEFT JOIN role r ON e.role_id = r.id
LEFT JOIN department d ON r.department_id = d.id
LEFT JOIN employee m ON e.manager_id = m.id;