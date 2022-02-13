const Employee = require("../lib/employee");

jest.mock("../lib/employee");

// describe ("Employee", () => {

// test("Initialize", () => {
//     const employee = new Employee();
//     expect(typeof employee).toBe("object");
// });

test("should create a new employee object", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("should generate employee name", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

test("should generate employee id", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("should generate employee email address", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("should generate employee details", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");
    
    expect(employee.getEmployeeType()).toEqual("Employee");
});