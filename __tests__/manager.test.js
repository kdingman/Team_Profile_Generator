const Manager = require("../lib/manager");

jest.mock("../lib/manager");

describe("Manager", () => {
    test("Should generate the Manager name", () => {
        const manager = new Manager("Brian");
        expect(manager.name).toBe("Brian");
    });

    test("Should generate the Manager's ID", () => {
        const manager = new Manager("Brian");
        expect(manager.id).toEqual(expect.any(Number));
    });

    test("Should generate the Manager's Office Number", () => {
        const manager = new Manager("Brian");
        expect(manager.officenumber).toEqual(expect.any(Number));
    });

    test ("Should generate the Manager's email address", () => {
        const manager = new Manager("Brian");
        expect(manager.email).toEqual(expect.any(String));
    });

    test("Should generate the Manager's details", () => {
        const manager = new Manager("Brian", 2, 52, "brian@yahoo.com");
        expect(manager.getEmployeeType()).toEqual("Manager");
    });
});