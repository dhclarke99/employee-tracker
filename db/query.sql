SELECT role.id, role.title, role.salary, department.name AS Department
FROM role
LEFT JOIN department ON role.department_id=department.id;

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id;