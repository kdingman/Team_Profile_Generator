// Generate Manager to index.html
function addManager(manager){
    return `
    <div class="col-4 mb-3">
            <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 16rem;"></div>
            <div class="card-title bg-secondary text-center text-white">
            <h2>${manager.name}</h2>
            <h4 class="sub-title"><i class="fa-light fa-clipboard-list-check"></i>Manager</h4>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${manager.id}</li>
            <li class="list-group-item">Office Number:${manager.officenumber}</li>
            <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
        </ul>
    </div>
    </div>
    `;
}

// Generate Engineer to index.html
function addEngineer(engineer){
    return `
    <div class="col-4 mb-3">
            <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 16rem;"></div>
            <div class="card-title bg-secondary text-center text-white">
            <h2>${engineer.name}</h2>
            <h4 class="sub-title"><i class="fa-light fa-code-merge"></i>Engineer</h4>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${engineer.id}</li>
            <li class="list-group-item">Github:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
        </ul>
    </div>
    </div>
    `;
}

// Generate Intern to index.html
function addIntern(intern) {
    return `
    <div class="col-4 mb-3">
            <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 16rem;"></div>
            <div class="card-title bg-secondary text-center text-white">
            <h2>${intern.name}</h2>
            <h4 class="sub-title"><i class="fa-light fa-user-graduate"></i>Intern</h4>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${intern.id}</li>
            <li class="list-group-item">School:${intern.school}</li>
            <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
        </ul>
    </div>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">

    <title>Team Profile Generator</title>

</head>
<body>
    <header class="jumbotron text-center bg-secondary text-white">
        <h1>My Team</h1>
    </header>

    <div class="container-fluid">
        <section class="row justify-content-center">
        ${employeeCardArr}
        </section>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>
    `;
}

module.exports = generateHtmlPage;