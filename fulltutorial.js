//Hello in JavaScript

console.log(25);
console.log("Hello World!");
console.log('Second Hello World!');

//Variable
//**Note 1: Variable must be "camelCase".
//**Note 2: "Semicolon" after every line.
//**Note 3: "caseSensitive".


//Number
var priceOfPen = 55;
console.log(priceOfPen); //Output: 55
console.log(typeof priceOfPen); //Output: Number


//String
var yourName = 'XyZ';
console.log(yourName); //Output: XyZ
console.log(typeof yourName); //Output: String


//Boolean
var isHot = true;
console.log(isHot); //Output: String
console.log(typeof isHot); //Output: Boolean


//All LowerCase, UpperCase, IndexOf, Split
var yourSelf = "I'm a student.";
console.log(yourSelf.toLowerCase()); //Output: i'm a student.
console.log(yourSelf.toUpperCase()); //Output: I'M A STUDENT.
console.log(yourSelf.indexOf('a')); //Output: 4 [i=0, '=1, m=2, ' '=3, a=4]

//***Special Note: if indexOf('value') "Output: -1" means Result is "NotFound".



console.log(yourSelf.split(' '));
//Output: ['I'm', 'a', 'student.']

console.log(yourSelf.split('a'));
//Output: ['I'm ', ' student.']

//**Note: It can split sentence in to words where space(" ") or any character or string.



//Add, Sub, Mul, Div, Modulo All are the same operation (+, -, *, /, %)
var numberOne = 10;
var numberTwo = 20;
var result = numberOne + numberTwo;
console.log(result); //Output: 30


//**Special Case
var numOne = 'abc';
var numTwo = 20;
var result = numOne + numTwo;
console.log(result); //Output: abc20


var numOne = 'abc';
var numTwo = 'xyz';
var result = numOne + numTwo;
console.log(result); //Output: abcxyz


var numOne = 'abc';
var numTwo = 'xyz';
console.log(numOne+" "+numTwo); //Output: abc xyz


//String to number conversion [It's maybe Float or Int]
var numOne = 10;
var numTwo = '20.5';
numTwo = parseFloat(numTwo);
numThree = parseInt(numTwo);
var result = numOne + numTwo;
var result2 = numOne + numThree;
console.log(result); //Output: 30.5
console.log(result2); //Output: 30


//Increment Number
var numOne = 10;
var numTwo = 20.5;
var numThree = 21.5;
var numFour = 22.5
var numFive = 23.5;

var result1 = numTwo + 1; //Increment First
var result2 = ++numThree; //Increment First
var result3 = numFour++; //Using in For/While Loop; Increment Later
numFive++;

console.log(result1); //Output: 21.5
console.log(result2); //Output: 22.5
console.log(result3); //Output: 22.5
console.log(numFive); //Output: 24.5



//**Special Case
var numOne = 10;

var result1 = '' + numOne; //Empty string
var result2 = ' ' + numOne; //Space here
console.log(result1); //Output: 10
console.log(result2); //Output: 10

//Look Carefully
console.log(typeof result1); //Output: string
console.log(typeof result2); //Output: string


//Floating Addition
var numOne = 10.02;
var numTwo = 15.20;

var result = numOne + numTwo;
console.log(result); //Output: 25.22

//**Special Case for Floating
var numOne = 0.1;
var numTwo = 0.2;

console.log(numOne + numTwo); //Output: 0.30000000000000004


var numOne = 0.1;
var numTwo = 0.2;

var sum = numOne + numTwo;
sum = sum.toFixed(2);
console.log(sum); //Output: 0.30


//Absolute Number

var numOne = -10;
var absoluteNum = Math.abs(numOne);

console.log(absoluteNum); //Output 10


//Round and Ceiling any fraction
var numOne = -10.20;
var absoluteNum = Math.abs(numOne);
var roundNum = Math.round(absoluteNum);
var ceilingNum = Math.ceil(absoluteNum);

console.log(absoluteNum); //Output: 10.2
console.log(roundNum); //Output: 10
console.log(ceilingNum); //Output: 11


