const inquirer = require("inquirer");
const fs = require('fs');
const questions = require("./src/questions");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const helper = require("./src/helper");
const card = require("./src/card");

var team = []; // employee objects
var cards = []; // employee cards
 

function buildManager() {
  inquirer
    .prompt(questions.managerQuestions)

    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      // Check if a new member is needed
      if (answers.newMember === "Engineer") {
        buildEngineer();
      } else if (answers.newMember === "Intern") {
        buildIntern();
      } else {
        buildTeam();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      }
    });
}

function buildEngineer() {
  inquirer
    .prompt(questions.engineerQuestions)
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      // Check if a new member is needed
      if (answers.newMember === "Engineer") {
        buildEngineer();
      } else if (answers.newMember === "Intern") {
        buildIntern();
      } else {
        buildTeam();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      }
    });
}

function buildIntern() {
  inquirer
    .prompt(questions.internQuestions)
    .then((answers) => {
      const Inter = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(Inter);
      // Check if a new member is needed
      if (answers.newMember === "Engineer") {
        buildEngineer();
      } else if (answers.newMember === "Intern") {
        buildIntern();
      } else {
        buildTeam();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      }
    });
}

function buildTeam() {
  console.log(`There are ${team.length} objects in teams`)
  team.forEach(object => {
    var newCard = '';
    var officeNum = '';
    var github = '';
    var school = '';
    var role = object.getRole();
    var id = object.getId();
    var name = object.getName();
    var email = object.getEmail();


    if (role == "Manager"){
      officeNum = object.getOfficeNumber();
      newCard = card.generateManagerCard(name, id, email, officeNum);
      cards.push(newCard);
    } else if(role == "Engineer") {
      github = object.getGithub();
      newCard = card.generateEngineerCard(name, id, email, github);
      cards.push(newCard);
    } else if(role == "Intern"){
      school = object.getSchool();
      newCard = card.generateInternCard(name, id, email, school);
      cards.push(newCard);
    }
  });
  
  cards = cards.toString().replace(/,/g, '');
  var htmlCode = helper.generatedHTML(cards);
  writeToFile("./dist/team.html", htmlCode)
}

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

buildManager();