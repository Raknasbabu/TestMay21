var express = require('express');
var router = express.Router();

const EmployeeDbConnection = require('../../config/mysqlConfig');

router.get('/', function (req, res, next) {

  EmployeeDbConnection.query('SELECT * FROM employee', (err, result) => {
    if (!err) {
      res.json(result);
    } else {
      res.json(err);
    }
  });

});

router.post('/', function (req, res, next) {

  EmployeeDbConnection.query('INSERT INTO employee SET ?', req.body, (err, result) => {

    if (!err) {
      res.json(result);
    } else {
      res.json(err);
    }
  });

});

router.get('/:id', function (req, res, next) {
  console.log(req.params);

  EmployeeDbConnection.query('SELECT * FROM employee WHERE employeeid=?', req.params.id, (err, result) => {
    if (!err) {
      res.json(result);
    } else {
      res.json(err);
    }
  });

});

router.put('/:id', function (req, res, next) {
  EmployeeDbConnection.query('UPDATE employee SET name=?, city=? WHERE employeeid=?',
    [req.body.name, req.body.city, req.body.phone, req.params.id], (err, result) => {
      if (!err) {
        res.json(result);
      } else {
        res.json(err);
      }
    });
});

router.delete('/:id', function (req, res, next) {
  EmployeeDbConnection.query("DELETE FROM employees WHERE employeeid = ?", req.params.id, (err, result) => {
    if (!err) {
      res.json(result);
    }
    else {
      res.json(err);
    }
  });
});

module.exports = router;
