//console.log("Hello World");

/*
JavaScript Basics:
    1. Keywords
    2. Identifier
    3. Data Types
    4. Variables
    5. Constant/Literals
    6. Tokens
    7. Input/Output
    8. Operator

    keywords and reserved words
    abstract	arguments	await*	boolean
    break	byte	case	catch
    char	class*	const	continue
    debugger	default	delete	do
    double	else	enum*	eval
    export*	extends*	false	final
    finally	float	for	function
    goto	if	implements	import*
    in	instanceof	int	interface
    let*	long	native	new
    null	package	private	protected
    public	return	short	static
    super*	switch	synchronized	this
    throw	throws	transient	true
    try	typeof	var	void
    volatile	while	with	yield

    Identifiers:
        name of programming entities like variables,functions,
        objects,classes etc
    
    Rules of Identifiers:
        1. we can't use any keywords
        2. we can't use any digit as prefix of identifier
           but we can use digit in postix
        3. We can't use any special character except underscore
        4. We can't use same name for more the one item of same
           Statement block
    
    Data Types:
    Number : any whole or fractional number like 
             10 25.36 -25.35 -50 +25.36 +25
    String : Collection of Characters
             like 'sample' "example"
    boolean : true false
    --------------------------------------------
    null
    undefined
    object
    bigint
    array

    Data Representation:
    1. Variable:
        used when data is not fixed
        variables are names of memory locations in RAM which 
        contains some informations
        or
        variables are placeholder for data in RAM
        or 
        variables are data containers
        syntax:
            var variableName=value;     //function level
            let variableName=value;     //block level
            const variableName=value;   //block level and read
                                        // only
    2. Constant\Literals:
        used when data is fixed
        boolean: true false
        number : 10 +20 -25 15.36 +25.25 -65.25
        string : 'sample' "sample"
 */
// var a = 10
// var b = 15.36
// var c = true
// var d = false
// var e = 'Hello World'
// var f = "JavaScript is a Scripting Language"
// console.log(a,typeof(a))
// console.log(b,typeof(b))
// console.log(c,typeof(c))
// console.log(d,typeof(d))
// console.log(e,typeof(e))
// console.log(f,typeof(f))

/*
    Tokens:
    smallest Entity of any program like identifiers,
    constants,keywords, operators, punctuators(, space
        : ; [] () {} etc)
    
    var a=10;
    var     =>  keyword
    a       =>  identifier(variable)
    =       =>  operator
    10      =>  constant
    ;       =>  punctuator
 */

    /*
    Output Instrucions:
    console.log(): used as output instructions
    */
// var a = 10
// var b = 20
// var sum = a+b
// console.log(sum)
// console.log("sum =",sum)
// console.log(a,"+",b,"=",sum)
// console.log(a+" + "+b+" = "+sum)
// console.log(`${a} + ${b} = ${sum}`)//string template literal style

// var p = 450000
// var r = 13.65
// var t = 5
// var si = p*r*t/100
// var total = si+p
// var emi = total/(t*12)
// console.log("Principal Amount = "+p)
// console.log("Rate             = "+r)
// console.log("Time             = "+t)
// console.log("Simple Interest  = "+si)
// console.log("Total Amount     = "+total)
// console.log("EMI Amount       = "+emi)


// var p = 454455
// var r = 13.65
// var t = 5
// var si = p*r*t/100
// var total = si+p
// var emi = total/(t*12)
// console.log(
//     `
//     Principal Amount = ${p}
//     Rate             = ${r}
//     Time             = ${t}
//     Simple Interest  = ${si.toFixed(2)}
//     Total Amount     = ${total.toFixed(2)}
//     EMI Amount       = ${emi.toFixed(2)}
//     `)


// var p = Number(prompt("Enter the Principal Amount"))
// var r = Number(prompt("Enter the Rate"))
// var t = Number(prompt("Enter the Time in Years"))
// var si = p*r*t/100
// var total = si+p
// var emi = total/(t*12)
// document.write(
//     `
//     Principal Amount = ${p}<br>
//     Rate             = ${r}<br>
//     Time             = ${t}<br>
//     Simple Interest  = ${Math.round(si)}<br>
//     Total Amount     = ${Math.round(total)}<br>
//     EMI Amount       = ${Math.round(emi)}<br>
//     `)

// var p = Number(prompt("Enter the Principal Amount"))
// var r = Number(prompt("Enter the Rate"))
// var t = Number(prompt("Enter the Time in Years"))
// var si = p*r*t/100
// var total = si+p
// var emi = total/(t*12)
// alert(
//     `
//     Principal Amount = ${p}
//     Rate             = ${r}
//     Time             = ${t}
//     Simple Interest  = ${Math.round(si)}
//     Total Amount     = ${Math.round(total)}
//     EMI Amount       = ${Math.round(emi)}
//     `)
/*
WAP to print area of circle     :   area=3.14*r*r
WAP to print area of Rectangle  :   area=l*b
WAP to print area of cuboid     :   2*(l*b + b*h + h*l)
WAP to print area of Right Angle Triangle   :   area =(base*height)/2
WAP to print area of Square     :   area = side*side
WAP to swap value of two variables
WAP to calculate temp. in F from C i.e f =  c*9/5+32
WAP to calculate temp. in C from F i.e c =  (f-32)*5/9
 */

// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// document.write(`Before Swapping a = ${a} and b = ${b}<br>`)
//                 //a=50  b=70
// var temp=a      //a=50  b=70    temp=50
// a=b             //a=70  b=70    temp=50
// b=temp          //a=70  b=50    temp=50
// document.write(`After Swapping a = ${a} and b = ${b}`)

// var a = Number(prompt("Enter the First Number : "))
// var b = Number(prompt("Enter the Second Number : "))
// document.write(`Before Swapping a = ${a} and b = ${b}<br>`)
//         //a=40  b=80
// a=a+b   //a=120 b=80
// b=a-b   //a=120 b=40
// a=a-b   //a=80  b=40
// document.write(`After Swapping a = ${a} and b = ${b}`)