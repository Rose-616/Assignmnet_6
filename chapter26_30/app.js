// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number




var number = 3.45214;
var round = Math.round(number);
var floor = Math.floor(number);
var ceil = Math.ceil(number);
document.write("Number :" +number + "<br>"+"rounf off value :" +round + "<br>"+"floor value :" +floor + "<br>" + " ceil value :"+ ceil);



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number


var number = -2.673;
var round = Math.round(number);
var floor = Math.floor(number);
var ceil = Math.ceil(number);
document.write("Number :" +" " + number + "<br>"+"rounf off value :" +" "  +round + "<br>"+"floor value :" +" " +floor + "<br>" + " ceil value :"+ " "+ceil);




// 3. Write a program that displays the absolute value of a
// number.

var num = -4;
var abnum = Math.abs(num);
document.write( "The absolute value of "+ " "+num +" " +"is" +" "+ abnum);


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


var b = Math.random();
var c = (b*5)+1;
var d = Math.random();
var e = (d*5) +1;
document.write("Random dice value :" +Math.ceil(c) + "<br>" +"Random dice value :" + Math.floor(e));


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var coin1 = Math.random();
var a = coin1 + 1;
var coin2 = Math.random();
var b = coin2 *2;
document.write(Math.floor(a)+"<br>" +"Random coin value :Heads" +"<br>" + Math.ceil(b)+ "<br>" +"Random coin value :Tails");



// 6. Write a program that shows a random number between 1
// and 100 in your browser.




var num = Math.random();
var a = (num)*100;
document.write( "random number between 1 and 100 :" + Math.floor(a));



// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:


var input = prompt("Enter your weight in kilograms","");
var a = parseInt(input);
console.log(a +"kgs");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


var input = +prompt("Enter a number between 1 and 10","");
var secnum = Math.random();
var a = secnum*10;
var b = Math.ceil(a);
if (input === b){
    document.write("congratulations !!!!");
}
else{
    alert("try again   \n ☐prevent this page from creating additional dialogs");
}

