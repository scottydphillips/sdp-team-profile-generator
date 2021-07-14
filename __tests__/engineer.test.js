const Engineer = require("../manager.js");

describe("Engineer", () => {
	describe("Prompt", () => {
		it("should prompt a question for the engineer's name that receives a value", () => {
			const banana = new Engineer(name);
			expect(banana in Engineer.name).toEqual(true);
		});
		it("should prompt a question for the engineer's email address that receives a value", () => {
			const pear = new Engineer(email);
			expect(pear in Engineer.email).toEqual(true);
		});
		it("should prompt a question for the engineer's GitHub user name that receives a value", () => {
			const apple = new Engineer(github);
			expect(apple in Engineer.github).toEqual(true);
		})
	})
})