const mysql = require('mysql');

const mySQLconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database : 'employeedb'  
});



mySQLconnection.connect((err) => {
  if (err) throw err;
  console.log('MySQL DB Connected!');
});

module.exports = mySQLconnection;


