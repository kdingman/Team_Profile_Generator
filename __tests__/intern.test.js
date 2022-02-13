// pulls from the Intern Constructor
const Intern = require("../lib/intern");

//jest.mock("../lib/intern");

// creates an intern object
test("create an intern object", () => {
    const intern = new Intern("Kelly", 39, "Ball State University", "kcdonlan@yahoo.com");

    expect(intern.school).toEqual(expect.any(String));
});

// pulls school from getSchool input
test("pulls interns school", () => {
    const intern = new Intern("Kelly", 39, "Ball State University", "kcdonlan@yahoo.com");

    expect(intern.getSchool()).toEqual(expect.any(String));
});

// gets employee details from getEmployeeType
test("Should generate employee details", () => {
    const intern = new Intern("Kelly", 39, "Ball State University", "kcdonlan@yahoo.com");
    
    expect(intern.getEmployeeType()).toEqual("Intern");
});