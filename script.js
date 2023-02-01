const inquirer = require('inquirer');
const fs = require('fs');
const { getDiffieHellman } = require('crypto')
function createManager(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: ' what is the name of the manager?',
                name: 'manager_name'
            },
            {
                type: 'input',
                message: ' what is ID of the manager?',
                name: 'manager_id'
            },
            {
                type: 'input',
                message: 'what is the email of the manager?',
                name: 'manager_email'
            },
            {
                type: 'input',
                message: ' what is the office number of the manager',
                name: 'manager_officeNumber'
            }
    ])
    .then((answer)=>{
        createEmployee();
    })
}
createManager();
function createEmployee(){
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'what is your position?',
                name: 'employee_position',
                choices: [
                    'Engineer',
                    'Intern'
                ]
            },
            {
                type: 'input',
                message: 'what is the name of the employee?',
                name: 'employee_name'
            },
            {
                type: 'input',
                message: ' what is the ID of the employee?',
                name: 'employee_id'
            },
            {
                type: 'input',
                message: ' what is the email of the employee?',
                name: 'employee_email'
            }
        ])
        .then((answer)=>{
            if(answer.employee_position == 'Engineer'){
                inquirer
                    .prompt({
                        type: 'input',
                        message: 'what is your Github account?',
                        name: 'engineer_github'
                    })
                    .then((answer2)=>{
                        console.log(answer2)
                    })
                }else{
                    inquirer
                        .prompt({
                            type: 'input',
                            message: 'what is your current school?',
                            name: 'intern_school'
                        })
                        .then((answer3)=>{
                            console.log(answer3)
                        })
                }
        })
        .catch((error)=>{
            console.log(error)
        })
}
//
    