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
    let firstNameElement = event.target.children[0].value
    let lastNameElement = event.target.children[1].value
    let employeeIDElement = event.target.children[2].value
    let employeeTitleElement = event.target.children[3].value
    let employeeSalaryElement = event.target.children[4].value

    let newEmployee = {
        firstName: firstNameElement,
        lastName:lastNameElement,
        ID: employeeIDElement,
        title: employeeTitleElement,
        salary: employeeSalaryElement
    }

    employeeArray.push(newEmployee)
    console.log(employeeArray)
}

