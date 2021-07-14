const Manager = require("../manager.js");

describe("Manager", () => {
	describe("Prompt", () => {
		it("should prompt a question for the manager's name that receives a value", () => {
			const banana = new Manager(name);
			expect(banana in Manager.name).toEqual(true);
		});
		it("should prompt a question for the manager's email address that receives a value", () => {
			const pear = new Manager(email);
			expect(pear in Manager.email).toEqual(true);
		});
		it("should prompt a question for the manager's office number that receives a value", () => {
			const apple = new Manager(officeNumber);
			expect(apple in Manager.officeNumber).toEqual(true);
		})
	})
})