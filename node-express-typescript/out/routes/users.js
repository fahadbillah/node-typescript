"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Employee = require("../models/Employee/Employee");
var users = express_1.Router();
/* GET users listing. */
users.get('/registration', function (req, res, next) {
    // res.send('respond with a resource');
    res.render('employee/registration', { title: 'Visual Studio Code!' });
});
users.post('/registration/submit', function (req, res) {
    var employee = new Employee(req.body);
    var error = employee.validateSync();
    // console.log(error);
    if (error) {
        res.json({ success: 0, data: req.body });
    }
    else {
        res.json({ success: 1, data: { user: req.body } });
    }
    // res.redirect('/employee/registration/success');
});
users.get('/registration/success', function (req, res, next) {
    res.render('employee/success', { title: 'User Registration Successful!' });
});
exports.default = users;
//# sourceMappingURL=users.js.map