const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const managerQuestions = [{
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
]
const addEmployee = {
	name: "addEmployee",
	type: "list",
	message: "Which type of team member would you like to add?",
	choices: ["Engineer", "Intern", "I am done adding team members"]
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
},
]

inquirer.prompt(managerQuestions) => {
	.then((inquirer.prompt(addEmployee)) => {
		.then((data) => {		
		if(addEmployee.data === addEmployee.choices[0]) {
			inquirer.prompt(engineerQuestions);
		} else if (addEmployee.data === addEmployee.choices[1]) {
			inquirer.prompt(internQuestions);
		} else {
			fs.writeFile("generate.html", data) =>
			`
			HTML BOILERPLATE
			`
		}
		})
	})
}