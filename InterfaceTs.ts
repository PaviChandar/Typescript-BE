interface Individual{
    name:string,
    age:number
}

interface Employee extends Individual{
    gender:string,
    empId:string
}

let emp = <Employee>{}
emp.name = "Elena"
emp.age = 21,
emp.gender = "Female"
emp.empId = "ACE9870"

console.log("Employee name : ", emp.name);
console.log("Employee Id : ",emp.empId);