const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("test Engineer's properties", () => {
    it("test all properties", () => {
      const engineer = new Engineer("Bob", "1", "bob@no.com", "username")

      expect(engineer.name).toEqual("Bob");
      expect(engineer.id).toEqual("1");
      expect(engineer.email).toEqual("bob@no.com");
      expect(engineer.github).toEqual("username");
    });
  });

  describe("test Engineer's methods", () => {
    it("test all methods", () => {
      const engineer = new Engineer("Tina", "2", "tina@no.com", 'username');

      expect(engineer.getName()).toEqual("Tina");
      expect(engineer.getId()).toEqual("2");
      expect(engineer.getEmail()).toEqual("tina@no.com");
      expect(engineer.getGithub()).toEqual("username")
      expect(engineer.getRole()).toEqual("Engineer");
    })
  });
});
