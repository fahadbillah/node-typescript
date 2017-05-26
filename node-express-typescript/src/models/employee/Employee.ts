import * as mongoose from 'mongoose';
import IEmployee = require("./IEmployee");

interface IEmployeeModel extends IEmployee, mongoose.Document { }

var EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true, unique: true}
});

var Employee = mongoose.model<IEmployeeModel>('Employee', EmployeeSchema);

export = Employee;