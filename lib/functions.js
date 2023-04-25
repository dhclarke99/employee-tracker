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

  


  module.exports = {
    viewDepartments,
  };
