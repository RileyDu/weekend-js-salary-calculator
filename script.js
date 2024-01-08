console.log("JS Works!");

onReady();

let employeeArray = []; // declared emptied, item added when form submitted
let sumMonthlyTotal = 0; // this will be a running sum of salary / 12

function onReady() {
  const formElement = document.getElementById("form");
  formElement.addEventListener("submit", getFormData); // calls the getFormData func when form submit
  // let submitButton = document.getElementById("submit");
}

function getFormData(event) {
  event.preventDefault();
  let firstNameElement = event.target.children[0];
  let firstNameValue = event.target.children[0].value;

  let lastNameElement = event.target.children[1];
  let lastNameValue = event.target.children[1].value;

  let employeeIDElement = event.target.children[2];
  let employeeIDValue = event.target.children[2].value;

  let employeeTitleElement = event.target.children[3];
  let employeeTitleValue = event.target.children[3].value;

  let employeeSalaryElement = event.target.children[4];
  let employeeSalaryValue = event.target.children[4].value; // declared table inputs to variables and their values

  let newEmployee = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    ID: employeeIDValue,
    title: employeeTitleValue,
    salary: employeeSalaryValue,
  }; // assigned the variables to an employee object with matching form keys

  sumMonthlyTotal += employeeSalaryValue / 12; // monthly cost for each employee is summed

  employeeArray.push(newEmployee);

  firstNameElement.value = "";
  lastNameElement.value = "";
  employeeIDElement.value = "";
  employeeTitleElement.value = "";
  employeeSalaryElement.value = ""; // clears the form
  //   console.log(employeeArray);

  let tbodyElement = document.getElementById("tbody");
  tbodyElement.innerHTML += `<tr>
<td> ${newEmployee.firstName} </td>
<td>${newEmployee.lastName}</td>
<td>${newEmployee.ID}</td>
<td>${newEmployee.title}</td>
<td>${newEmployee.salary}</td>
<td><button id='deleteButton' onclick='removeRow(event)'>DELETE</button></td>
</tr>`; // renders the submitted entry to the table on the DOM

  monthlyTotalElement = document.getElementById("monthlyTotal");
  monthlyTotalElement.innerHTML = `Total Monthly: $${sumMonthlyTotal.toFixed(
    2 // renders the monthly total on DOM
  )}`;
  if (sumMonthlyTotal > 20000) {
    monthlyTotalElement.style.backgroundColor = "red";
  } else if (sumMonthlyTotal < 20000) {
    monthlyTotalElement.style.backgroundColor = "";
  } // color changes to red if monthly sum is more than $20k
}

function removeRow(event) {
  let removedSalary = parseFloat(
    event.target.parentNode.previousElementSibling.textContent
  ); // finds the salary for the removed row, it is last td element before the delete button
  sumMonthlyTotal -= removedSalary / 12; // take it out of the running total
  let monthlyTotalElement = document.getElementById("monthlyTotal");
  monthlyTotalElement.innerHTML = `Total Monthly: $${sumMonthlyTotal.toFixed(
    2
  )}`; // render the loss to the dom
  event.target.closest("tr").remove(); // remove the row from the dom
  if (sumMonthlyTotal > 20000) {
    monthlyTotalElement.style.backgroundColor = "red";
  } else if (sumMonthlyTotal < 20000) {
    monthlyTotalElement.style.backgroundColor = "";
  } // color changes to red if monthly sum is more than $20k
}
