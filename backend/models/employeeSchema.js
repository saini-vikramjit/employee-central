const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const employeeSchema = new Schema({
    first_name: {
        type: mongoose.Schema.Types.String,
        required: true
    } ,
    last_name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    age: {
        type: mongoose.Schema.Types.Number,
        required: false
    },
    gender: {
        type: mongoose.Schema.Types.String,
        required: false
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    address:{
        street: {
            type: mongoose.Schema.Types.String,
            required: false
        },
        city: {
            type: mongoose.Schema.Types.String,
            required: false
        },
        state: {
            type: mongoose.Schema.Types.String,
            required: false
        }
    },
    phone: {
        type: mongoose.Schema.Types.Number,
        required: false
    },
    created_date: { 
        type: Date, 
        default: Date.now 
    }
});


const Employee = mongoose.model('employees', employeeSchema);


// Get Employees
module.exports.getEmployees = (callback) => {
    Employee.find(callback);
}


// Add Employee
module.exports.addEmployee = (employee, callback) => {
	Employee.create(employee, callback);
}


// Update Employee
module.exports.updateEmployee = (id, employee, options, callback) => {
	var query = {_id: id};
	var update = {
        email: employee.email,
        phone: employee.phone 
	}
	Employee.findOneAndUpdate(query, update, options, callback);
}


// Delete Employee
module.exports.removeEmployee = (id, callback) => {
	var query = {_id: id};
	Employee.remove(query, callback);
}