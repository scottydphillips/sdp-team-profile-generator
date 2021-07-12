const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require('./manager.js')
const Engineer = require('./engineer.js')
const Intern = require('./intern.js')

// const managerCard = document.getElementbyId("manager-card")
// const engineerCard = document.getElementbyId("engineer-card")
// const internCard = document.getElementById("intern-card")

class Employee {
	constructor(rank, name, id, email) {
		this.rank = rank;
		this.name = name;
		this.id = id;
		this.email = email
	}
}

const addEmployee = {
	name: "addEmployee",
	type: "list",
	message: "Which type of team member would you like to add?",
	choices: ["Engineer", "Intern", "I am done adding team members"]
}

inquirer.prompt(managerQuestions)
	.then((data) => console.log(data)
	.then(inquirer.prompt(addEmployee)
	.then((res) => console.log(res) = () => {
		if(addEmployee.data === addEmployee.choices[0]) {
			inquirer.prompt(engineerQuestions);
		} else if (addEmployee.data === addEmployee.choices[1]) {
			inquirer.prompt(internQuestions);
		} else {
			const generateHTML =
			`
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
	</div>
	<div class="container-fluid">
		<div class="card" id="manager-card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Manager</h5>
				<p class="card-text">${data.managerName}</p>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">${data.managerId}</li>
				<li class="list-group-item">${data.managerEmail}</li>
				<li class="list-group-item">${data.managerOffice}</li>
			</ul>
		</div>
		<div class="card" id="engineer-card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Engineer</h5>
				<p class="card-text">${res.engineerName}</p>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">${res.engineerId}</li>
				<li class="list-group-item">${res.engineerEmail}</li>
				<li class="list-group-item">${res.engineerGithub}</li>
			</ul>
		</div>
		<div class="card" id="intern-card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Intern</h5>
				<p class="card-text">${res.internName}</p>
			</div>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">${res.internId}</li>
				<li class="list-group-item">${res.internEmail}</li>
				<li class="list-group-item">${res.internSchool}</li>
			</ul>
		</div>
	</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script src="script.js"></script>
</html>
			`
			fs.writeFile("index.html", generateHTML, err => {
				if(err) {
					console.error(err)
					return;
				}
				console.log("HTML generated successfully")
			})
		}
	})
)
)

module.exports = Employee