## Array

- คือชุุดของข้อมูลหลายๆค่าที่มีลำดับ
- แต่ละค่าของชุดข้อมลเรียกว่า `element`
- แต่ละ element จะมีเลขตำแหน่ง เรียกว่า `index`
- Array ใน JS เป็น `untyped` คือ ไม่ได้ผูกว่าจะเป็น type ใด type หนึ่ง เช่น ในหนึ่ง array มี [1,2,"String",true]
- Array ใน JS เป็น `dynamic` คือ สามารถหดหรือขยายได้ โดยไม่ต้องกำหนดขนาดของมันตอนสร้าง array

## Array literals
```ruby
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
```

## Array spread
- เอาข้อมูลทั้งหมดของ array อื่นมาใส่ในอีก array โดย ใช้ `...,myArr`
- เป็น shallow copy คือ ถ้ามีการเปลี่ยนค่าจาก array ที่ดึงค่ามา ตัว original array จะไม่กระทบอะไร <b>(primitive variable ไม่เปลี่ยน แต่ object จะเปลี่ยน) </b>
```ruby
//primitive
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

object
let arr7 = [{id:1,name: "James",lname:"Mama"}];
let arr8 = [...arr7];
arr8[0].name = 'Joe';
console.log(arr7); // [ { id: 1, name: 'Joe', lname: 'Mama' } ]
```

## Array constructor
- ไม่ค่อยใช้ syntax แบบนี้กันมากนัก

```ruby
//no arguments
let a = new Array();

//specifies a lenght
let a = new Array (10); // array size = 10

//specify two or more array element
let a = new Array(3,2,1,"lmao"); = array size = 4
```

## Array.of()
- เนื่องจาก array constructor ไม่สามารถ initial เลขตัวเดียวได้ เลยต้องมาใช้อันนี้แทน
```ruby
Array.of(5); // [5] single numeric argument
Array.of(1,2,3); // [1,2,3]
```

## Array.from()
- เหมิอน spread operator 
```ruby
let j Array.of(1,2,3);
let k = Array.from(j); // 1,2,3
```

## Deleting Array Elements
- ไม่ค่อยใช้ 
- เวลาลบ element ออกไปแล้ว ณ index นั้นของ element จะกลายเป็น undefined ซึ่ง lenght ของ array จะเท่าเดิมกับตอนยังไม่ลบ
- order ของ element ใน array ก็ยังคงเป็นตำแหน่งเดิม
```ruby
let arrList = [];
arrList[0] = 10;
arrList[1] = 20;
delete arrList[1]; // ลบ 20 ออก
console.log(arrList.length); 
console.log(arrList[1]); // undefined
```
