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











