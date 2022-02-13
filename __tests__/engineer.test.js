const Engineer = require("../lib/engineer");

jest.mock("../lib/engineer");

    test("should generate engineer name", () => {
        const engineer = new Engineer("Caleb");
        expect(engineer.name).toBe("Caleb");
    });

    test("should generate engineer ID number", ()=> {
        const engineer = new Engineer("Caleb");
        expext(engineer.id).toEqual(expect.any(Number));
    });

    test("Should generate engineer GitHub account" , () => {
        const engineer = new Engineer("Caleb");
        expect(engineer.getGithub()).toEqual(expect.any(String));
    });

    test("should generate email address for Engineer", () => {
        const engineer = new Engineer("Caleb");
        expect(engineer.email).toEqual(expect.any(String));
    })

    test("Should generate the employee details", () => {
        const engineer = new Engineer("Caleb", 6, "gihub", "caleb@yahoo.com");
        expect(engineer.getEmployeeType()).toEqual("Engineer");
    });