//Random Number Generator
var number = Math.random() * 100;
var result = Math.round(number); //Or you can use Math.Ceil()

console.log(result); //Output: Any Number between 0 to 100


//Simple If-else Statement
var num = 10;

if(num > 5){
    console.log("Number is Greater than 5."); //Output: Number is Greater than 5.
}
else{
    console.log("Number is not greater than 5.");
}

//Another example
var num2 = 2;

if(num2 > 5){
    console.log("Number is Greater than 5.");  
}
else{
    console.log("Number is not greater than 5."); //Output: Number is not greater than 5.
}

//**Special Note
//Note1: Condition may [ <, >, ==, != {not equal}, ===, || {or}, && {and} ]

//Another Example
var job = true; //It may false
var salary = 30000;

if (job == true && salary > 20000){ //It may && {and}, || {or}
    console.log("Make a Tour Plan.");
}
else {
    console.log("Not sure for tour plan.");
}

//**What will be the output?? Think!!!

//Another Example
var job = true; //It may false
var salary = 30000;

if (job == true && salary > 30000){ //It may && {and}, || {or}
    console.log("Make a Tour Plan.");
}

else if(job == true && salary <= 30000){
    console.log("Don't think about Buying a house.")
}

else {
    console.log("Not sure for tour plan.");
}

//Output: Don't think about Buying a house.
                            
//**Note:
//Condition are both must be true for '&&'
//Condition are one must be true for '||'


//Date in Js
var date = new Date('2021-05-05');

console.log(date); //Output: Wed May 05 2021 06:00:00 GMT+0600 (East Kazakhstan Time)

//**Without Parameter
var date = new Date();

console.log(date); //Output: Sun Nov 07 2021 12:30:06 GMT+0600 (East Kazakhstan Time)


//Array in Js
var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var sliceArray = array.slice(0,5);
var sliceArray2 = array.slice(2,8);

console.log(sliceArray); //Output: ['a', 'b', 'c', 'd', 'e']
console.log(sliceArray2); //Output: ['c', 'd', 'e', 'f', 'g', 'h']
console.log(array.length); //output: 10
console.log(array[5]); //Output: f

array['f'] = 'z';

console.log(array); //Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', f: 'z']

array[5] = 'z'; //Using IndexNumber

console.log(array); //Output: ['a', 'b', 'c', 'd', 'e', 'z', 'g', 'h', 'i', 'j', f: 'z']

var postion = array.indexOf('e');

console.log(postion); //Output: 4

//**If outputIs: -1 then there is no matching elements

//New Element Add in Array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.push(10);

console.log(array); //Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.pop(); //By Default Last Element Will be deleted

console.log(array); //Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

array.unshift(10); //Add Element From Beginning

console.log(array); //Output: [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]

array.shift(); //Remove Element From Beginning

console.log(array); //Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]



//Simple While Loop

var num = 0;

while (num < 5) {
    console.log(num); //Output: 0 1 2 3 4
    num++;
}


//Simple For Loop

var num = 5;

for (var i = 0; i < num; i++) {
    console.log(i); //Output: 1 2 3 4
}


//Simple For Loop In Array

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]); //Output: 1 2 3 4 5 6 7 8 9
}

//**Note:
//console.log(array[i]); array[i]= value
//console.log(i); i = IndexOfArrayValue


//Switch Case in Js

var num = 1;

switch (num){
    case 1:
        console.log(num);
        break;
    
    default:
        console.log("Error Entry!!!");
        break;
}


//Function in Js

function addNum(a, b){
    var a; var b;
    var result = a + b;
    return result;
}

var total = addNum(5, 10);

console.log(total); //Output: 15



//**Look Carefully
function addNum(a, b){
    var result = a + b;
    return result;
}

var total1 = addNum(15, 10);
var total2 = addNum(50, 100);

console.log(total1); //Output: 25
console.log(total2); //Output: 150

//Another Method of Showing Result
console.log(total1, total2); //Output: 25 150



