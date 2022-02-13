const Manager = require("../lib/manager");

jest.mock("../lib/manager");

test("should create a manager object", () => {
    const manager = new Manager("Brian", 12, 1, "brian@yahoo.com");

    expect(manager.officenumber).toEqual(expect.any(Number));
})

test("Should generate the manager's details", () => {
    const manager = new Manager("Brian", 12, 1, "brian@yahoo.com");
    
    expect(manager.getEmployeeType()).toEqual("Manager");
});