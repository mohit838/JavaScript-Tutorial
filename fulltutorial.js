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




