const inquirer = require('inquirer');
const Employee = require('./employee.js')

class Intern extends Employee {
	constructor(rank, name, id, email, school) {
		super(rank, name, id, email);
		this.rank = 'Intern';
		this.school = school;
	}
	getSchool() {
		return(this.school);
	}
	getRole() {
		return "Intern"
	}
}

	module.exports = Intern;