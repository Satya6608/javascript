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
// var a = parseInt(prompt("Enter the First Number :  "))
// var b = parseInt(prompt("Enter the Second Number :  "))
// var c = parseInt(prompt("Enter the Third Number :  "))
// var d = parseInt(prompt("Enter the Fourth Number :  "))
// var e = parseInt(prompt("Enter the Fifth Number :  "))
// if(a>=b && a>=c && a>=d && a>=e)
// document.write(`${a} is Greatest`)
// else if(b>=c && b>=d && b>=e)
// document.write(`${b} is Greatest`)
// else if(c>=d && c>=e)
// document.write(`${c} is Greatest`)
// else if(d>=e)
// document.write(`${d} is Greatest`)
// else
// document.write(`${e} is Greatest`)

// var ch = prompt("Enter the Character :  ")
// if(ch.length!=1)
// document.write(`'${ch}' is Invalid Input<br>Input Should be 1 Character`)
// else{
//     if(ch>='a' && ch<='z'){
//         if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
//         document.write(`'${ch}' is Lower Case Vowel`)
//         else
//         document.write(`'${ch}' is Lower Case Consonent`)
//     }
//     else if(ch>='A' && ch<='Z'){
//         if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
//         document.write(`'${ch}' is Upper Case Vowel`)
//         else
//         document.write(`'${ch}' is Upper Case Consonent`)
//     }
//     else if(ch>='0' && ch<='9')
//     document.write(`'${ch}' is Digit`)
//     else if(ch==' ')
//     document.write(`Space`)
//     else
//     document.write(`'${ch}' is Special Character`)
// }

// var year = parseInt(prompt("Enter the Year Number :  "))
// if(year%100==0){
//     if(year%400==0)
//     document.write(`${year} is Leap Year`)
//     else
//     document.write(`${year} is not a Leap Year`)
// }
// else{
//     if(year%4==0)
//     document.write(`${year} is Leap Year`)
//     else
//     document.write(`${year} is not a Leap Year`)
// }

// var year = parseInt(prompt("Enter the Year Number :  "))
// if(year%400==0)
// document.write(`${year} is Leap Year`)
// else if(year%4==0 && year%100!=0)
// document.write(`${year} is Leap Year`)
// else
// document.write(`${year} is not a Leap Year`)


// var year = parseInt(prompt("Enter the Year Number :  "))
// if(year%400==0 || year%4==0 && year%100!=0)
// document.write(`${year} is Leap Year`)
// else
// document.write(`${year} is not a Leap Year`)


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

// var num = parseInt(prompt("Enter the Day Number :  "))
// switch (num) {
//     case 1:
//         document.write("Monday")
//         break
//     case 2:
//         document.write("Tuesday")
//         break
//     case 3:
//         document.write("Wednesday")
//         break
//     case 4:
//         document.write("Thursday")
//         break
//     case 5:
//         document.write("Friday")
//         break
//     case 6:
//         document.write("Saturday")
//         break
//     case 7:
//         document.write("Sunday")
//         break
//     default:
//         document.write("Invalid Choice")
// }


// var a = prompt("Enter the First Number : ")
// var b = prompt("Enter the Second Number : ")
// var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress / for Division\nPress * for Muliplication\nPress % for Remainder\nPress ** for Power\nEnter Your Choice :  ")
// switch (ch) {
//     case '+':
//         document.write(`${a} + ${b} = ${a + b}`)
//         break
//     case '-':
//         document.write(`${a} - ${b} = ${a - b}`)
//         break
//     case '*':
//         document.write(`${a} * ${b} = ${a * b}`)
//         break
//     case '/':
//         document.write(`${a} / ${b} = ${a / b}`)
//         break
//     case '%':
//         document.write(`${a} % ${b} = ${a % b}`)
//         break
//     case '**':
//         document.write(`${a} ** ${b} = ${a ** b}`)
//         break
//     default:
//         document.write(`Invalid Choice`)
// }

/*
Iteration Statements or Loops:
used to iterate or repeat number of statements n times

1. for loop: use when we know number of iterations
syntax:

    for(Initialization;condition;updation)
    {


        -----------
        -----------
        number of statements
        -----------
        -----------
    }
 */
