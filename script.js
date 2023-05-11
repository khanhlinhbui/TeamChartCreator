const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateTeam = require('./lib/renderHTML')
// Create a list to store input
const list = [];
// Generate buildTeam functionß
function buildTeam(){ 
    console.log(generateTeam(list))
}
buildTeam(Template())
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
        const managerObject = new Manager (
            answer.manager_name,
            answer.manager_id,
            answer.manager_email,
            answer.manager_officeNumber
        )
        list.push(managerObject)
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
                    break
                case 'Intern':
                    addIntern()
                    break
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
                name: 'engineer_id',
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
                name:'engineer_github'
            }
        ])
        .then((answer) => {
            const engineerObject = new Engineer (
                answer.engineer_name,
                answer.engineer_id,
                answer.engineer_email,
                answer.engineer_github 
            )
            list.push(engineerObject)
            createEmployee();
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
                const internObject = new Intern (
                    answer.intern_name,
                    answer.intern_id,
                    answer.intern_email,
                    answer.intern_school
                )
                list.push(internObject)
                createEmployee();
            })
    }
   
    

    
    