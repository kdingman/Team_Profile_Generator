const Intern = require("../lib/intern");

jest.mock("../lib/intern");

describe("Intern" , () => {
    test("Should generate the school name", () => {
        const intern = new Intern("Kelly", 39, "kelly@yahoo.com");
        expect(intern.getSchool()).toEqual(expect.any(String));
    });

    test("Should generate employee details", () => {
        expect(intern.getEmployeeType()).toEqual("Intern");
    });
});