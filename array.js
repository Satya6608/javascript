/*
  Array: 
    -> collection of items arrangement in contiguous order
    -> can contain duplicate items
    -> can contain differnt type value


    Note: Array index always start with ZERO
    syntax:
    var arrayObject=[item1,item2,item3,....,itemN]
 */

//1st type to create an array using array literal style
var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)

//2nd type to create an array using empty array
// var a = []
// a.push(10)
// a.push(20)
// a.push(30,40,50,60,70,80,90,100)
// console.log(a)

// var a = []
// var num = parseInt(prompt("Enter the Number of Item of Array : "))
// for(let i=1;i<=num;i++){
//   let data = Number(prompt(`Enter the Element Number ${i}`))
//   a.push(data)
// }
// document.write(a)

//3rd type : Array constructor
// var a = Array(10,20,30,40,50,60,70,80,90,100)
// console.log(a)


//4th type : Array constructor
// var a = Array()
// var num = parseInt(prompt("Enter the Number of Item of Array : "))
// for(let i=1;i<=num;i++){
//   let data = Number(prompt(`Enter the Element Number ${i}`))
//   a.push(data)
// }
// document.write(a)


//toString convert an array into string and use , as separator

/*
join() convert an array into string and you can specify
         seperator bydefault join function use , as seperator
*/
// console.log(a)
// console.log(a.toString())
// console.log(a.join())
// console.log(a.join(" "))
// console.log(a.join(":"))
// console.log(a.join("|"))



/*
array: push() pop() shift() unshift() splice() delete
push():   insert one or more then one element in last of an array
and return updated length of array
pop()     delete an element from last Position of an array and return deleted
array element
unshift() insert one or more then one element element in starting
of an array and return updated length of array
shift()   delete an element from first position of an array and return deleted
array element
splice()  used to insert or delete or update elements from any
specific position of array and return array of deleted
elements
syntax:
array.splice(pos,numberOfItemToDelete,[itemstoInsert])

delete  : it delete an item from array and leave empty space
*/
// console.log(a)
// console.log("Updated Length = ",a.push(110))
// console.log(a)
// console.log("Updated Length = ",a.push(120,130,140,150))
// console.log(a)

// console.log(a)
// console.log("Updated Length = ",a.unshift(5))
// console.log(a)
// console.log("Updated Length = ",a.unshift(1,2,3,4))
// console.log(a)

// console.log(a)
// console.log("Deleted Item = ",a.pop())
// console.log(a)
// console.log("Deleted Item = ",a.shift())
// console.log(a)

// console.log(a)
// console.log("Deleted Items = ",a.splice(3,0,35,36,37,38,39))
// console.log(a)

// console.log(a)
// console.log("Deleted Items = ",a.splice(3,5))
// console.log(a)

// console.log(a)
// console.log("Deleted Items = ",a.splice(3,5,35,36,37,38,39))
// console.log(a)

// console.log(a)
// delete a[5]
// console.log(a)


//slice() return a list of items from pos to pos
// console.log(a)
// console.log(a.slice(3,8))
// console.log(a.slice(8))
// console.log(a.slice(-8))

//concat()
// var a = [1,2,3,4,5]
// var b = [10,20,30,40,50]
// var c = [100,200,300,400,500]
// var d = ["Nitin","Amit","Sumit","Ankur","Kunal"]
// var e = a.concat(b,c,d)
// console.log(e)

//accessing array elements using normal for loop
// for(let i=0;i<a.length;i++){
//   console.log(a[i])
// }

//accessing array elements using while loop
// let i=0
// while(i<a.length){
//   console.log(a[i])
//   i++
// }


//accessing array elements using do while loop
// let i=0
// do{
//   console.log(a[i])
//   i++
// }while(i<a.length)


//accessing array elements using for in loop
// for(let i in a){
//   console.log(a[i])
// }


//accessing array elements using for of loop
// for(let i of a){
//   console.log(i)
// }

//entries() generate an iterator which contains key and value of items
//accessing array elements using entries()
// var b = a.entries()
// for(let item of b){
//   console.log(item);
// }



//find()  : return the item from array which pass a text
//findIndex():retunn the index of item from array which pass a test
//map()   : return an array of containg result for all elements of array
//filter(): return an array of items that pass a test

// var a = [15,17,18,24,1,75,5,17,45,13,65,50,23,50,19,20]
// // function check(item){
// //   return item%2==0
// // }

// function check(item){
//   var flag=false
//   for(let i=2;i<=item**0.5;i++){
//     if(item%i==0){
//       flag=true
//       break
//     }
//   }
//   if(flag==false && item>=2)
//   return true
//   else
//   return false
// }
// console.log(a.find(check))
// console.log(a.findIndex(check))
// console.log(a.map(check))
// console.log(a.filter(check))

//includes() return true if array conatins an item else retur false
//indexOf()  return lowest index of item from array and return -1
//            if item not found in Array
//lastIndexOf()  return highest index of item from array and
//               return -1 if item not found in Array
// var a = [10,20,30,30,40,50,30,60,30,70,80,30,90,100,30,110,120,130]
// console.log(a.includes(50))
// console.log(a.includes(500))
// console.log(a.indexOf(30))
// console.log(a.lastIndexOf(30))


//reverse()
// console.log(a)
// a.reverse()
// console.log(a)


//reduce
// a = [10,20,30,40,50,60,70,80,90,100]
// function fun(total,item){
//   return total+item
// }
// console.log(a.reduce(fun,0))


//sort()
//var a = [15,47,81,91,81,2,11,111,1000,324,65,18,45,65,15,65,48,95,5,4,5,6,2,4,5,8,4,5,81,5,65,84,51,65,5,65,65,54,54,84,478,15,65]
//var a = ["Nitin","Naman","Aman","Rohit","Sumit","Saurabh","Kunal"]


// console.log(a)
// function fun(x,y){
//   return y-x
// }
// a.sort(fun)
// console.log(a)

// console.log(a)
// a.sort((x,y)=>x-y)
// console.log(a)


//Array Destructuring

// var a = [1001,"Nitin Chauhan","Trainer",78900,"Noida","UP"]
// var [id,name,dsg,salary,city,state] = a
// console.log("Id           = ",id)
// console.log("Name         = ",name)
// console.log("Designation  = ",dsg)
// console.log("Salary       = ",salary)
// console.log("City         = ",city)
// console.log("State        = ",state)

