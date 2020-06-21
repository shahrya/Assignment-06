// ********** Chapter # 21 to 25 **********
// Task # 01 

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName + " " + lastName
// alert("Your Full Name is:" + " " + fullName)


// Task # 02
// var mobile = prompt("Enter your favourite mobile phone model")
// var length = prompt("Enter length of mobile")
// document.write("My favourite phone is:" + mobile + "<br>")
// document.write("Length of string:" + length)



// var mob = "Samsung Galaxy S6 Edge Plus"
// var length = "28"
// document.write("My favourite phone is:" + " " + mob + "<br>")
// document.write("Length of string:" + " " + length)


// Task # 03

// var word = "Pakistani"
// document.write("String:" + " " + word + "<br>")
// document.write("Index of 'n':" + " "  + word.indexOf("n"))


// Task # 04

// var a = "Hello World"
// document.write("String:" + " "+ a + "<br>")
// document.write("Last index of 'l' : " + " " + a.lastIndexOf("l"))

// Task # 05

// var a = "Pakistani"
// document.write("String:" + " " + a + "<br>")
// document.write("Character at index 3:" + " " + a.charAt(3))


// Task # 06

// var firstName = "Muahmmad"
// var lastName = "Shahryar"
// var fullName = firstName + " " + lastName
// alert("Your Full Name is:" + " " + fullName)


// Task # 07

// var word = "Hyderabad"
// var word1 = word.replace("Hyder","Islam")
// document.write("City:" + " " + word + "<br>")
// document.write("After repalcement:" + " " + word1)


// Task # 08

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var message1 = message.replace(/and/g,"&")
// document.write(message1)


// Task # 09

// var number = "472"
// document.write("Value:" + " " + number + "<br>")
// document.write("Type:" + " " + "String" + "<br>")
// document.write("Value:" + " " + number + "<br>")
// document.write("Type:" + " " + "number")


//Task # 10

// var input = prompt("Enter user input")
// document.write("User input:" + " " + input + "<br>")
// document.write("Upper case:" + " " + input.toUpperCase()) 


// Task # 11

// var input = prompt("Enter user input")
// var firstChar = input.slice(0,1)
// firstChar = firstChar.toUpperCase()
// var otherChar = input.slice(1)
// otherChar = otherChar.toLowerCase()
// var input1 = firstChar + otherChar
// document.write("User input:" + " " + input + "<br>")
// document.write("Title case:" +" " +input1)


// Task # 12

// var num = 35.36
// var num1 = num.toString().replace(".","")
// document.write("Number:" + " " + num + "<br>" + "Result:" + " " + num1)

// var num = 35.36
// var num1 = num.toString().replace(".","")
// alert("Number:" + " " + num + "\n" + "Result:" + " " +num1)


// Task # 13



// Task # 14

// var items = ["Cake","Apple pie","Cookie","Chips","Patties"]
// var search = prompt("Enter search items")
// if(items.indexOf(search) !==-1){
//     alert("Yes" + " " + search + " " + "is available in our bakery")
// }else{
//     alert("We are sorry." + " " + search + " " + "is not available in our bakery") 
// }


// Task # 15

// var password = prompt("Enter your password")


// Task # 16

// var university = "University of Karachi"
// var check;
// var split = university.split("").join("")
// for(i=university.length-1; i>=0; i--){
//     document.write(university[i]+"<br>")
// }



// Task # 17

// var input = prompt("Enter your input")
// alert(input.)


// Task # 18

// var Text = "The quick brown fox jumps over the lazy dog"



// ********** Chapter # 26 to 30 **********
// Task # 01

// var number = prompt("Enter your positive integer","3.45214")
// var round1 = Math.round(number)
// var round2 = Math.floor(number)
// var round3 = Math.ceil(number)
// document.write("Number:" + " " + number +"<br>")
// document.write("Round off value:" + " " + round1 + "<br>")
// document.write("Floor value:" + " " + round2 + "<br>")
// document.write("Ceil value:" + " " +round3)


// Task # 02

// var number = prompt("Enter negative floating point number","-2.673")
// var round1 = Math.round(number)
// var round2 = Math.floor(number)
// var round3 = Math.ceil(number)
// document.write("Number:" + " " + number + "<br>" + "Round off value:" + " " + round1 + "<br>" + "Floor value:" +" " + round2 + "<br>" + "Ceil value:" + " " + round3 )


//OR


// var number = prompt("Enter negative floating point number","-2.673")
// var round1 = Math.round(number)
// var round2 = Math.floor(number)
// var round3 = Math.ceil(number)
// document.write("Number:" + " " + number + "<br>" )     
// document.write("Round off value:" + " " + round1 + "<br>")
// document.write("Floor value:" +" " + round2 + "<br>")
// document.write("Ceil value:" + " " + round3)


// Task # 03

// var num = "-4"
// var absolute = Math.abs(num)
// alert("The absolute value of -4 is" + " " + absolute)

// And

// var num = "5"
// var absolute = Math.abs(num)
// alert("The absolute value of 5 is" + " " + absolute)


// Task # 04

// var dice = Math.random()*7
// var floor = Math.floor(dice)
// document.write("random dice value:" + " " + floor)


//Task # 05

// var user1 =  "Heads"
// var user2 = "Tails"
// var toss = Math.random()*2
// var coin = Math.floor(toss)
// if(coin === 0){
//     document.write("2" + "<br>" + "random coin value:" + " " + user1)
// }else{
//     document.write("1" + "<br>" +  "random coin value:" + " " + user2)
// }

// Task # 06

// var num = Math.random()*100
// var round = Math.round(num)
// alert("Random number between 1 and 100:" + " " +  round)


// Task # 07

// var user = prompt("Enter your weight in kilograms")
// document.write("The weight of user is" + " " + user + " " + "kilograms")

// Task # 08

// var num = prompt("Enter a number between 1 to 10")
// var num1 = Math.random()*10
// var floor = Math.floor(num1)
// if(floor === num){
//     alert("Congrats"  + num)
// }
// else{
//     alert("Try agin" )
// }
// var text = "The quick brown fox jumps over the lazy dog"
// // var word = text.count("the")
// alert(text.count("the"))






























// ********** Chapter # 31 to 34 **********

// Task # 01

// var a = new Date()
// document.write(a)


// Task # 02

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
// alert("Current month:" + " " +  n)



// Task # 03

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is" + " " + nameOfToday)


// Task # 04



// ********** Chapter # 35 to 38 **********
// Task # 01