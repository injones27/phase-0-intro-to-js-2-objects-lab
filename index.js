// Write your solution in this file!
const employee = {
    name: "Tom",
    streetAddress: "123 Drooly Lane",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee2 = { ...employee }
    employee2.name = "Sam"
    employee2.streetAddress = "11 Broadway"
    return employee2
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee
};

// function deleteFromEmployeeByKey(employee, key) {
//     const employee3 = { ...employee }
//     delete employee3.streetAddress
//     return employee3
// };

function deleteFromEmployeeByKey(employee, key) {
    const employee4 = { ...employee }
    delete employee4.name
    return employee4
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
};