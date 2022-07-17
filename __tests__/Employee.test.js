const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("test Employee's properties", () => {
    it("test all properties", () => {
      const employee = new Employee("Bob", "1", "no@no.com");

      expect(employee.name).toEqual("Bob");
      expect(employee.id).toEqual("1");
      expect(employee.email).toEqual("no@no.com");
    });
  });

  describe("test Employee's methods", () => {
    it("test all methods", ()=>{
        const employee = new Employee("Tina", "2", 'yes@yes.com');

        expect(employee.getName()).toEqual("Tina");
        expect(employee.getId()).toEqual("2");
        expect(employee.getEmail()).toEqual("yes@yes.com");
        expect(employee.getRole()).toEqual("Employee");
    });
  });
});
