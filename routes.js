const express = require('express');
const router = express.Router();
const pool = require('./db.js');
const mysqlPassword = require('mysql-password');

router.get('/testapi', (req, res) => {
  console.log(('hello'));
});

/* Gets account types from ACCOUNT_TYPES */
router.get('/api/get/account-types', (req, res) => {
    pool.getConnection((err, connection) => {
    if (err) {
      // not connected!
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'SELECT * FROM ACCOUNT_TYPES';

    // Use the connection
    connection.query(sql, (error, data) => {
  	  	if(error){
  	  		res.json({"status": 500, "error": error, "response": data});
  	  		//If there is error, we send the error in the error section with 500 status
  	  	} else {
    			//res.json({"status": 200, "error": 'No Error', "response": results});
    			//If there is no error, all is good and response is 200OK.
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

/* Gets account from ACCOUNT */
router.get('/api/get/account', (req, res) => {
    pool.getConnection((err, connection) => {
    if (err) {
      // not connected!
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'SELECT * FROM ACCOUNT';

    // Use the connection
    connection.query(sql, (error, data) => {
  	  	if(error){
  	  		res.json({"status": 500, "error": error, "response": data});
  	  		//If there is error, we send the error in the error section with 500 status
  	  	} else {
    			//res.json({"status": 200, "error": 'No Error', "response": results});
    			//If there is no error, all is good and response is 200OK.
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

/* Gets admin details from ADMIN */
router.get('/api/get/admin-details', (req, res) => {
    pool.getConnection((err, connection) => {
    if (err) {
      // not connected!
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'SELECT * FROM ADMIN';

    // Use the connection
    connection.query(sql, (error, data) => {
  	  	if(error){
  	  		res.json({"status": 500, "error": error, "response": data});
  	  		//If there is error, we send the error in the error section with 500 status
  	  	} else {
    			//res.json({"status": 200, "error": 'No Error', "response": results});
    			//If there is no error, all is good and response is 200OK.
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

/* Gets admin tasks from ADMIN_TASKS*/
router.get('/api/get/admin-tasks', (req, res) => {
    pool.getConnection((err, connection) => {
    if (err) {
      // not connected!
      console.log('API couldn\'t connect to Database: ' + err);
      return;
    }

    let sql = 'SELECT * FROM ADMIN_TASKS';

    // Use the connection
    connection.query(sql, (error, data) => {
  	  	if(error){
  	  		res.json({"status": 500, "error": error, "response": data});
  	  		//If there is error, we send the error in the error section with 500 status
  	  	} else {
    			//res.json({"status": 200, "error": 'No Error', "response": results});
    			//If there is no error, all is good and response is 200OK.
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

router.post('/login', (req, res) => {
  console.log('username: ' + req.body.accountID);
  console.log('password: ' + req.body.password);
  const accountType = req.body.accountType;
  const accountID = req.body.accountID;
  const password = req.body.password;
  
  pool.getConnection((err, connection) => {
    if (err) {
      // not connected!
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
          //console.log('password(AFTER AUTH):', sha1(results[0].salt + sha1(results[0].salt + sha1(password))));
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