const inquirer = require('inquirer');
const questions = require('./src/questions')
const Engineer = require('./lib/Engineer');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

var team = []; // employee objects

let employeeType = 'manager';

function buildManager() {
    inquirer
      .prompt(questions.managerQuestions)
      .then((answers) => {
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
          team.push(manager);
          employeeType = answers.newMember;
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log(error)
        }
      });
    }
  

