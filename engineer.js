const inquirer = require('inquirer');
const Employee = require('./employee.js');

class Engineer extends Employee {
	constructor(rank, name, id, email, github) {
	super(rank, name, id, email)
	this.rank = 'Engineer';
	this.github = github;
	}
	getGitHub() {
		return(this.github);
	}
	getRole() {
		return "Engineer"
	}
}

	module.exports = Engineer;