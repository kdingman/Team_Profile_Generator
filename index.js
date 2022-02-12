const inquirer = require('inquirer');
const fs = require('fs');

// Class Libraries added
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const teamMemberArr = [];

// Manager Questions for teamMemberArr
const managerDetails = () => {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Please enter the Team Manager's name",
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else {
                console.log("Please enter the Team Manager's name.");
            }}
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your Team Manager ID",
            validate: idInput => {
                if(idInput > 0) {
                    return true;
                }
                else {
                    console.log("Please enter a number larger than 0");
                    return false;
                }}
        },
        {
            type: "input",
            name: "officenumber",
            message: "Please enter the Team Manager's Office Number.",
            validate: officenumberInput => {
                if(officenumberInput > 0) {
                    return true;
                }
                else {
                    console.log("Please enter a number larger than 0.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Team Manager's email address.",
            validate: emailInput => {
                format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput);
                if(format) {
                    return true;
                }
                else {
                    console.log(" Please enter a valid email address.");
                    return false;
                }
            }
    }])
    .then(managerPromptDetails => {
        const { name, id, officenumber, email } = managerPromptDetails;
        const manager = new Manager(name, id, officenumber, email);
        teamMemberArr.push(manager);
        addDetails();
    })
};

// Engineer Questions for teamMemberArr
const engineerDetails = () => {
    return inquirer.prompt([{
        type: "input",
        name: "engineername",
        message: "Please enter the Engineer's name.",
        validate: engineernameInput => {
            if(engineernameInput) {
                return true;
            }
            else {
                console.log("Please enter a name.");
                return false;
            }}
        },
        {
            type: "input",
            name: "engineerid",
            message: "Please enter the Engineer's ID.",
            validate: engineeridInput => {
                if(engineeridInput > 0){
                    return true;
                }
                else {
                    console.log("Please enter a number larger than 0.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username.",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                }
                else {
                    console.log("Please enter the Engineer's GitHub username");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineeremail",
            message: "Please enter the Engineer's email address.",
            validate: engineeremailInput => {
                format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput);
                if(format) {
                    return true;
                }
                else {
                    console.log(" Please enter a valid email address for the Engineer.");
                    return false; 
                }
        }
    }])
    .then(engineerPromptDetails => {
        const { engineername, engineerid, github, engineeremail } = engineerPromptDetails;
        const engineer = new Engineer(engineername, engineerid, github, engineeremail);
        teamMemberArr.push(engineer);
        addDetails();
    })
};

// Intern Questions for teamMemberArr
const internDetails = () => {
    return inquirer.prompt ([{
        type: "input",
        name: "internname",
        message: "Please enter the Intern's name.",
        validate: internameInput => {
            if(internameInput) {
                return true;
            }
            else {
                console.log("Please enter the Intern's name.");
                return false;
            }}
        },
        {
            type: "input",
            name: "internid",
            message: "Please enter the Intern's ID.",
            validate: internidInput => {
                if(internidInput > 0) {
                    return true;
                }
                else {
                    console.log("Please enter a number larger than 0.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the School the Intern attends.",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                }
                else {
                    console.log("Please enter a school name or N/A if no school is attended.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internemail",
            message: "Please enter the Intern's email address.",
            validate: internemailInput => {
                format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput);
                if(format) {
                    return true;
                }
                else {
                    console.log(" Please enter a valid email address for the Intern.");
                    return false; 
                }
        },
    }])
    .then(interPromptDetails => {
        const { intername, internid, school, internemail } = internPromptDetails
        const intern = new Intern(internname, internid, school, internemail);
        teamMemberArr.push(intern);
        addDetails();
    })
};

// Where to choose the employee type
const addDetails = () => {
    return inquirer.prompt([{
        type: "list",
        name: "employeetype",
        message: "Please select the type of employee you would like to add to your team.",
        choices: ["Engineer", "Intern", "I do not need to add anyone else" ]
    }])
    .then((selection) => {
        let selection = selection.option;
        if(selection === "Engineer") {
            engineerDetails();
        }
        else if(selection === "Intern") {
            internDetails();
        }
        else {
            fs.writeFile(".dist/index.html", generateHtmlPage(teamMemberArr), (err) => {
                if(err)
                throw err;
                console.log("Successfully created Team Profile page!");
            })
        }
    });
};

const init = () => {
    managerDetails()
};

init();