// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.





var firstName = prompt("enter first name");
var lastName = prompt("enter last name ");
alert("hello " +" "+ firstName+lastName);


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


var favmobile = prompt("Enter your fav mobile phone model");
var mobilelen = favmobile.length;
document.write("my favourite phone is :" + favmobile + "<br>");
document.write("length of string :" + mobilelen);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


var str =" Pakistani";
var char = str.indexOf("n");
document.write("string :" + str +  "<br>" + "index of n : " + " "+char  );




// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser .



var text = "hello world";
var c = text.lastIndexOf("l");
document.write("string :" + text + "<br>" + "Last index of l :" + c);


// 5. Write a program to find the character at 3 rd index in the
// word “Pakistani” and display the result in your browser .


var str = "pakistani";
var b =str.charAt(3);
document.write("string :" + str + "<br>" + "character at index :3" + " " + b);

// 6. Repeat Q1 using string concat() method.






var firstname = prompt('enter your first name');

var lastName = prompt('enter your last name');

var fullname = firstname.concat(lastName);

alert (fullname);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.





var city ="hyderabad";
var b = city.slice(5,9);
var city2 = "islam";
var after = city2.concat(b);
document.write(after);


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;




var message = "Ali and Sami are best friends. They play cricket and football together" ;
var b = message.replace(/and/g,"&");
document.write(b);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.






var value1 = "472";
var value2 =Number(value1);
document.write("value :" + value1 + "<br>" +"type :" +typeof(value1) + "<br>" +"value :"+ value2 + "<br>" +"type :" +typeof(value2));


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


var input = prompt("enter text").toLowerCase();
var v = input.toUpperCase();
document.write("user input :" + input + "<br>" + "upper case :" + v);

// 11.
// Write a program that takes user input. Convert and
// show the input in title case.




var userinput = "javascript";
var firstchar =userinput[0].toUpperCase();
var b = userinput.slice(1,11)
document.write(firstchar.concat(b))

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


var num =35.36;
var b = num.toString();
document.write("Number :" + num + "<br>" + "Result :" + b);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .



var username = (prompt("Enter username"));

for (var i=0; i<=username.length;i++){
    if (username[i] === "!"){
     alert( "please enter valid user name" + "\n"+ "☐prevent this page from creating additional dialoges");
    }
    else if (username[i] === ","){
        alert( "please enter valid user name" + "\n"+ "☐prevent this page from creating additional dialoges");

    }
    else if (username[i] === "."){
        alert( "please enter valid user name" + "\n"+ "☐prevent this page from creating additional dialoges");
    }


    else if (username[i] === "@"){
        alert( "please enter valid user name" + "\n"+ "☐prevent this page from creating additional dialoges");
    }
    break



    
    
 }


//  14. You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an
//  array. After searching, prompt the user whether the given
//  item is found in the list or not.
//  Note: Perform case insensitive search. Whether the user
//  enters cookie, Cookie, COOKIE or coOkIE, program
//  should inform about its availability. Example:



var arr = ["cake","apple pie", "cookie","chips","patties"];
alert();
var b = prompt("welcome to ABC bakery .What do you want to order sir/mam?" ,"enter order");


for (var i= 0;i<=arr.length;i++){
    if (arr[i] === b ){
        var c=arr.indexOf(arr[i]);
        alert(arr[i]+ " is availibe at index " + b +" " + "in our bakery" );
        break
    }else{
        alert("we are sorry " + b + " "+"is not availibe in our bakery");
        break
    }
}
   




// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.








function checkPassword() {
    
    try {
    
    var pass = document.getElementById("f1").value;
    
    if (pass.length < 6) {
    
    alert( "Please enter at least 6 characters.");
    
    }
    
    else if (typeof(pass[0])== Number)
            {
                alert("password can ");
            }

        
    
    if (pass.indexOf(" ") !== -1) {
    
    throw "No spaces in the password, please.";
    
    }
    
    var numberSomewhere = false;
    
    for (var i = 0; i < pass.length; i++) {
    
    if (isNaN(pass(i, i+1)) === false) {

    numberSomewhere = true;
    
    break;
    
    }
    
    }
    
    if (numberSomewhere === false) {
    
    throw "Include at least 1 number.";
    
    }
    
    }
    
    catch(err) {
    
    alert(err);
    
    }
     }
    
    
     
    //  16. Write a program to convert the following string to an
    //  array using string split method.
    //  var university = “University of Karachi”;
    //  Display the elements of array in your browser.






var uni ="University of Karachi";
for (i=0;i<uni.length;i++){
    console.log(uni[i]);
    
}

// 17. Write a program to display the last character of a user
// input.


function lastChar(input){
    document.write("user input :" + input +"<br>" );
    var c =(input.length)-1;
    var b =input[c]
    document.write("last char of input :" + " "+b);
   

} 
lastChar("pakistan");


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.







var str = "the quick brown fox jumps over the lazy dog";
var y = str.split(" ");
var b = "the";
var count=0;
for (var i=0;i<=y.length;i++){
    if (y[i] === b){
        count++
    }
}
document.write("There are two occurence of word "+ b +" "+count);



 

