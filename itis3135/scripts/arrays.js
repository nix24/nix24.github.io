//grabbing html elements
let employeeName = document.getElementById("employeeName"); //input
let employeeSalary = document.getElementById("employeeSalary"); //input
let addSalary = document.getElementById("add-salary"); //button
let displayResults = document.getElementById("display-results"); //button
let displaySalary = document.getElementById("display-salary"); //button
let avgSalary = document.getElementById("avg-salary"); //h3
let highestSalary = document.getElementById("highest-salary"); //h3
let arrayTable = document.getElementById("array-table"); //table
let employeeTable = document.getElementById("employee-table"); //tbody

//script utilizing arrays
people = [];
salaries = [];
//functions 

//when add salary button is clicked
addSalary.addEventListener("click", function () {
    //employee name should be string and employee salary should be int. MUST be filled out before adding to table
    if (employeeName.value === "" || employeeSalary.value === "") {
        alert("Please fill out all fields");
    }
    //if employeeSalary is not a number, alert user
    else if (isNaN(employeeSalary.value)) {
        alert("Please enter a number for salary");
    }
    //if employeeSalary is not at least higher than 1000, alert user
    else if (employeeSalary.value < 1000) {
        alert("Salary must be at least $1000 or higher");
    }
    else {
        displaySalary.disabled = false;
        //adds name and salary to arrays
        people.push(employeeName.value);
        salaries.push(employeeSalary.value);
        //clears input fields
        employeeName.value = "";
        employeeSalary.value = "";
    }
});
function salaryDisplay() {
    //shows table
    //displays employee name and salary
    for (let i = 0; i < people.length; i++) {
        //use insertRow to create a new row in the table
        let row = employeeTable.insertRow(i);
        //use insertCell to create a new cell in the row
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        //add text to the cell
        cell1.innerHTML = people[i];
        cell2.innerHTML = salaries[i];
        //delete every row before the prev one
        if (i > 0) {
            employeeTable.deleteRow(i - 1);
        }
    }
}
displaySalary.addEventListener("click", function () {
    salaryDisplay();
    displaySalary.disabled = true;
});

function avgDisplay() {
    let sum = 0;
    for (let i = 0; i < salaries.length; i++) {
        sum += parseInt(salaries[i]);
    }
    avg = sum / salaries.length;
    avgSalary.innerHTML = "Average Salary: $" + avg.toFixed(2);
}
function highestDisplay() {
    let highest = 0;
    //displays highest salary
    for (let i = 0; i < salaries.length; i++) {
        if (salaries[i] > highest) {
            highest = salaries[i];
        }
    }
    highestSalary.innerHTML = "Highest Salary: $" + highest + " (" + people[salaries.indexOf(highest)] + ")";
}
//clicking display results will display the average salary and the highest salary
displayResults.addEventListener("click", function () {
   //if there is no data in the array, alert user
    if (people.length === 0) alert("Please add data to table");
    else {
        avgDisplay();
        highestDisplay();
    }
});