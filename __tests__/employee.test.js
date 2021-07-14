const Employee = require("../employee.js");

describe("Employee", () => {
	describe("Prompt", () => {
		it("should prompt a question for the employee's name that receives a value", () => {
			const banana = new Employee(name);
			expect(banana in Employee.name).toEqual(true);
		});
		it("should prompt a question for the employee's email address that receives a value", () => {
			const pear = new Employee(email);
			expect(pear in Employee.email).toEqual(true);
		});
		it("should prompt a question for the employee's ID number that receives a value", () => {
			const apple = new Employee(id);
			expect(apple in Employee.officeNumber).toEqual(true);
		})
	})
})