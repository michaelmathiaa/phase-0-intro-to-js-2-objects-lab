// Write your solution in this file!

const employee = {
    name: "Dominique",
    streetAddress: "1234 Coding Drive",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const nEmployee = {...employee};
    nEmployee[key] = value;
    return nEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const nEmployee = {...employee};
    delete nEmployee[key];
    return nEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
