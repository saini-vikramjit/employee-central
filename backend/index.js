const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const Employee = require('./models/employeeSchema.js');

const app = express();
const port = 4000;
const hostname = '127.0.0.1';

// Connect to Mongoose
const url = 'mongodb://localhost:27017/employee-central';
mongoose.connect(url, function (err, db) {
    if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
    console.log('Connection established to', url);
    }
});

app.use(bodyParser.json());

/*const loginedIn = function(req, res, next){
    console.log("Logged In");
    return next();
};*/

/*const employees = {
    first_name: 'John',
    last_name: 'Deo',
    age: 30
};*/

app.get('/', function(req,res){
    res.send('Hello');
});

// Get Employees list
app.get('/employee/list', function(req,res){
    Employee.getEmployees((err, employees) => {
		if(err){
			throw err;
		}
		res.json(employees);
	});
});


// Add Employee
app.post('/employee/add', function(req, res){
    let employee = req.body;
    Employee.addEmployee(employee, (err, employee) => {
        if(err){
            throw err;
        }
        res.json(employee);
    });
});


// Update Employee
app.put('/employee/update/:_id', function(req, res){
    let employeeId = req.params._id,
        employee = req.body;
    Employee.updateEmployee(employeeId,employee, (err, employee) => {
        if(err){
            throw err;
        }
        res.json(employee);
    });
});


// Delete Employee
app.delete('/employee/delete/:_id', function(req, res){
    let employeeId = req.params._id;
    Employee.removeEmployee(employeeId, (err, employee) => {
        if(err){
            throw err;
        }
        res.json(employee);
    });
})


app.listen(port,hostname,function(){
    console.log(`Listening on the port ${port}`);
});


