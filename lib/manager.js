// pulls from employee constructor
const Employee = require("./employee");

// the manager constructor will extend to the employee constructor
class Manager extends Employee {
    constructor(name, id, officenumber, email) {
        // calls the employee constructor
        super(name, id, email);

        this.officenumber = officenumber;
    }

    // returns the office number from input
    getOfficenumber() {
        return this.officenumber;
    }

    // this will override the employee to the manager
    getEmployeeType() {
        return "Manager";
    }
};

module.exports = Manager;