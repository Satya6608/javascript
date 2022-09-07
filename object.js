/*
objects :   ->  object can store information in pair of keys and
                values
            ->  keys must be unique
            ->  values may be duplicate
            ->  if same key is used multiple time then only last
                key will be used
*/
//object literal 
var emp = {
    id : 1001,
    name:"Nitin Chauhan",
    dsg:"Trainer",
    salary:89000,
    city:"Noida",
    state:"UP"
}
//console.log(emp)


//Empty object literal 
// var emp = {}
// emp.id = 1001,
// emp['name']="Nitin Chauhan",
// emp['dsg']="Trainer",
// emp.salary=89000,
// emp.city="Noida",
// emp['state']="UP"
// console.log(emp)



//new Object() 
// var emp = new Object()
// emp.id = 1001,
// emp['name']="Nitin Chauhan",
// emp['dsg']="Trainer",
// emp.salary=89000,
// emp.city="Noida",
// emp['state']="UP"
// console.log(emp)


//Accessing Object Values with help of keys
// console.log(emp.id)
// console.log(emp.name)
// console.log(emp['dsg'])
// console.log(emp['salary'])



// Accessing Object values through Loop 
// for(let key in emp){
//     console.log(`${key} = ${emp[key]}`)
//     document.write(`${key} = ${emp[key]}`)
// }


// adding an item to existing object
// console.log(emp)
// emp.email = "vishankchauhan@gmail.com"
// emp['phone']="9873848046"
// console.log(emp)


//deleting object item
// console.log(emp)
// delete emp.name
// delete emp['dsg']
// console.log(emp)



//Nesting of Objects

// var emp = {
//     id:1001,
//     name:"Nitin Chauan",
//     dsg:"Trainer",
//     salary:78900,
//     subject:["Mern Stack","Mean Stack","PHP Full Stack","Python Full Stack"],
//     address:{
//         house:"85k",
//         street:"5E",
//         locality:"Village Sample",
//         pin:121002,
//         city:"Faridabad",
//         state:"Haryana"
//     }
// }
// // console.log(emp);
// // console.log(emp.address);
// // console.log(emp.address.city);
// // console.log(emp.subject)
// console.log(emp.subject[2])

//function in Objects
// var emp = {
//     id:1001,
//     name:"Nitin Chuahan",
//     salary:78900,
//     city:"Noida",
//     state:"UP",
//     display(){
//         console.log(
//             `
//                 Id              :       ${emp.id}
//                 Name            :       ${emp.name}
//                 Salary          :       ${emp.salary}
//                 City            :       ${emp.city}
//                 State           :       ${emp.state}
//             `
//         )
//     }
// }
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chuahan",
//     salary:78900,
//     city:"Noida",
//     state:"UP",
//     display(){
//         console.log(
//             `
//                 Id              :       ${this.id}
//                 Name            :       ${this.name}
//                 Salary          :       ${this.salary}
//                 City            :       ${this.city}
//                 State           :       ${this.state}
//             `
//         )
//     }
// }
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chuahan",
//     salary:78900,
//     city:"Noida",
//     state:"UP",
//     display:function(){
//         console.log(
//             `
//                 Id              :       ${this.id}
//                 Name            :       ${this.name}
//                 Salary          :       ${this.salary}
//                 City            :       ${this.city}
//                 State           :       ${this.state}
//             `
//         )
//     }
// }
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chuahan",
//     salary:78900,
//     city:"Noida",
//     state:"UP",
//     display:()=>{
//         console.log(
//             `
//                 Id              :       ${emp.id}
//                 Name            :       ${emp.name}
//                 Salary          :       ${emp.salary}
//                 City            :       ${emp.city}
//                 State           :       ${emp.state}
//             `
//         )
//     }
// }
// emp.display()

//getter and setter
//get

// var emp = {
//     id:1001,
//     name:"Nitin Chuahan",
//     salary:78900,
//     city:"Noida",
//     state:"UP",
//     get display(){
//         console.log(
//             `
//                 Id              :       ${emp.id}
//                 Name            :       ${emp.name}
//                 Salary          :       ${emp.salary}
//                 City            :       ${emp.city}
//                 State           :       ${emp.state}
//             `
//         )
//     }
// }
// emp.display


//set
// var emp = {
//     id:1001,
//     name:"Nitin Chuahan",
//     city:"Noida",
//     state:"UP",
//     set setSalary(num){
//         this.salary=num
//     },
//     get display(){
//         console.log(
//             `
//                 Id              :       ${this.id}
//                 Name            :       ${this.name}
//                 Salary          :       ${this.salary}
//                 City            :       ${this.city}
//                 State           :       ${this.state}
//             `
//         )
//     }
// }
// emp.setSalary = 89000
// emp.display

//object destructuring
console.log(
    `
        Id              :       ${emp.id}
        Name            :       ${emp.name}
        Salary          :       ${emp.salary}
        City            :       ${emp.city}
        State           :       ${emp.state}
    `
)

var {id,name,salary,city,state} = emp
console.log(
    `
        Id              :       ${id}
        Name            :       ${name}
        Salary          :       ${salary}
        City            :       ${city}
        State           :       ${state}
    `
)

//object prototype
var Employee = function(id,name,dsg,salary,city,state){
    this.id=id
    this.name=name
    this.dsg=dsg
    this.salary=salary
    this.city=city
    this.state=state
}
var e1 = new Employee(1001,"Nitin Chauhan","Trainer",78900,"Noida","UP")
var e2 = new Employee(1002,"Rahul Sharma","Trainer",45650,"Faridabad","Haryana")
var e3 = new Employee(1003,"Gaurav Jain","Trainer",12345,"Panipat","Haryana")
console.log(e1)
console.log(e2)
console.log(e3)