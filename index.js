// Write your solution in this file!
const employee = {
    name: "Nur",
    street: "Nyeri rd"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newobj ={...employee};
    newobj[key] = value;

    return newobj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee


}

function deleteFromEmployeeByKey(employee, k){
    const kanu = {...employee}
    delete kanu[k]
    return kanu


}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
    




}