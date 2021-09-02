
//Type of

/* Type can be divided into TWO categories*/
// JavaScript Data Types: Numbers, String, Boolean, Undefined, Symbol, Object

/*-- Primitive Types --*/
var myNum = 3;
console.log(typeof (myNum)); //Number

var message = "hello";
console.log(typeof (message)); //String

var message = null;
console.log(typeof (message)); //object

var myNull = null;
console.log(typeof (myNull)); //object

var myDecimal = 3.85;
console.log(typeof (myDecimal)); //number

var myUndefined;
console.log(typeof (myUndefined)); //undefined

var mySymbol = Symbol();
console.log(typeof (mySymbol)); //symbol

var myBoolean0 = true;
console.log(typeof (myBoolean)); //Boolean : true

var myBoolean1 = false;
console.log(typeof (myBoolean1)); //Boolean : false

/*-- Object Types --*/
var myArr = [1, 2, 3];
console.log(typeof (myArr)); //object

var myObj = { id: 1, task: 'grading exam' };
console.log(typeof (myObj)); //object

//let & const can be updated but not re-decleared.
//var variables can be re-declared and update;
let num1 = 3;
let num1 = 4; //Uncaught SyntaxError: Identifier 'num1' has already been declared
console.log(typeof (num1)); //num1 = 3

const pi = 3.14;
console.log(pi);
const pi = 22 / 7; // Uncaught SyntaxError: Identifier 'pi' has already been declared
console.log(pi); // 3.14

//const
const person = { name: 'somchai', age: '50' };
console.log(person.name); //แสดงชื่อ
person["name"] = 'peeter';  //เปลี่ยนข้อมูลข้างใน
console.log(person['name']); //แสดงชื่อ

//Testing program
let greeting = 'hi';
function greeter() {
    let greeting = 'Good Morning';
    console.log(`greeting in fn ${greeting}`);
}
greeter();
console.log(`greeting outside fn ${greeting}`);




