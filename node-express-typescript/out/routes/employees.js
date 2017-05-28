"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Employee = require("../models/Employee/Employee");
var employees = express_1.Router();
/* GET employees listing. */
employees.get('/registration', function (req, res, next) {
    // res.send('respond with a resource');
    res.render('employee/registration', { title: 'Visual Studio Code!' });
});
employees.post('/registration/submit', function (req, res) {
    var employee = new Employee(req.body);
    var error = employee.validateSync();
    // console.log(error);
    var message = '';
    if (error) {
        res.json({ success: 0, data: req.body });
    }
    else {
        employee.save(function (err) {
            if (err) {
                res.status(500).json(err);
            }
            else {
                message = 'Employee created successfully!';
                res.json({ success: 1, data: { user: req.body }, message: message });
            }
        });
    }
    // res.redirect('/employee/registration/success');
});
employees.get('/registration/success', function (req, res, next) {
    res.render('employee/success', { title: 'User Registration Successful!' });
});
employees.get('/', function (req, res, next) {
    console.log(Employee);
    var employee = new Employee();
    console.log(employee);
    // Employee.find({}, function(error ,data) {
    //   if (error) { 
    //       res.json({ success: 0, data: {}, message: 'no data found!'});
    //     // res.render('employee/list', { title: 'Employee list' , data: [], message: 'no data found!'});
    //   } else {
    //       res.json({ success: 1, data: data, message: 'data found!'});
    //     // res.render('employee/list', { title: 'Employee list' , data: data, message: 'data found!'});
    //   }
    // })
    employee.find({}, function (error, data) {
        if (error) {
            res.json({ success: 0, data: {}, message: 'no data found!' });
            // res.render('employee/list', { title: 'Employee list' , data: [], message: 'no data found!'});
        }
        else {
            res.json({ success: 1, data: data, message: 'data found!' });
            // res.render('employee/list', { title: 'Employee list' , data: data, message: 'data found!'});
        }
    });
});
exports.default = employees;
//# sourceMappingURL=employees.js.map