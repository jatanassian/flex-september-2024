# Get Employees by Department (Arrays Practice)

You are working on a Node.js application that manages a list of employees in a company.
The employee data is represented as an array of arrays, where each inner array contains information about an employee.
The inner array follows the format [name, position, department].

Your task is to implement a function that retrieves all the employees in a specific department from the employee data array.
Write a function called `getEmployeesByDepartment` that takes two parameters: employees (the array of employee data) and department (the department name).
The function should return an array of employees who belong to the specified department.

Here are the requirements for the function:

- The employees array contains multiple inner arrays, where each inner array represents an employee and contains three elements: name, position, and department.
  For example: `['John Doe', 'Software Engineer', 'Engineering']`.
- The function should search through the employees array and extract all the employees who belong to the specified department.
- The function should return an array of employee names who belong to the specified department.
- If there are no employees in the specified department, the function should return an empty array.
- The function should not modify the original employees array.
- Your task is to implement the `getEmployeesByDepartment` function according to the requirements.

Here is an example data-set:

```js
const employees = [
  // Name       // Position        // Department
  ['John Doe', 'Software Engineer', 'Engineering'],
  ['Jane Smith', 'Product Manager', 'Product'],
  ['Mike Johnson', 'Sales Executive', 'Sales'],
  ['Emily Brown', 'HR Coordinator', 'Human Resources'],
  ['David Lee', 'Quality Assurance', 'Engineering']
  // 0              // 1              // 2
];
```

Please provide your solution below.

```js
/*
 * Retrieve list of employee names from a specified department
 *
 * @param {string[][]} employees - Array of employees
 * @param {string} department - Name of the target department
 * @return {string[]} Array of employee names from that department
 */
function getEmployeesByDepartment(employees, department) {
  const employeeNames = [];

  // First solution
  // - Loop through employees array
  // employees.forEach((employee) => {
  // 	// - If employee array includes the department name
  // 	if (employee.includes(department)) {
  // 		// - Push the name into employeeNames array
  // 		employeeNames.push(employee[0]);
  // 	}
  // })
  // => What about the edge case of an employee with a name or position "Engineering", but in a different department?
  // => Nested for loop, not ideal (Big O)

  // Second solution
  employees.forEach(employee => {
    const employeeDepartment = employee[2];

    if (employeeDepartment === department) {
      const employeeName = employee[0];
      employeeNames.push(employeeName);
    }
  });

  return employeeNames;
}

console.log(
  'getEmployeesByDepartment(employees, "Engineering")',
  getEmployeesByDepartment(employees, 'Engineering')
); // ['John Doe', 'David Lee']
console.log(
  'getEmployeesByDepartment(employees, "Test")',
  getEmployeesByDepartment(employees, 'Test')
); // []
```
