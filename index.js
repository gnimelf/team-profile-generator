const inquirer = require("inquirer");
const fs = require('fs');
const questions = require("./src/questions");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const helper = require("./src/helper");
const card = require("./card");

var team = []; // employee objects
var cards = []; // employee cards
 
var testTeam = [
  {
    name: 'bob1',
    id: '1',
    email: 'bob1@no.com',
    officeNumber: '1001'
  },
  {
    name: 'bob2',
    id: '2',
    email: 'bob2@no.com',
    github: bob2git
  }
]

let employeeType = "manager";

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
        // console.log('engineer')
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
    .prompt(questions.InternQuestions)
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
  team.forEach(object => {
    console.log(object);
  });
}

// buildManager();
buildTeam(); 