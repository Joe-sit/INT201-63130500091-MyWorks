/*JS statemets
The use of a semicolon at the end of a statement is optional.*/
let x = 20;
let y = 30
console.log('x = ' + x + ' y = ' + y);

let myName = 'Joe';
let greeting = 'Good morning, ' + myName;
console.log(greeting);

/*Types
Let's see all data types of JS by using tpyeof() function*/

let myNum = 2;
console.log('type of myNum : ' + typeof (myNum));

let Pi = 3.14;
console.log('type of Pi : ' + typeof (Pi));

let myString = 'Something';
console.log('type of myString : ' + typeof (myString));

let myBoolean = true;
console.log('type of myBoolean : ' + typeof (myBoolean));

let myArray = [5, 4, 3, 2, 1];
console.log('type of myArraym : ' + typeof (myArray) + ' Length of myArray : ' + myArray.length);

let myNull = null;
console.log('type of myNull : ' + typeof (myNull));

let myUndefined;
console.log('type of myUndefined : ' + typeof (myUndefined));

let mySymbol = Symbol();
console.log('type of mySymbol : ' + typeof (mySymbol));

let myObj = {
    name: 'James',
    age: 30
};
console.log('type of myObj : ' + typeof (myObj));

let myFunction = function () {
    let someVarInFn;
}
console.log('type of myFunction : ' + typeof (myFunction));
/*Literals*/
let myLiteralString =  ` "I’am a student", He said `;
console.log(myLiteralString);

let myAnotherString = "Yo"; // Using "  " 
console.log(myAnotherString);

