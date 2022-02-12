const Employee = require("../lib/employee");

jest.mock("../lib/employee.js");

describe ("Employee", () => {

test("Initialize", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
});

test("should create a new employee object", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");
    expect(employee.name).toEqual(expect.any("Morgan"));
    expect(employee.id).toEqual(expect.any("10"));
    expect(employee.email).toEqual(expect.any("morgan@yahoo.com"));
});

test("should generate employee name", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");
    expect(employee.getName()).toBe("Morgan");
});

test("should generate employee id", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");
    expect(employee.getId()).toBe(10);
});

test("should generate employee email address", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");
    expect(employee.getEmail).toBe("morgan@yahoo.com");
});

test("should generate employee details", () => {
    const employee = new Employee("Morgan", 10, "morgan@yahoo.com");
    expect(employee.getEmployeeType()).toEqual("Employee");
});
});