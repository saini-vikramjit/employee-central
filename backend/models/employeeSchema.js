const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const employeeSchema = new Schema({
    first_name: {
        type: mongoose.Schema.Types.String,
        required: true,
    } ,
    last_name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    age: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    gender: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
})
const Employee = mongoose.model('employees', employeeSchema);
module.exports = Employee;