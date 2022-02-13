// pulls from employee constructor
const Employee = require("./employee");

// the engineer constructor will extend to the employee constructor
class Engineer extends Employee {
    constructor(name, id, github, email) {
        // calls the employee constructor
        super(name, id, email);
        
        this.github = github;
    }

    // returns github infor from the github input
    getGithub() {
        return this.github;
    }

    // this will override the employee to the engineer
    getEmployeeType() {
        return 'Engineer';
    }
};

module.exports = Engineer;