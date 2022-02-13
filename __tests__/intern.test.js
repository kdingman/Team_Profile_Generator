const Intern = require("../lib/intern");

jest.mock("../lib/intern");

describe("Intern" , () => {
    test("should genereate Intern's Name", () => {
        const intern = new Intern("Kelly");
        expect(intern.name).toBe("Kelly");
    });

    test("should generate Intern's ID", () => {
        const intern = new Intern("Kelly");
        expect(intern.id).toEqual(expect.any(Number));
    });

    test("Should generate the school name", () => {
        const intern = new Intern("Kelly");
        expect(intern.getSchool()).toEqual(expect.any(String));        
    });

    test("should generate Intern's email address", () => {
        const intern = new Intern("Kelly");
        expect(intern.email).toEqual(expect.any(String));
    })

    test("Should generate employee details", () => {
        const intern = new Intern("Kelly", 39, "Ball State", "kelly@yahoo.com");
        expect(intern.getEmployeeType()).toEqual("Intern");
    });
});