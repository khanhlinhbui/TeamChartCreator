// generate Team on HTML
const generateTeam = team => {
    // generate Manager on HTML
    const generateManager = manager =>{
        return `
        <div id="manager" class="manager card">
            <h5 class="card-title">${manager.getName()}</h2>
            <h6 class="card-title">${manager.getRole()}</h3>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getID()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">OfficeNumber: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>        
        </div>
        `
    };
    // generate Engineers on HTML
    const generateEngineer = engineer =>{
        return`
        <div id="engineer" class="engineers card">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h5 class="'card-title">${engineer.getRole()}</h5>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getID()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                    <li class="list-group-item">github: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>    
          `
    };
    // generate Interns on HTML
    const generateIntern = intern=>{
        return`
        <div id="intern" class="interns card">
            <h5 class="card-title">${intern.getName()}</h5>
            <h5 class="'card-title">${intern.getRole()}</h5>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getID()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                    <li class="list-group-item"> ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    };
    // link classes with HTML
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
    );
    html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => generateEngineer(engineer))
            .join("")
        );
        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(intern))
            .join("")
        );
     return html.join("");
};
// export HTML template
module.exports = team =>{
    return`
    !DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MyTeam</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
        <section id="header"  class ='container-fluid'>
            <div class="row">
                <h1 class="text-center"> My Team </h1>
                ${generateTeam(team)}
            </div>
        </section>
    </body>
    </html>
        ` 
};

