/*
Flow Control Statements or Decision Making Statements
1. Conditional Statements or Selection Statements:
    1. if Statement
    2. if else Statement
    3. Netsed if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statements or Loops:
    1. for Loop 
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. Continue Statement

if Statement: used when execution of a Statement Block depend
              on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement
      block
 */
// if(false){
//     console.log("Line1")
//     console.log("Line2")
//     console.log("Line3")
// }
// console.log("Line4")
// console.log("Line5")
// console.log("Line6")

/*
if else Statement: used when execution of one Statement Block
                   out of two statement blocks depend on a 
                   condition
syntax:
if(condition){
    -----
    number of Statements block1
    -----
}
else{
    -----
    number of Statements block2
    -----
}
 */
// if(false){
//     console.log("Line1")
//     console.log("Line2")
//     console.log("Line3")
// }
// else{
//     console.log("Line4")
//     console.log("Line5")
//     console.log("Line6")
// }

// var num = Number(prompt("Enter the Number : "))
// if(num%2==0)
// document.write(`${num} is Even`)
// else
// document.write(`${num} is Odd`)


// var num = parseInt(prompt("Enter the Number :  "))
// //var n = Math.sqrt(num)
// var n = num**0.5
// if(n*n==num)
// document.write(`${num} is Perfect Square`)
// else
// document.write(`${num} is not Perfect Square`)



/*
Nested if Else: if else within if else Statement
syntax:
    if(condition1){
        ------
        if(condition2){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
    else
    {
        ------
        if(condition3){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
 */

// var a  = parseInt(prompt("Enter the First Number :  "))
// var b  = parseInt(prompt("Enter the Second Number :  "))
// var c  = parseInt(prompt("Enter the Third Number :  "))
// if(a<b){
//     if(a<c)
//     document.write(`${a} is Smallest`)
//     else
//     document.write(`${c} is Smallest`)
// }
// else{
//     if(b<c)
//     document.write(`${b} is Smallest`)
//     else
//     document.write(`${c} is Smallest`)
// }

/*
 if else if ladder : when we have n number of conditions
 syntax:
    if(condition1){
        -----
        -----
    }
    else if(condition2){
        -----
        -----
    }
    else if(condition3){
        -----
        -----
    }
    else if(condition4){
        ------
        ------
    }
    --
    --
    --
    else if(conditionN){
        ------
        ------
    }
    else{
        ------
        ------
    }
 */
/*
var a = parseInt(prompt("Enter the First Number :  "))
var b = parseInt(prompt("Enter the Second Number :  "))
var c = parseInt(prompt("Enter the Third Number :  "))
var d = parseInt(prompt("Enter the Fourth Number :  "))
var e = parseInt(prompt("Enter the Fifth Number :  "))
if(a>=b && a>=c && a>=d && a>=e)
document.write(`${a} is Greatest`)
else if(b>=c && b>=d && b>=e)
document.write(`${b} is Greatest`)
else if(c>=d && c>=e)
document.write(`${c} is Greatest`)
else if(d>=e)
document.write(`${d} is Greatest`)
else
document.write(`${e} is Greatest`)
*/
/*
Switch Case Statement:
    used to make a menu based program
syntax:
    switch(expression){
        case constant1:
            ------
            ------
            break
        case constant2:
            ------
            ------
            break
        case constant3:
            ------
            ------
            break
        -
        -
        case constantN:
            ------
            ------
            break
        default:
            ------
            ------
    }
 */
/*
Iteration Statements or Loops:
used to iterate or repeat number of statements n times

1. for loop: use when we know number of iterations
syntax:

    for(Initialization;condition;updation){
        -----------
        -----------
        number of statements
        -----------
        -----------
    }
 */

/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
4. WAP to check whether a number is prime number or not
 */

/*
while Loop:
used when we does not have a fix idea of number of iterations
syntax:
    Initialization
    while(condition){
        -----
        -----
        number of statements
        -----
        -----
        updation
    }
 */


/*
while Loop Questions:
1. WAP to calculate sum of even and odd digits of a specific number
2. WAP to count even and odd digits in a number
3. WAP to reverse a number
4. WAP to check whether a number is NEON number or not
    (1,9)
5. WAP to check whether a number is Armstrong number or not 
    (1,153,370,371,407)
6. WAP to check whether a number is Palindrome Number or not
    (121,1234321)
7. WAP to check whether a number is Magical Number or not
    (81,1458,1729)
 */

/*
do while Loop:
used when we have to execute number of statements atleast one
time whether condition is false

syntax:
Initialization
do
{
    ------
    ------
    number of Statements
    ------
    ------
    updation
}while(condition);
 */

/*
Nested loops:
Loops within Loops:
 */




//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)
