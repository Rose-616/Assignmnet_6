

// 1. Write a function that displays current date & time in your
// browser.



function date(a){
    document.write(a);

}
date(new Date());


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


function name(firstName,lastName){
    document.write("hello" +" " +firstName.concat(lastName));
}

name("pari","zaad");



// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.




function add(){
    var a = +prompt("enter 1st no");
    var b = +prompt("enter 2nd no");
    var sum = a + b;
    return sum;
}
document.write(add());



// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser





function calc(num1,oper,num2){
    if (oper === "+"){
        var sum =num1 + num2;
        return sum
        
    }
    else if( oper === "-"){
        var diff = num1 - num2;
        return diff
    }
    else if (oper === "*"){
        var mul = num1 * num2;
        return diff
    }
    else if (oper === "/"){
        var div = num1 / num2;
        return div
    }
    else {
        alert("operator not found");
    }

}


document.write(calc(+prompt("enter no"),prompt("enter operator"),+prompt("enter no")));




// 5. Write a function that squares its argument.



function square(x){
    return x*x

}
document.write("sqaure of given no is :"+ " " +square(+prompt("enter no")));


function number(num1 ,num10){
    for (var i =1;i <= num10;i++){
        document.write(i +"<br>");
        
      
    }
}
number(+prompt("enter no 1"),+prompt("enter no 2"));


// 6. Write a function that computes factorial of a number.



function fact (a,b){
    for (var i = 1; i <= a ; i++){
        b = b*i;
        if ( i == a){
        document.write(b);
    }}
}

fact(5,1);




// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function start(a,b){
    for (var i = a; i <= b;i++){
        console.log(i)
    }
}
start(2,8);


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle



function calchyp(){
 var a = +prompt("");
 var b = +prompt("");

 
 document.write("hyp" + " 2".sup() +" " + "="+ " " + sqaure());
 function sqaure(){
     var c = (a*a) +(b*b);
     return c
   
}
 return sqaure

}
calchyp();


// 9. Write a function that calculates the area of a rectangle.
// A = width * height

// i. Arguments as value
function area(w,h){
    var a = w*h;
    return a 

}
console.log(area(2,3));

// ii. Arguments as variables

var w = 2;
var h = 3;
function area(){
    var a = w*h;
    return a 

}
console.log(area(w,h));


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?

var a = prompt("enter word")
var check = "";
for (var i = a.length -1 ;i >=0;i--){
    check += a[i];
 
}
if (check === a){
    console.log(check + " " +"is a palindrome word")
}
else {
    console.log("not a palindrome word")
}



// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.


function foo(str){
     str =str.split(" ")
    for (var i =0, x = str.length ;i < x; i++){
       str[i] =str[i][0].toUpperCase() +str[i].slice(1);
    }
    return str.join(" ")
}
console.log(foo("the quick brown fox"));


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.



function word(a){
    a = a.split(" ");
    
    var b =0;
    var longest;
    for (var i = 0;i <a.length;i++){
       if (a[i].length > b){
           b = a[i].length;
           longest = a[i]
       }

        
      }
      return longest
}

console.log(word('Web Development Tutorial'));





// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of

function word(a,b){
    var count =0;

    for (var i = 0;i < a.length ;i++){
        
        if ( a[i] === b){
            count++

        }
    }
    return count
}
document.write(word("JSResourceS.com","o"));




// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.


function calcCircumference(r){
    circumference = 2*3.412*r;
    return circumference

}
document.write("The circumference is" + " ");

document.write(calcCircumference(+prompt("enter radius")));

function calcArea(r){
    area = 3.142 *r*r;
    return area

}

document.write("The area is" + " ")
document.write(calcArea(+prompt("enter radius")));