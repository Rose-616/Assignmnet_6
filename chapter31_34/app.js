// 1. Write a program that displays current date and time in
// your browser.

var a = new Date();
document.write(a);


// 2. Write a program that alerts the current month in words.
// For example December.



var a = new Date();
var month = ["january","febraury", "march", "april", "may","june","july","august","september","october","november","deceember"];
var b = a .getMonth();
var c = month[b];
alert(c);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var a = new Date();
var b = a.getDay();
var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var c = days[b].slice(0,3);
alert(c);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


var a = prompt("enter day ");
var b = a.toLowerCase();
var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
for(var i =0;i<=days.length;i++){
    if (b === days[0] || b === days[6]){
        alert("it's fun day")
        break
    }
}



// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”.


var a = new Date();
var b = a.getDate();
if (b < 16){
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.



var a = new Date();
var b = a.getTime();
var c = b/(100*60);
document.write("current date :"+a +"<br>"+ "Elapsed miliseconds since jan 1,1970 :" +b + "<br>" +"Elapsed minutes since jan 1,1970 :" +c );

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.



function foo(){
var  a = new Date();
var b = a.getHours();
if ( b <= 12){
alert("its AM")
}
else{
    alert("its PM");
}
}
foo();


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.




var  a = new Date("december 31,2020");
document.write("Later Date :" +a);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 18, 2015




var a = new Date("june 18,2015");
var b = new Date();
var c = b.getTime();
var d = a .getTime();
var diff = c -d;
var e = diff/(1000*60*60*24);

document.write(Math.floor(e)+" " + "days have been passed since 1st ramzan");




// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.




var a = new Date("jan 1, 2015")
var b = new Date("dec 5,2015,22:50:16");
var c = a.getTime();
var d = b.getTime();
var diff = d-c;
var e = Math.floor(diff);
var sec = e /1000;
document.write(sec+" " +"seconds had passed since beginning of 2015");



// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.




var a =  new Date();
var b = a.getHours();
var c = new Date("june 22,2020,22:28:21");
var d = c.getHours();
var hour = b-d;

document.write("current date :" +a + "<br>"+hour+" " +"hour ago,it was"+" " + c)



// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?



var a = new Date();
var b = a.getFullYear();
var c = new Date("june 22,1920,23:38:29");
var d = c.getFullYear();
var years = b-d;
document.write("current date :"+a +"<br>" + years +" "+"years back,it was " +" "+ c);



// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser




function age(a){
    var b = new Date();
    var c = b.getFullYear();
    var  diff = c -a;
    document.write("your age is :"+a +"<br>" +"your birth year is :" +diff);
}

age(+prompt("enter your age"));


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:


function bill(name , month, units,charges){
    document.write("customer name :" + name +"<br>")
    document.write("Month :" + month +"<br>");
    document.write("Number of units :" + units +"<br>");
    document.write("Charges per unit :" + charges +"<br>");
    var net = units *charges;
    var surcharge = 350;
    var amount = net + surcharge;
    document.write("Net Amount Payable (within Due Date) :" +net +"<br>");
    document.write("Late payment surcharge :" + surcharge + "<br>");
    document.write("Gross Amount payable(after Due Date) :" + amount );


}

bill(prompt("enter your name"),prompt("enter month"),410,16);











