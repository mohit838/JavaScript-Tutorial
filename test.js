//Reverse  String

function reverseString(str) {
    var reverse = "";

    for (var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

console.log(reverseString("I am Js"));



//Pallindrome Number or String

function reverseString(str) {
    var reverse = "";

    for (var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var str ='DaD';
var str2 ='Dude';

if(str == reverseString(str)){
    console.log("This is Pallindrome"); //Output: This is Pallindrome 
}
else{
    console.log("This is not a Pallindrome");
}


if(str2 == reverseString(str2)){
    console.log("This is Pallindrome"); 
}
else{
    console.log("This is not a Pallindrome"); //Output: This is Not a Pallindrome 
}








