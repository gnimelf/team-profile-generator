const Employee = require("./Employee");

class Engineer extends Employee{
    constructor (github){
        super(id, em_name, email);
        this.github = github;
    }

    getRole(){
        return 'Engineer';
    } 
}

module.exports = Engineer;