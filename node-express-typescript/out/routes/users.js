"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users = express_1.Router();
/* GET users listing. */
users.get('/registration', function (req, res, next) {
    // res.send('respond with a resource');
    res.render('user/registration', { title: 'Visual Studio Code!' });
});
users.get('/registration/success', function (req, res, next) {
    // res.send('respond with a resource');
    res.render('user/success', { title: 'User Registration Successful!' });
});
exports.default = users;
//# sourceMappingURL=users.js.map