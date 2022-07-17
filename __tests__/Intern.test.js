const Intern = require ("../lib/Intern");

describe("Intern", () => {
  describe("test Intern's properties", () => {
    it("test all properties", () => {
      const intern = new Intern("Bob", "1", "bob@no.com", "OSU" )

      expect(intern.name).toEqual("Bob");
      expect(intern.id).toEqual("1");
      expect(intern.email).toEqual("bob@no.com");
      expect(intern.school).toEqual("OSU");
    });
  });

  describe("test Intern's methods", () => {
    it("test all methods", () => {
      const intern = new Intern("Tina", "2", "tina@no.com", "OSU");

      expect(intern.getName()).toEqual("Tina");
      expect(intern.getId()).toEqual("2");
      expect(intern.getEmail()).toEqual("tina@no.com");
      expect(intern.getSchool()).toEqual("OSU")
      expect(intern.getRole()).toEqual("Intern");
    })
  });
});