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
            .filter(emoloyee => employee.getRole() === "Engineer")
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
