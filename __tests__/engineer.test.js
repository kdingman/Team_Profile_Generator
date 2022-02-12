const Engineer = require("../lib/engineer");

jest.mock("./lib/engineer");

describe("Engineer", () => {
    test("Should generate engineer GitHub account" , () => {
        const engineer = new Engineer("Caleb", 6, "github", "caleb@yahoo.com");
        expect(engineer.getGithub()).toEqual(expect.any(String));
    });

    test("Should generate the employee details", () => {
        const engineer = new Engineer("Caleb", 6, "gihub", "caleb@yahoo.com");
        expect(engineer.getEmployeeType).toEqual("Engineer");
    });
});