// WAP to check whether a person can vot or not 
/*var a = Number(prompt("Enter your age: "));
a>18?document.write ("you can do a vot </br> "):document.write( "your are not do a vot </br>");
if(a>18){
     document.write("you can do a vot")
}
else{
     document.write("you can't vot you are not elder")
}
*/

/*
var a  = parseInt(prompt("Enter the First Number :  "))
var b  = parseInt(prompt("Enter the Second Number :  "))
var c  = parseInt(prompt("Enter the Third Number :  "))
if(a<b){
    if(a<c)
    document.write(`${a} is Smallest`)
    else
    document.write(`${c} is Smallest`)
}
else{
    if(b<c)
    document.write(`${b} is Smallest`)
    else
    document.write(`${c} is Smallest`)
}
*/
//
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


 //
 var ch = prompt("Enter the Character :  ")
 if(ch.length!=1)
 document.write(`'${ch}' is Invalid Input<br>Input Should be 1 Character`)
 else{
     if(ch>='a' && ch<='z'){
         if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
         document.write(`'${ch}' is Lower Case Vowel`)
         else
         document.write(`'${ch}' is Lower Case Consonent`)
     }
     else if(ch>='A' && ch<='Z'){
         if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
         document.write(`'${ch}' is Upper Case Vowel`)
         else
         document.write(`'${ch}' is Upper Case Consonent`)
     }
     else if(ch>='0' && ch<='9')
     document.write(`'${ch}' is Digit`)
     else if(ch==' ')
     document.write(`Space`)
     else
     document.write(`'${ch}' is Special Character`)
 }
