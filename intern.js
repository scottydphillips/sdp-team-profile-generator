const inquirer = require('inquirer');
const Employee = require('./index.js')

class Intern extends Employee {
	constructor(school) {
		super(rank, name, id, email);
		this.rank = 'Intern';
		this.school = school;
	}
}

const internQuestions = [
	{
		name: "internName",
		type: "input",
		message: "What is the intern's name?"
	},
	{
		name: "internId",
		type: "input",
		message: "What is the intern's employee ID?"
	},
	{
		name: "internEmail",
		type: "input",
		message: "What is the intern's email?"
	},
	{
		name: "internSchool",
		type: "input",
		message: "Where does the intern go to school?"
	}
	]

	inquirer.prompt(internQuestions);