const inquirer = require('inquirer');
const fs = require('fs');

const teamMemberArr = [];

// Manager Questions for teamMemberArr
const managerDetails = () => {
    return inquirer.prompt([{
        type: 'input',
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