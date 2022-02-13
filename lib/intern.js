const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, school, email) {
        this.name = name;
        this.id = id;
        this.school = school;
        this.email = email;
    }
    getSchool() {
        return this.school;
    }
    getEmployeeType() {
        return 'Intern';
    }
};

module.exports = Intern;