
var employeeList = [
    {
        name: "Gopi",
        age: 25
    },
    {
        name: "Umar",
        age: 27
    },
    {
        name: "Mani",
        age: 23
    }
]


function findIndex(empList, empName) {

    for (let i = 0; i < empList.length; i++) {
        if (empList[i].name === empName) {
            return i;

        }

    }

}
console.log(findIndex(employeeList, "Gopi"))