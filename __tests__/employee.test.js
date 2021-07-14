const Employee = require("../employee.js");

describe("Employee", () => {
	describe("Prompt", () => {
		it("can instantiate Employee instance", () => {
			const banana = new Employee()
			expect(typeof(banana)).toBe('object');
		});
		it("can set a name via Constructor", () => {
			const name = "Jenny";
			const pear = new Employee(8675309, name);
			expect(pear.getName()).toBe(name);
		});
		it("can set email via Constructor", () => {
			const email = "Jenny@TommyTuTone.com"
			const apple = new Employee(8675309, "Jenny", 8675309, email);
			expect(apple.getEmail()).toBe(email);
		})
	})
})