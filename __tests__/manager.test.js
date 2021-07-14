const Manager = require("../manager.js");

describe("Manager", () => {
	describe("Prompt", () => {
		it("can instantiate Manager instance", () => {
			const banana = new Manager()
			expect(typeof(banana)).toBe('object');
		});
		it("can set a name via Constructor", () => {
			const name = "Jenny";
			const pear = new Manager(8675309, name);
			expect(pear.getName()).toBe(name);
		});
		it("can set office number via Constructor", () => {
			const officeNumber = 42
			const apple = new Manager("TuTone", "Jenny", 8675309, "Jenny@TommyTuTone.com", officeNumber);
			expect(apple.getOffice()).toBe(officeNumber);
		})
	})
})