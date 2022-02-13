// pulls from employee constructor 
const Employee = require("./employee");

// the intern constructor will extend to the employee constructor
class Intern extends Employee {
    constructor(name, id, school, email) {
        // calling the intern constructor
        super(name, id, email);

        this.school = school;
    }

    // returns school information from input
    getSchool() {
        return this.school;
    }

    // this will override the employee to the intern 
    getEmployeeType() {
        return "Intern";
    }
};

module.exports = Intern;