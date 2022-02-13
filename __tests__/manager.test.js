const Manager = require("../lib/manager");

jest.mock("../lib/manager");

    test("Should generate the manager name", () => {
        const manager = new Manager("Brian");
        expect(manager.name).toBe("Brian");
    });

    test("Should generate the manager's ID", () => {
        const manager = new Manager("Brian");
        expect(manager.id).toEqual(expect.any(Number));
    });

    test("Should generate the manager's Office Number", () => {
        const manager = new Manager("Brian");
        expect(manager.officenumber).toEqual(expect.any(Number));
    });

    test ("Should generate the manager's email address", () => {
        const manager = new Manager("Brian");
        expect(manager.email).toEqual(expect.any(String));
    });

    test("Should generate the manager's details", () => {
        const manager = new Manager("Brian", 2, 52, "brian@yahoo.com");
        expect(manager.getEmployeeType()).toEqual("Manager");
    });