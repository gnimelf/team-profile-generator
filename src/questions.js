
const managerQuestions = [
    {
      type: 'input',
      message: "Enter the manager's name",
      name: "name"
    },
    {
      type: 'input',
      message: "Enter the manager's ID",
      name: "id"
    },
    {
      type: 'input',
      message: 'Enter the Manager email',
      name: "email"
    },
    {
      type: 'input',
      message: 'Manager office number',
      name: "officeNumber"
    },
    {
      type: 'list',
      message: 'Add another member? ',
      choices:
        [
          'Engineer',
          'Intern',
          'finished'
        ],
      name: "newMember"
    }
  ]
  
  const engineerQuestions = [
    {
      type: 'input',
      message: "Enter the engineer's name",
      name: "name"
    },
    {
      type: 'input',
      message: "Enter the engineer's employee ID",
      name: "id"
    },
    {
      type: 'input',
      message: "Enter the engineer's email address",
      name: "email"
    },
    {
      type: 'input',
      message: "Enter the engineer's github's username",
      name: "github"
    },
    {
      type: 'list',
      message: 'Add another member? ',
      choices:
        [
          'Engineer',
          'Intern',
          'finished'
        ],
      name: "newMember"
    }
  ]
  
  const internQuestions = [
    {
      type: 'input',
      message: "Enter the intern's name",
      name: "name"
    },
    {
      type: 'input',
      message: "Enter the intern's ID",
      name: "id"
    },
    {
      type: 'input',
      message: "Enter the intern's email",
      name: "email"
    },
    {
      type: 'input',
      message: 'Enter University/College name',
      name: "school"
    },
    {
      type: 'list',
      message: 'Add another member? ',
      choices:
        [
          'Engineer',
          'Intern',
          'finished'
        ],
      name: "newMember"
    }
  ]

module.exports = {managerQuestions, engineerQuestions, internQuestions};