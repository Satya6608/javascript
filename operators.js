/*
Operators:  some special symbols which are used
            to perform some predefine operations
            on operands(variables,constants etc i.e
            a value)
Category on Basis of Operands:
1. Unary    :   Required only one operand
2. Binary   :   Required two operands
3. Ternary  :   Required three Operands

Types:
1. Arithmetic Operators
2. Assignment Operator
3. Composite/Compound/Short Hand Operators
4. Relational Operator
5. Logical Operators
6. Bitwise Operators
7. Conditional Operator
8. Increment Operator
9. Decrement Operator
10. MISC. Operator
 */

/*
Arithmetic Operators:
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division(Quotient)
    %   Division(Remainder)
    **  Power

    Category: Binary
    Precedence: L to R
    Priority: 
                1. Brackets
                2. **
                3. * / %
                4. + -
 */
// var a = 10*5/25*15%20*5%60/10*7-20*5%70/6*10/5+5*2**5/10*(20/2**3)
// console.log(a)

/*
10*5/25*15%20*5%60/10*7-20*5%70/6*10/5+5*2**5/10*(20/2**3)
10*5/25*15%20*5%60/10*7-20*5%70/6*10/5+5*2**5/10*(20/8)
10*5/25*15%20*5%60/10*7-20*5%70/6*10/5+5*2**5/10*2.5
10*5/25*15%20*5%60/10*7-20*5%70/6*10/5+5*32/10*2.5
50/25*15%20*5%60/10*7-20*5%70/6*10/5+5*32/10*2.5
2*15%20*5%60/10*7-20*5%70/6*10/5+5*32/10*2.5
30%20*5%60/10*7-20*5%70/6*10/5+5*32/10*2.5
10*5%60/10*7-20*5%70/6*10/5+5*32/10*2.5
50%60/10*7-20*5%70/6*10/5+5*32/10*2.5
50/10*7-20*5%70/6*10/5+5*32/10*2.5
5*7-20*5%70/6*10/5+5*32/10*2.5
35-20*5%70/6*10/5+5*32/10*2.5
35-100%70/6*10/5+5*32/10*2.5
35-30/6*10/5+5*32/10*2.5
35-5*10/5+5*32/10*2.5
35-50/5+5*32/10*2.5
35-10+5*32/10*2.5
35-10+160/10*2.5
35-10+16*2.5
35-10+40
25+40
65
 */
// console.log(15+6)
// console.log(15+"Hello World")
// console.log("15"+"6")
// console.log("15"+6)

// console.log(15-6)
// console.log(15-"Hello World")
// console.log("15"-"6")
// console.log("15"-6)

// console.log(15*6)
// console.log(15*"Hello World")
// console.log("15"*"6")
// console.log("15"*6)

// console.log(15/6)
// console.log(15/"Hello World")
// console.log("15"/"6")
// console.log("15"/6)

// console.log(15**6)
// console.log(15**"Hello World")
// console.log("15"**"6")
// console.log("15"**6)

/*
Assignment Operator(=):
used to assign value of RHS operand to LHS operand
eg. sum=a+b;    //valid
eg. a+b=sum;    //invalid
eg. a=b=c;      //valid

Category: Binary
Precedence: R to L
 */

/* Composite/Compound/Short Hand Operators
                combination of Assignmnet Operator with other 
                operators
    a=a+b         =>      a+=b
    a=a-b         =>      a-=b
    a=a*b         =>      a*=b
    a=a/b         =>      a/=b
    a=a%b         =>      a%=b
    a=a**b        =>      a**=b
*/

/*
    Relational Operator:
    used to compare two operands
    <       Less Than
    <=      Less Than Equal
    >       Greater Than 
    >=      Greater Than Equal
    !=      not Equal       (check only value)
    !==     not Identical   (check value and data type both)
    ==      Equal           (check value only)
    ===     Identical       (check valye and data type both)
 */
// console.log(10<20)      //true
// console.log(10<=20)     //true
// console.log(10<=2)      //false

// console.log(10>20)      //false
// console.log(10>=20)     //false
// console.log(10>=2)      //true

// console.log(10==10)        //true
// console.log(10=="10")      //true
// console.log(10==10.0)      //true

// console.log(10===10)        //true
// console.log(10==="10")      //false
// console.log(10===10.0)      //true

// console.log(10!=10)        //false
// console.log(10!="10")      //false
// console.log(10!=10.0)      //false
// console.log(10!=20)        //true

