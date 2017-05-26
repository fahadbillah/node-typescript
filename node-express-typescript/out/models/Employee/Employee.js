"use strict";
var mongoose = require("mongoose");
var EmployeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
//# sourceMappingURL=Employee.js.map