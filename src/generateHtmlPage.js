// Generate Manager to index.html
function addManager(manager){
    return `
    <div class="col-4 mb-3">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h4 class="card-subtitle mb-2"><i class="fa-solid fa-clipboard-list"></i> Manager</h4>
    </div>
            <ul class="card-body">
                <p class="card-text">ID:${manager.id}</p>
                <p class="card-text">Office Number:${manager.officenumber}</p>
                <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            </ul>
    </div>
    `;
}

// Generate Engineer to index.html
function addEngineer(engineer){
    return `
    <div class="col-4 mb-3">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h4 class="card-subtitle mb-2"><i class="fa-solid fa-code-branch"></i> Engineer</h4>
    </div>
            <ul class="card-body">
                <p class="card-text">ID:${engineer.id}</p>
                <p class="card-text">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            </ul>
        </div>
    `;
}

// Generate Intern to index.html
function addIntern(intern) {
    return `
    <div class="col-4 mb-3">
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h4 class="card-subtitle mb-2"><i class="fa-regular fa-id-badge"></i> Intern</h4>
    </div>
            <ul class="card-body">
                <p class="card-text">ID:${intern.id}</p>
                <p class="card-text">School:${intern.school}</p>
                <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            </ul>
        </div>
    `;
}

// Create the teammemberArr to generate to index.html
function generateHtmlPage(teamMemberArr) {
    cardArr = [];
    for(let i = 0; i < teamMemberArr.length; i++) {
        if(teamMemberArr[i].getEmployeeType() === "Manager")
        {
            const managerCard = addManager(teamMemberArr[i]);
            cardArr.push(managerCard);
        }
        else if(teamMemberArr[i].getEmployeeType() === "Engineer")
        {
            const engineerCard = addEngineer(teamMemberArr[i]);
            cardArr.push(engineerCard);
        }
        else {
            const internCard = addIntern(teamMemberArr[i]);
            cardArr.push(internCard);
        }
    }

    const employeeCardArr = cardArr.join('');
    return generateHTML(employeeCardArr);
}

// Create index.html
function generateHTML(employeeCardArr) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/98352c7fb0.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">

    <title>Team Profile Generator</title>

</head>
<body>
    <header class="jumbotron mb-3 text-center">
        <h1>My Team</h1>
    </header>

    <div class="container">
        <div class="row justify-content-center" id="team-cards">
        ${employeeCardArr}
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>
    `;
}

module.exports = generateHtmlPage;