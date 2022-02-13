const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, github, email) {
        super(name, id, email);
        
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getEmployeeType() {
        return 'Engineer';
    }
};

module.exports = Engineer;