let arr1 =[]; 
let obj ={};
console.log(typeof arr1);
console.log(arr1.length);

arr1=[10,true,1,'text',['a','b','c'],{id:1, name: 'Adam'}]; // array is untyped
console.log(arr1[4]); // ['a','b','c']
console.log(arr1[arr1.length-1]); // { id: 1, name: 'Adam' }
console.log(arr1[4][2]); // access 'c' in the nested array
console.log(arr1[arr1[2]]); // true
console.log(arr1[5].name); // access name property 

arr1[4][0] = 'X'; // change 'a' -> 'X'

console.log(arr1[4]); // [ 'X', 'b', 'c' ]

let num1 = [8,9,10];
console.log(num1); // 8,9,10

let num2 = [7,...num1,11,12];
console.log(num2); //7, 8, 9, 10, 11, 12

let arr3 = 'cool';
console.log(arr3); // 'cool'
let arr4 = [...arr3];
console.log(arr4); // [ 'c', 'o', 'o', 'l' ]


let arr5 = [1,2,3];
let arr6 = [...arr5];
arr6[0] = 20; 
console.log(arr5); // [ 1, 2, 3 ]
console.log(arr6); // [ 20, 2, 3 ]

let arr7 = [{id:1,name: "James",lname:"Mama"}];
let arr8 = [...arr7];
arr8[0].name = 'Joe';
console.log(arr7); // [ { id: 1, name: 'Joe', lname: 'Mama' } ]


let arrList = [];
arrList[0] = 10;
arrList[1] = 20;
delete arrList[1];
console.log(arrList.length); 
console.log(arrList[1]); 