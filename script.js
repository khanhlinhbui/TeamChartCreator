const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/Engineer');
const employee = require('./lib/Employee');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
// const { listenerCount } = require('process');
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
        const manager = new Manager (
            answer.manager_name,
            answer.manager_id,
            answer.manager_email,
            answer.manger_officeNumber
        )
        createEmployee();
    })
}
createManager();
function createEmployee(){
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'which position do you want to add?',
                name: 'employee_position',
                choices: [
                    'Engineer',
                    'Intern',
                    'Stop adding'
                ]
            }
        ])
        .then((answer)=>{
            switch(answer.employee_position){
                case 'Engineer':
                    addEngineer()
                case 'Intern':
                    addIntern()
                case 'Stop adding':
                    buildTeam()
                }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
// adding Engineer inquirer
function addEngineer(){
    inquirer 
        .prompt([
            {
                type: 'input',
                message: 'what is the name of the engineer?',
                name: 'engineer_name',
                validate: (answer) => {
                    if(answer !== ''){
                        return true;
                    } 
                    return 'require at least 1 character';
                }
            },
            {
                type: 'input',
                message: 'what is the ID of the engineer?',
                name: 'employee_id',
                validate: (answer) => {
                    if(answer !== ''){
                        return true
                    }
                    return 'require at least 1 character'
                }
            },
            {
                type: 'input',
                message: 'what is the email of the engineer?',
                name: 'engineer_email'
            },
            {
                type: 'input',
                message: 'what is the github of the engineer?',
                name:'enginner_github'
            }
        ])
        .then((answer) => {
            const engineer = new Engineer (
                answer.engineer_name,
                answer.engineer_id,
                answer.engineer_email,
                answer.engineer_github 
            )
        })
    }
    function addIntern(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'what is the name of the intern',
                    name: 'intern_name'
                },
                {
                    type: 'input',
                    message: 'what is the ID of the intern',
                    name: 'intern_id'
                },
                {
                    type:'input',
                    message: 'what is the email of the intern?',
                    name: 'intern_email'
                },
                {
                    type: 'input',
                    message: ' what is the school of intern',
                    name: 'intern_school'
                }
            ])
            .then((answer) => {
                const intern = new Intern (

                )
            })
    }
    