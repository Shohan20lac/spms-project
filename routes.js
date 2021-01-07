const express = require('express');
const router = express.Router();
const pool = require('./db.js');
const mysqlPassword = require('mysql-password');
const dateFormat = require('dateformat');

router.get('/testapi', (req, res) => {
  console.log(('hello'));
});

/* Gets semester details */
router.get('/api/get/semester-details', (req, res) => {
    pool.getConnection((err, connection) => {
    if (err) {
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'SELECT * FROM SEMESTER';

    // Use the connection
    connection.query(sql, (error, data) => {
  	  	if(error){
  	  		res.json({"status": 500, "error": error, "response": data});
  	  	} else {
          res.json({"status": 200, "message": 'success', "response": data});
  	  	}
    });


    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (err) {
      console.log('Error in release MySQL database connection. Error: ' + err);
      return;
    }

  });
});

/*  Input semester values */
router.post('/api/put/semesterdata', (req, res) => {
  console.log('season: ' + req.body.season);
  console.log('year: ' + req.body.year);
  console.log('startDate: ' + req.body.startDate);
  console.log('endDate: ' + req.body.endDate);
  const season = req.body.season.toString();
  const year = req.body.year;
  const startDate = dateFormat(req.body.startDate, "isoDate");
  const endDate = dateFormat(req.body.endDate, "isoDate");
  const semesterData = req.body;
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'INSERT INTO SEMESTER (season, year, startDate, endDate) VALUES (?, ?, ?, ?);';

    // Use the connection
    connection.query(sql, [season, year, startDate, endDate], (error, results, fields) => {
      console.dir(fields);
      if (error) {
        console.log("error ocurred",error);
        res.send({
          "code":400,
          "success":"Error Ocurred."
        })
      }
      else {
        console.log('The solution is: ', results);
        if (results.length >0){
            res.send({
              "code":200,
              "success":"Semester Data Entered."
            });
        }
        else {
          res.send({
            "code":204,
            "success":"Semester Data Entered."
          });
        }
      }
    });

    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (err) {
      console.log('Error in release MySQL database connection. Error: ' + err);
      return;
    }

  });
});

// Get School table values
router.get('/api/get/schools', (req, res) => {
    pool.getConnection((err, connection) => {
    if (err) {
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'SELECT * FROM SCHOOL';

    // Use the connection
    connection.query(sql, (error, data) => {
  	  	if(error){
  	  		res.json({"status": 500, "error": error, "response": data});
  	  	} else {
          res.json({"status": 200, "message": 'success', "response": data});
  	  	}
    });


    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (err) {
      console.log('Error in release MySQL database connection. Error: ' + err);
      return;
    }

  });
});

// Input school data
router.post('/api/put/schooldata', (req, res) => {
  console.log('schoolName: ' + req.body.schoolName);
  console.log('location: ' + req.body.location);
  console.log('deanInChargeName: ' + req.body.deanInChargeName);
  const schoolName = req.body.schoolName;
  const location = req.body.location;
  const deanInCharge = req.body.deanInChargeName;
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'INSERT INTO SCHOOL (schoolName, location, deanInCharge) VALUES (?, ?, ?);';

    // Use the connection
    connection.query(sql, [schoolName, location, deanInCharge], (error, results, fields) => {
      console.dir(fields);
      if (error) {
        console.log("error ocurred",error);
        res.send({
          "code":400,
          "success":"Error Ocurred."
        })
      }
      else {
        console.log('The solution is: ', results);
        if (results.length >0){
            res.send({
              "code":200,
              "success":"School Data Entered."
            });
        }
        else {
          res.send({
            "code":204,
            "success":"School Data Entered."
          });
        }
      }
    });

    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (err) {
      console.log('Error in release MySQL database connection. Error: ' + err);
      return;
    }

  });
});

// Get Department table values
router.get('/api/get/department', (req, res) => {
    pool.getConnection((err, connection) => {
    if (err) {
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'SELECT * FROM DEPARTMENT';

    // Use the connection
    connection.query(sql, (error, data) => {
  	  	if(error){
  	  		res.json({"status": 500, "error": error, "response": data});
  	  	} else {
          res.json({"status": 200, "message": 'success', "response": data});
  	  	}
    });


    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (err) {
      console.log('Error in release MySQL database connection. Error: ' + err);
      return;
    }

  });
});

router.post('/api/put/departmentdata', (req, res) => {
  console.log('deptID: ' + req.body.deptID);
  console.log('schoolName: ' + req.body.schoolName);
  console.log('location: ' + req.body.location);
  console.log('deptName: ' + req.body.deptName);
  console.log('deptHeadID: ' + req.body.deptHeadID);
  const deptID = req.body.deptID;
  const schoolName = req.body.schoolName;
  const location = req.body.location;
  const deptName = req.body.deptName;
  const deptHeadID = req.body.deptHeadID

  pool.getConnection((err, connection) => {
    if (err) {
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'INSERT INTO DEPARTMENT (deptID, schoolName, deptName, location, deptHeadID) VALUES (?, ?, ?, ?, ?);';

    // Use the connection
    connection.query(sql, [deptID, schoolName, location, deptName, deptHeadID], (error, results, fields) => {
      console.dir(fields);
      if (error) {
        console.log("error ocurred",error);
        res.send({
          "code":400,
          "success":"Error Ocurred."
        })
      }
      else {
        console.log('The solution is: ', results);
        if (results.length >0){
            res.send({
              "code":200,
              "success":"Department Data Entered."
            });
        }
        else {
          res.send({
            "code":204,
            "success":"Department Data Not Entered."
          });
        }
      }
    });

    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (err) {
      console.log('Error in release MySQL database connection. Error: ' + err);
      return;
    }

  });
});

router.post('/login', (req, res) => {
  console.log('username: ' + req.body.accountID);
  console.log('password: ' + req.body.password);
  const accountType = req.body.accountType;
  const accountID = req.body.accountID;
  const password = req.body.password;
  
  pool.getConnection((err, connection) => {
    if (err) {
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'SELECT * FROM ACCOUNT AS ac WHERE accountID = ?';

    // Use the connection
    connection.query(sql, [accountID, accountType], (error, results, fields) => {
      if (error) {
        console.log("error ocurred",error);
        res.send({
          "code":400,
          "success":"Error Ocurred."
        })
      }
      else {
        console.log('The solution is: ', results);
        if (results.length >0){
          console.log(results[0].password);
          if (results[0].password == password && results[0].accountType == accountType){
            
            res.send({
              "code":200,
              "success":"Login Sucessfull."
            });
          }
          else {
            res.send({
              "code":204,
              "success":"Username and password do not match."
            });
          }
        }
        else {
          res.send({
            "code":204,
            "success":"Username does not exits."
          });
        }
      }
    });

    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (err) {
      console.log('Error in release MySQL database connection. Error: ' + err);
      return;
    }

  });
});

module.exports = router;