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



