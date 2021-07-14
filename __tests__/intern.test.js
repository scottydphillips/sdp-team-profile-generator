const Intern = require("../intern.js");

describe("Intern", () => {
	describe("Prompt", () => {
		it("should prompt a question for the intern's name that receives a value", () => {
			const banana = new Intern(name);
			expect(banana in Intern.name).toEqual(true);
		});
		it("should prompt a question for the intern's email address that receives a value", () => {
			const pear = new Intern(email);
			expect(pear in manager.email).toEqual(true);
		});
		it("should prompt a question for the intern's school that receives a value", () => {
			const apple = new Intern(school);
			expect(apple in Intern.school).toEqual(true);
		})
	})
})