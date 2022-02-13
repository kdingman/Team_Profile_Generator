// uses the Employee Constructor page
const Employee = require("../lib/employee");

// creates the new employee object
test("should create a new employee object", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// pulls name from getName
test("should generate employee name", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

// pulls id from getId
test("should generate employee id", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

// pulls email from getEmail
test("should generate employee email address", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets employee details from getEmployeeType
test("should generate employee details", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");
    
    expect(employee.getEmployeeType()).toEqual("Employee");
});