const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("test Manager's properties", () => {
    it("test all properties", () => {
      const manager = new Manager("Bob", "1", "bob@no.com", '1001')

      expect(manager.name).toEqual("Bob");
      expect(manager.id).toEqual("1");
      expect(manager.email).toEqual("bob@no.com");
      expect(manager.officeNumber).toEqual("1001");
    });
  });

  describe("test Manager's methods", () => {
    it("test all methods", () => {
      const manager = new Manager("Tina", "2", "tina@no.com", '1002');

      expect(manager.getName()).toEqual("Tina");
      expect(manager.getId()).toEqual("2");
      expect(manager.getEmail()).toEqual("tina@no.com");
      
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
