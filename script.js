console.log('Hello!');
const employeesArray = [
  { id: 1, Name: 'Alice', Position: 'Developer' },
  { id: 2, Name: 'Bob', Position: 'Designer' },
  { id: 3, Name: 'Charlie', Position: 'Manager' },
  { id: 4, Name: 'David', Position: 'Tester' },
];
const employeeListDiv = document.getElementById('employeeList');
const employees = employeesArray.map(
  (employee) =>
    `<div>
    <strong>Id:</strong>${employee.id}<br>
    <strong>Name:</strong>${employee.Name}<br>
    <strong>Position:</strong>${employee.Position}<br>
    <hr/>
  </div>`
);
employeeListDiv.innerHTML = employees.join(' ');
