const Engineer = require("../lib/engineer");

jest.mock("../lib/engineer");

test("should create an engineer object", () => {
    const engineer = new Engineer("Caleb", 6, "kdingman", "caleb@yahoo.com");

    expect(engineer.github).toEqual(expect.any(String))
});

test(" should create engineer github value", () => {
    const engineer = new Engineer("Caleb", 6, "kdingman", "caleb@yahoo.com");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("Should generate the employee details", () => {
    const engineer = new Engineer("Caleb", 6, "kdingman", "caleb@yahoo.com");
    
    expect(engineer.getEmployeeType()).toEqual("Engineer");
});