const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, officenumber, email) {
        super(name, id, email);

        this.officenumber = officenumber;
    }
    getOfficenumber() {
        return this.officenumber;
    }
    getEmployeeType() {
        return "Manager";
    }
};

module.exports = Manager;