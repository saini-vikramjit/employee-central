const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const Employee = require('./models/employeeSchema.js');

const app = express();
const port = 4000;
const hostname = '127.0.0.1';

const url = 'mongodb://localhost:27017/employee-central';

/*const loginedIn = function(req, res, next){
    console.log("Logged In");
    return next();
};*/

const employees = {
    first_name: 'John',
    last_name: 'Deo',
    age: 30
};

app.get('/', function(req,res){
    //res.json(employees);
    Employee.find({}).then(rec => {
        //res.json(eachOne);
        console.log(rec);
    })
    res.send('Hello');
});

app.listen(port,hostname,function(){
    
    //====MONGOOSE CONNECT===//
    mongoose.connect(url, function (err, db) {
        if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
        console.log('Connection established to', url);
        }
    });
    //==========================//

    console.log(`Listening on the port ${port}`);
});
