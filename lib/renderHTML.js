// generate Team on HTML
const generateTeam = team => {
    // generate Manager on HTML
    const generateManager = manager =>{
        return `
        
        
        `
    }

    // generate Engineers on HTML

    // generate Interns on HTML
}

// link classes with HTML
const html = [];
html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
 );