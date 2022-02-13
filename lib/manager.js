const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, officenumber, email) {
        this.name = name;
        this.id = id;
        this.officenumber = officenumber;
        this.email = email;
    }
    getOfficenumber() {
        return this.officenumber;
    }
    getEmployeeType() {
        return 'Manager';
    }
};

module.exports = Manager;