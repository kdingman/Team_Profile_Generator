// pulls Engineer constructo
const Engineer = require("../lib/engineer");


// creates and engineer object
test("should create an engineer object", () => {
    const engineer = new Engineer("Caleb", 6, "kdingman", "caleb@yahoo.com");

    expect(engineer.github).toEqual(expect.any(String))
});

// pulls github information from getGithub
test(" should create engineer github value", () => {
    const engineer = new Engineer("Caleb", 6, "kdingman", "caleb@yahoo.com");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//// gets employee details from getEmployeeType
test("Should generate the employee details", () => {
    const engineer = new Engineer("Caleb", 6, "kdingman", "caleb@yahoo.com");
    
    expect(engineer.getEmployeeType()).toEqual("Engineer");
});