// for(var i=1;i<=10;i++){
//     document.write(`${i} Hello World<br>`)
// }

/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
4. WAP to check whether a number is prime number or not
 */

// var num = parseInt(prompt("Enter the Number :  "))
// var flag=false
// for(let i=2;i<=num**0.5;i++){
//     if(num%i==0){
//         flag=true
//         break
//     }
// }
// if(flag==false && num>=2)
// document.write(`${num} is Prime Number`)
// else
// document.write(`${num} is not a Prime Number`)

/*
while Loop:
used when we does not have a fix idea of number of iterations
syntax:
    Initialization
    while(condition)
    {
        -----
        -----
        number of statements
        -----
        -----
        updation
    }
 */
// let i = 1
// while(i<=10){
//     console.log(`${i} Hello World`)
//     i++
// }

//fibonacci Series:0    1   1   2   3   5   8   13  21  34  55  89  144.......
// var a = 0
// var b = 1
// var sum = a+b
// var num = parseInt(prompt("Enter the Last Term Range of Fibonacci Series :  "))
// document.write(`${a} ${b} `)
// while(sum<=num){
//     document.write(`${sum} `)
//     a=b
//     b=sum
//     sum=a+b
// }

/*
num=100 
a   =   0   1   1   2   3   5   8   13  21  34  55
b   =   1   1   2   3   5   8   13  21  34  55  89
sum =   1   2   3   5   8   13  21  34  55  89  144
op:0 1  1   2   3   5   8   13  21  34  55  89
 */

// var num=parseInt(prompt("Enter the Number :  "))
// var sum = 0
// while(num!=0){          //1425  142     14      1       0
//     let r = num%10      //5     2       4       1    
//     sum = sum+r         //0+5=5 5+2=7   7+4=11  11+1=12
//     num=parseInt(num/10)//142   14      1       0
// }
// document.write(`sum = ${sum}`)


// var num = parseInt(prompt("Enter the Number : "))
// var rev = 0
// while(num!=0){              //147       14          1           0
//     let r = num%10          //7         4           1
//     rev = rev*10+r          //0*10+7=7  7*10+4=74   74*10+1=741
//     num = parseInt(num/10)  //14        1           0
// }
// document.write(`Reveser = ${rev}`)

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

// var i = 1
// do{
//     console.log(`${i} Hello World`)
//     i++
// }while(i<=10)

// do {
//     var a = parseInt(prompt("Enter the First Number :  "))
//     var b = parseInt(prompt("Enter the Second Number :  "))
//     var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice : ")
//     switch (ch) {
//         case '+':
//             console.log(`${a} + ${b} =  ${a + b}`)
//             break
//         case '-':
//             console.log(`${a} - ${b} =  ${a - b}`)
//             break
//         case '*':
//             console.log(`${a} * ${b} =  ${a * b}`)
//             break
//         case '/':
//             console.log(`${a} / ${b} =  ${a / b}`)
//             break
//         case '%':
//             console.log(`${a} % ${b} =  ${a % b}`)
//             break
//         case '**':
//             console.log(`${a} ** ${b} =  ${a ** b}`)
//             break
//         default:
//             console.log(`Invalid Choice`)
//             break
//     }
//     ch = prompt("Press n to Exit\nPress any other key to Continue :  ")
// }while(ch!='n')


/*
    Nested loops:
    Loops within Loops:
 */
// for(let num=1;num<=20;num++){
//     console.log(`Table of ${num} is`)
//     for(let i=1;i<=10;i++){
//         console.log(`${num} * ${i} = ${num*i}`)
//     }
// }

var start = parseInt(prompt("Enter the Range\nStart from : "))
var end = parseInt(prompt("to : "))
var c = 0
for(let num=start;num<=end;num++){
    let flag = false
    for(let i=2;i<=num**0.5;i++){
        if(num%i==0){
            flag=true
            break
        }
    }
    if(flag==false && num>=2){
        document.write(`${num} `)
        c++
    }
}
document.write(`<br>Total Prime Numbers = ${c}`)


//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)
