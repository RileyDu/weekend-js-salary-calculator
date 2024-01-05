console.log('JS Works!');

onReady();

let employeeArray = [];

function onReady() {
    const formElement = document.getElementById("form");
    formElement.addEventListener("submit", getFormData);
    // let submitButton = document.getElementById("submit");
  }

function getFormData(event){
    event.preventDefault();
    let firstNameElement = event.target.children[0]
    let firstNameValue = event.target.children[0].value

    let lastNameElement = event.target.children[1]
    let lastNameValue = event.target.children[1].value

    let employeeIDElement = event.target.children[2]
    let employeeIDValue = event.target.children[2].value

    let employeeTitleElement = event.target.children[3]
    let employeeTitleValue = event.target.children[3].value

    let employeeSalaryElement = event.target.children[4]
    let employeeSalaryValue = event.target.children[4].value

    let newEmployee = {
        firstName: firstNameValue,
        lastName:lastNameValue,
        ID: employeeIDValue,
        title: employeeTitleValue,
        salary: employeeSalaryValue
    }
    employeeArray.push(newEmployee)
    firstNameElement.value = '';
    lastNameElement.value = '';
    employeeIDElement.value = '';
    employeeTitleElement.value = '';
    employeeSalaryElement.value = '';
    console.log(employeeArray)
}

