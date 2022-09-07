/*
    String: collection of Characters or Sequence of Characters or
            array of Characters
    eg, name,email id and password etc
*/
//String Constant
var  a = "JavaScript is a Scripting Language"
// console.log(a)

//String using Loops
// //String using for Loop
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }


// //String using while Loop
// let i=0
// while(i<a.length){
//     console.log(a[i])
//     i++
// }

//String using do while Loop
// let i=0
// do{
//     process.stdout.write(`${a[i]} `)
//     i++
// }while(i<a.length);

// //string using for in loop
// for(let i in a){
//     console.log(a[i]);
// }

// //string using for of loop
// for(let i of a){
//     console.log(i);
// }


//string methods
//charAt() return character at any specific index
// console.log(a[0])
// console.log(a.charAt(0))
// console.log(a[1])
// console.log(a.charAt(1))
// console.log(a[2])
// console.log(a.charAt(2))

//charCodeAt(): return Unicode of any specific index value
// console.log(a.charCodeAt());
/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/

// var a = "Nitin Chauhan"
// for(let i in a){
//     console.log(`${a[i]} = ${a.charCodeAt(i)}`)
// }

/*
fromCharCode(): convert a Unicode into Character
 */
// for(let i=0;i<=10000;i++){
//     document.write(`${i} = ${String.fromCharCode(i)} | `)
// }

/*
indexOf()     :   return first index of any substring in string
                  and return -1 if item not found in string
lastIndexOf() :   return last index of any substring in string
                  and return -1 if item not found in string
search()      :   return first index of any substring in string
                  and return -1 if item not found in string
includes()    :   check whether a substring is exist in string or not
                  it return true of false
*/
// console.log(a.indexOf("Script"))
// console.log(a.search("Script"))
// console.log(a.lastIndexOf("Script"))
// console.log(a.includes("Script"))

// console.log(a.indexOf("PHP"))
// console.log(a.search("PHP"))
// console.log(a.lastIndexOf("PHP"))
// console.log(a.includes("PHP"))

// Copy a string into another
// var b = a
// console.log(`Copied String is '${b}'`)

//concat() : concat one or more strings in a string
// var a = "JavaScript"
// var b = "Hello"
// var c = "World"
// var d = a+b+c
// var e = a.concat(b,c)
// console.log(d)
// console.log(e)

/*
startsWith() : check whether a string start with specific
               sub string or not
endsWith()   : check whether a string end with specific sub
               string or not
*/
// var a = prompt("Enter the String :  ")
// if(a.startsWith("www."))
// document.write(`'${a}' is a Web URL`)
// else if(a.endsWith("@gmail.com"))
// document.write(`'${a}' is a Gmail ID`)
// else
// document.write(`'${a}' is a Normal Message`)

//toUpperCase()
//toLocaleUpperCase()

//toLowerCase()
//toLocaleLowerCase()
// console.log(a)
// console.log(a.toUpperCase())
// console.log(a.toLocaleUpperCase())
// console.log(a.toLowerCase())
// console.log(a.toLocaleLowerCase())

//substr() return a substring from pos to number of characters
//substring() return a substring from pos to pos  characters
//slice()

// console.log(a)
// console.log(a.substr(8,15))
// console.log(a.substring(8,15))
// console.log(a.slice(8,15))
// console.log(a.slice(15))
// console.log(a.slice(-15))


//repeat()  :   create number of copies of a string
//console.log(a.repeat(100))


//replace()
//replaceAll()
// console.log(a)
// console.log(a.replace(" ","_"))
// console.log(a.replaceAll(" ","_"))
// console.log(a.replaceAll("JavaScript","JS"))


//split() : used to split and convert it into an array
// console.log(a.split())
// console.log(a.split(" "))
// console.log(a.split("a"))

//trim() remove all leading white space characters from string from both side
//trimStart()remove all leading white space characters from string from left side   
//trimEnd()remove all leading white space characters from string from right side

// var a = "          Nitin Chauhan     "
// var b = a.trim()
// var c = a.trimStart()
// var d = a.trimEnd()
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)
// console.log(d.length)


/*
localeCompare() : compare two strings
                    return 0 if both string are same
                    return 1 if first string comes last in
                    alphabetical order
                    return -1 if first string comes firt in
                    alphabetical order
*/
// var a = "Nitin"
// var b = "Naman"
// console.log(a.localeCompare(b))
// console.log(b.localeCompare(a))
// console.log(a.localeCompare(a))

// var a = "Nitin"
// var b = "Nitin Chauhan"
// console.log(a.localeCompare(b))
// console.log(b.localeCompare(a))
