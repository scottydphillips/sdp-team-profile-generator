const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./employee.js");
const Manager = require('./manager.js');
const Engineer = require('./engineer.js');
const Intern = require('./intern.js');

const teamArray= [];

// const managerCard = document.getElementbyId("manager-card")
// const engineerCard = document.getElementbyId("engineer-card")
// const internCard = document.getElementById("intern-card")

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

const addEmployee = [{
	name: "addEmployee",
	type: "list",
	message: "Which type of team member would you like to add?",
	choices: ["Engineer", "Intern", "I am done adding team members"]
}]

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
		}
		]

createManager = () => {
	inquirer.prompt(managerQuestions)
	.then((data) => console.log(data),
	teamArray.push(data),
	console.log(teamArray))
	.then(moreEmployees())
}

createEngineer = () => {
	inquirer.prompt(engineerQuestions)
	.then((data) => console.log(data),
	teamArray.push(data),
	console.log(teamArray))
	.then(moreEmployees());
}

createIntern = () => {
	inquirer.prompt(internQuestions)
	.then((data) => console.log(data),
	teamArray.push(data),
	console.log(teamArray))
	.then(moreEmployees());
}

moreEmployees = () => {
	inquirer.prompt(addEmployee)
	.then((data) => { console.log(data) 
	if('Engineer' === data.addEmployee) {
		createEngineer();
	} else if ('Intern' === data.addEmployee) {
		createIntern();
	} else {
		console.log("banana")
	}
	})
}

createManager();

// promptSequence = () => {
// 	createManager();
	
// }

const starterHTML = `
			<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Team Profile</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link rel="stylesheet" href="./html-css/style.css">
</head>
<body>
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h1 class="display-4">My Team</h1>
		</div>
	</div>`

startHTML = () => {	
	fs.writeFile("index.html", starterHTML, err => {
		if(err) {
		console.error(err)
		return;
		}
		console.log("HTML generated successfully")
	})
}
	
const managerCard =	
	`<div class="container-fluid">
		<div class="card" id="manager-card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Manager</h5>
				<p class="card-text">${Manager.name}</p>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">${Manager.id}</li>
				<a href="mailto:${Manager.email}>
					<li class="list-group-item">${Manager.email}</li>
				</a>
					<li class="list-group-item">${Manager.office}</li>
			</ul>
		</div>`

const engineerCard =
		`<div class="card" id="engineer-card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Engineer</h5>
				<p class="card-text">${Engineer.name}</p>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">${Engineer.id}</li>
				<a href="mailto:${Engineer.email}"
					<li class="list-group-item">${Engineer.email}</li>
				</a>
				<a href="https://www.github.com/${Engineer.github}>
					<li class="list-group-item">${Engineer.github}</li>
				</a>
			</ul>
		</div>`

const internCard =		
		`<div class="card" id="intern-card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Intern</h5>
				<p class="card-text">${Intern.name}</p>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">${Intern.id}</li>
				<a href="mailto:${Intern.email}>
					<li class="list-group-item">${Intern.email}</li>
				</a>
				<li class="list-group-item">${Intern.school}</li>
			</ul>
		</div>
	</div>`

const HTMLtag =	
`</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script src="script.js"></script>
</html>
`			
fs.appendFile('index.html', HTMLtag, err => {
	if(err) {
		console.error(err)
	}
})
