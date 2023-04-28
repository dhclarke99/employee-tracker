# Employee Tracker

## Description
This project is a terminal application that will update an sql database of company data based on user answers to various prompts. The purpose behind this application is to build a dynamic database that can be managed and updated by a user/company to keep track of various departments, roles and employees within a company.

Building this project provided experience with using mysql and inquirer.js together to manage databases on the backend. 



## Installation

To use this application you must have VS Code or some other source code editor installed on your local system. You must also have node js installed as well as mysql2.

## Usage

[Walkthrough Video](https://drive.google.com/file/d/1Uvl-9vFkKahb1EuASnsvQw529qeIt79O/view)

Clone this repo to your local system and open the repo in VS code. First you will need to create the sql database and input the seed data. To do this open your schema.sql file in the integrated terminal and run the following commands:
```mysql -uroot -p```

You will then need to login to mysql using your password and run the following commands:

```SOURCE schema.sql;```

```SOURCE seeds.sql;```


Then, click on the index.js file and open it in your integrated terminal. Run the command "Node Index.js" and a series of prompts will appear. Use your arrow keys and enter button to navigate the prompts. Select the "quit" option to close the application.

![Terminal View](./images/Screen%20Shot%202023-04-27%20at%2010.07.11%20PM.png)
