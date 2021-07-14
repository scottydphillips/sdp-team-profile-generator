const Intern = require("../intern.js");

describe("Intern", () => {
	describe("Prompt", () => {
		it("can instantiate Intern instance", () => {
			const banana = new Intern()
			expect(typeof(banana)).toBe('object');
		});
		it("can set a name via Constructor", () => {
			const name = "Jenny";
			const pear = new Intern(8675309, name);
			expect(pear.getName()).toBe(name);
		});
		it("can set school via Constructor", () => {
			const school = "School of Rock"
			const apple = new Intern("TuTone", "Jenny", 8675309, "Jenny@TommyTuTone.com", school);
			expect(apple.getSchool()).toBe(school);
		})
	})
})