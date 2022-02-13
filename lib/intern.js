const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, school, email) {
        super(name, id, email);

        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getEmployeeType() {
        return "Intern";
    }
};

module.exports = Intern;