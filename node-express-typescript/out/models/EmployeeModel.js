"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var EmployeeSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
var EmployeeModel = mongoose.model('EmployeeModel', EmployeeSchema);
exports.default = EmployeeModel;
//# sourceMappingURL=EmployeeModel.js.map