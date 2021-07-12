const inquirer = require('inquirer');
const Employee = require('./index.js');

class Engineer extends Employee {
	constructor(github) {
	super(rank, name, id, email)
	this.rank = 'Engineer';
	this.github = github;
	}
}

const engineerQuestions = [
	{
		name: "engineerName",
		type: "input",
		message: "What is the engineer's name?"
	},
	{
		name: "engineerId",
		type: "input",
		message: "What is the engineer's employee ID?"
	},
	{
		name: "engineerEmail",
		type: "input",
		message: "What is the engineer's email?"
	},
	{
		name: "engineerGithub",
		type: "input",
		message: "What is the engineer's GitHub username?"
	},
	]

	inquirer.prompt(engineerQuestions);