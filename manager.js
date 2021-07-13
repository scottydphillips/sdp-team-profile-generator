const inquirer = require('inquirer');
const Employee = require('./employee.js');

class Manager extends Employee {
	constructor(rank, name, id, email, officeNumber) {
		super(rank, name, id, email);
		this.rank = 'Manager';
		this.officeNumber = officeNumber;
	}
getRole() {
		return "Manager"
	}
	getOffice() {
		return this.officeNumber
	}
}

module.exports = Manager