// Creates a new Employee Constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // returns name from input
    getName() {
        return this.name;
    }

    // returns id from input
    getId() {
        return this.id;
    }

    // returns email from input
    getEmail() {
        return this.email;
    }

    // returns all employee details
    getEmployeeType() {
        return "Employee";
    }
};

module.exports = Employee;