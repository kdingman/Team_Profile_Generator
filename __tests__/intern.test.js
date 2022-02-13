const Intern = require("../lib/intern");

jest.mock("../lib/intern");

test("create an intern object", () => {
    const intern = new Intern("Kelly", 39, "Ball State University", "kcdonlan@yahoo.com");

    expect(intern.school).toEqual(expect.any(String));
});

test("pulls interns school", () => {
    const intern = new Intern("Kelly", 39, "Ball State University", "kcdonlan@yahoo.com");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("Should generate employee details", () => {
    const intern = new Intern("Kelly", 39, "Ball State University", "kcdonlan@yahoo.com");
    
    expect(intern.getEmployeeType()).toEqual("Intern");
});