INSERT INTO department (name)
VALUES ("Business Operations"),
       ("Sales"),
       ("Finance"),
       ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("VP of Operations", 180000, 1),
       ("Operations Manager", 120000, 1),
       ("Operations Associate", 90000, 1),
       ("Regional VP of Sales", 200000, 2),
       ("Account Executive", 100000, 2),
       ("Chief Financial Officer", 300000, 3),
       ("Recruiter", 75000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Johnson", 1),
       ("Carly", "Kim", 2),
       ("Saquon", "Barkley", 6),
       ("Stephen", "Curry", 4);


