const inquirer = require('inquirer');
const Employee = require('./index.js');

class Manager extends Employee {
	constructor(office) {
		super(rank, name, id, email);
		this.rank = 'Manager';
		this.office = office;
	}
}

const managerQuestions = [
	{
	name: "managerName",
	type: "input",
	message: "What is the team manager's name?"
},
{
	name: "managerId",
	type: "input",
	message: "What is the team manager's employee ID?"
},
{
	name: "managerEmail",
	type: "input",
	message: "What is the team manager's email?"
},
{
	name: "managerOffice",
	type: "input",
	message: "What is the manager's office number?"
}
]

inquirer.prompt(managerQuestions);