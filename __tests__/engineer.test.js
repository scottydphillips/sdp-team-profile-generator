const Engineer = require("../manager.js");

describe("Engineer", () => {
	describe("Prompt", () => {
		it("can instantiate Engineer instance", () => {
			const banana = new Engineer()
			expect(typeof(banana)).toBe('object');
		});
		it("can set a name via Constructor", () => {
			const name = "Jenny";
			const pear = new Engineer(8675309, name);
			expect(pear.getName()).toBe(name);
		});
	})
})