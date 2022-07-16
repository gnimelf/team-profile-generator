const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

var team = []; // employee objects

let teamBuild = false;
let employeeType = 'manager';

while (teamBuild === false) {

  // Get Manager Info
  if (employeeType === "manager"){
      inquirer.prompt([
    // prompted to enter the team manager’s name
    {
      type:'input',
      message: "Enter the manager's name",
      name: managerName
    },
    // prompted to enter the team employee ID
    {
      type:'input',
      message: "Enter the manager's employee ID",
      name: managerID
    },
    // prompted to enter the team manager’s email address
    {
      type:'input',
      message: 'Enter the Manager name',
      name: managerEmail
    },
    // prompted to enter the team manager’s office number
    {
      type:'input',
      message: 'Manager name',
      name: managerName
    }
    // presented with a menu with the option to add an engineer or an intern or to finish building my team
  ]);
  }
  else if (employeeType === "engineer") {
    inquirer.prompt([
      // prompted to enter the team manager’s name
      {
        type:'input',
        message: "Enter the engineer's name",
        name: managerName
      },
      // prompted to enter the team employee ID
      {
        type:'input',
        message: "Enter the engineer's employee ID",
        name: managerID
      },
      // prompted to enter the team manager’s email address
      {
        type:'input',
        message: "Enter the engineer's email address",
        name: managerEmail
      },
      // prompted to enter the team manager’s office number
      {
        type:'input',
        message: "Enter the engineer's github's username",
        name: engineerUsername
      }
      // presented with a menu with the option to add an engineer or an intern or to finish building my team
    ]);
  }
  else if (employeeType === "intern"){
    inquirer.prompt([
      // prompted to enter the team manager’s name
      {
        type:'input',
        message: "Enter the engineer's name",
        name: managerName
      },
      // prompted to enter the team employee ID
      {
        type:'input',
        message: "Enter the engineer's employee ID",
        name: managerID
      },
      // prompted to enter the team manager’s email address
      {
        type:'input',
        message: "Enter the engineer's email address",
        name: managerEmail
      },
      // prompted to enter the team manager’s office number
      {
        type:'input',
        message: "Enter the engineer's github's username",
        name: engineerUsername
      }
      // presented with a menu with the option to add an engineer or an intern or to finish building my team
    ]);
  }
}

// Build team