// console.log(10!==10)        //false
// console.log(10!=="10")      //true
// console.log(10!==10.0)      //false
// console.log(10!==20)        //true
/*
    Logical Operators:
    used to make a compound condition

    Operator    symbol  operation               type    precedence
    Logical And &&      return true if all      binary  L to R
                        conditions are true
                        else return false
    Logical Or  ||      return true if atleast  binary  L to R
                        one condition is true
                        else return false
    Logical Not !       return true if condition Unary  R to L
                        is false and return 
                        false if condition is 
                        true
 */
// console.log(10 && 20)   //true      20
// console.log(10 && 0)    //false     0
// console.log(0 && 20)    //false     0
// console.log(0 && 0)     //false     0

// console.log(10 || 20)   //true      10
// console.log(10 || 0)    //true      10
// console.log(0 || 20)    //true      20
// console.log(0 || 0)     //false     0

// console.log(!10)           //false
// console.log(!0)            //true


/*
Bitwise Operator:
Operators               Symbols     Type    Precedence
1. Bitwise And          &           Binary  L to R
2. Bitwise Or           |           Binary  L to R
3. Bitwise Xor          ^           Binary  L to R
4. Bitwise Left Shift   <<          Binary  L to R
5. Bitwise Right Shift  >>          Binary  L to R
6. Bitwise Negation     ~,-         Unary   R to L

a   b   a&b a|b a^b(a|b - a&b)
0   0   0    0   0
0   1   0    1   1
1   0   0    1   1
1   1   1    1   0
 */
// var a = 37
// var b = 49
// var c = a&b
// var d = a|b
// var e = a^b
// console.log(c,d,e);
/*
a = 37  :   1   0   0   1   0   1
b = 49  :   1   1   0   0   0   1
----------------------------------------
c = a&b :   1   0   0   0   0   1
            32  16  8   4   2   1
            ----------------------------
            32  0   0   0   0   1   =>33
----------------------------------------
d = a|b :   1   1   0   1   0   1
            32  16  8   4   2   1
            ----------------------------
            32  16  0   4   0   1   =>53
----------------------------------------
e = a^b :   0   1   0   1   0   0
            32  16  8   4   2   1
            ----------------------------
            0   16  0   4   0   0   =>20
*/
/*
Bitwise Left Shift and Right Shift
Biwise Left Shift
        num<<n
    i.e num*2**n
    eg. 25<<10
    eg. 25*2**10
    i.e 25*1024
    i.e 25600

Bitwise Right Shift
        num>>n
    i.e num/2**n
    eg. 2500>>5
    eg. 2500/2**5
    i.e 2500/32
    i.e 78
 */
// console.log(25<<5)
// console.log(25<<6)
// console.log(25<<7)
// console.log(25<<8)

// console.log(2500>>5)
// console.log(2500>>6)
// console.log(2500>>7)
// console.log(2500>>8)
/*
Bitwise Negation Operator:
                    ~
                    (-x-1)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        -1  -1                     -1   -1
        ----------------------------------
            -21                         29
                    -
                    (-x)
        +ve 20                     -ve  -30

        -ve -20                    +ve  30
        ----------------------------------
            -20                         30
*/
// var a = 20
// var b = -30
// console.log(~a)
// console.log(~b)
// console.log(-a)
// console.log(-b)
/*

Conditional Operator or Ternary Operator(?:)
used when we have to execute a statement out of
two statements according to a condition
syntax:
condition?Statement1:Statement2;
            True      False
 */
// var a = parseInt(prompt("Enter the Number :  "))
// a%2==0?document.write(`${a} is Even`):document.write(`${a} is Odd`)


/*
Number()    :   convert a value into number
parseInt()  :   convert a value into integer
parseFloat()  :   convert a value into float

Math.floor()    :   return floor value  eg. Math.floor(1.9) ans 1
Math.ceil()     :   return ceil value   eg. Math.ceil(1.1) ans 2
Math.round()    :   return round off value  Math.round(1.9) ans 2
                                            Math.round(1.1) and 1
 */
/*
                Increment(++)  i.e x=x+1
        Pre-Increment           Post-Increment
        (++oprand)              (operand++)
        -------------           --------------
        First Increment         first Assignment
        then Assignment         then Increment

                 Decrement(--)  i.e x=x-1
        Pre-Decrement           Post-Decrement
        (--oprand)              (operand--)
        -------------           --------------
        First Decrement         first Assignment
        then Assignment         then Decrement
 */
// var a = 10
// var b = a++ //b=10  a=11
// var c = ++a //a=12  c=12
// var d = a-- //d=12  a=11
// var e = --a //a=10  e=10
// a--         //a=9
// --a         //a=8
// console.log(a,b,c,d,e)


// var a = 10
// var b = a++ + ++a
// console.log(a,b)

// var a = 10
// var b = --a - a--
// console.log(a,b)

var a = 10
var b = --a - --a
var c = a-- + a-- + b-- - --b
console.log(a,b,c)
