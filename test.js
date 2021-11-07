//**Objects in Js */

var student = {
    Name: 'Jack',
    Id: 1,
    Ph: 123
};

console.log(student);

console.log(student.Name); //Output: Jack
console.log(student['Name']); //Output: Jack

var stuName = 'Name';
console.log(student[stuName]); //Output: Jack

//Update Objects
student.Id = 2;
console.log(student.Id); //Output: 2

console.log(student); //Output: {Name: 'Jack', Id: 2, Ph: 123}


//Update Property
student.Address = 'NY';
console.log(student.Address); //Output: NY

console.log(student); //Output: Name: 'Jack', Id: 2, Ph: 123, Address: 'NY'}




