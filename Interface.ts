interface Person {
    firstName: string,
    lastName: string,
    display: () => string
}

var customer: Person = {
    firstName: "Kol",
    lastName: "Mikaelson",
    display: () => {
        return "Hello there"
    }
}

console.log("Customer object : ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.display())

var employee: Person = {
    firstName: "Kai",
    lastName: "Parker",
    display: () => {
        return "How u doing"
    }
}

console.log("Employee object : ")
console.log(employee.firstName)
console.log(employee.lastName)
// console.log(employee.display())