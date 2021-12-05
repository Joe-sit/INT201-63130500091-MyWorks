## Higher Order Function
- เป็น function ที่รับ parameter เป็น function จากนั้นก็ return function นั้น
```ruby
function operator (n1,n2, fn){
  return fn(n1,n2);
}
```

## Function Scope and Nested Function
```ruby
let mid = 20;
let final = 5;

let fname = 'james';

function sum(){
  return mid + final;
}
console.log(`#1 sum : ${sum()}`); // 25
mid = 10;
console.log(`#2 sum : ${sum()}`); // 15

function getScore(){
  let mid = 10;
  let final = 30;
  
  function yourScore(){
    return fname + 'scored' + (mid+final);  
  }
 return yourScore();
 }
console.log(getScore()); // james scored 40
```

## Arrow Function Expression
- เป็นการลดรูปให้ code เราดูสั้นลง
- เป็นทางเลือก ซึ่งใช้ได้ในบางสถานการณ์ เช่น method ต่างๆของ array 

### Traditional Function (no arguments)
```ruby
let a = 4;
let b = 2;
function (){
  return a+b+10;
}
```

### Arrow Function
- No param : `() => expression`
- One param : `param => expression`
- Multiple param : param มากกว่า 1 ตัวใส่ ให้ใส่ใน () `(param1,paramN) => expression`
- Multiline statements : มีหลาย statement ต้องใส่ return ด้วย
``` ruby
param1 => {
  statement1;
  ...
  statementN;
}

(param1,paramN) => {
  statement1;
  ...
  statementN;
}

```

```ruby
let a = 4;
let b = 2;
() => a+b+10;

// traditional
function (a,b){
  return a+b+100;
}

// arrow
(a,b) => a+b+100;

// traditional
function (a,b){
  let tax = 0.07;
  return a+b+tax;
}

// arrow
(a,b) => {
  let tax = 0.07;
  return a+b+tax;
}
```
### In Class : ลองแปลงเป็น Arrow Function
```ruby
// traditional
const myFunc1 = function (instructor1, ta1, ...students1) {
    let greeting1 = 'Hello';
    return students1;
};

// arrow
const myFunc2 = (instructor2, ta2, ...students2) => { let greeting2 = 'Hello'; return students2; };

// traditional
function echo1(text1) {
    return text1;
}

// arrow
const echo2 = text2 => text2;

// traditional
function sayHi1(greeting1, name1) {
    return `${greeting1},${name1}`;
}
// arrow
const sayHi2 = (greeting2, name2) => `${greeting2},${name2}`;

// traditional
function getClass1() {
    return 'INT201';
}

// arrow
const getClass2 = () => 'INT201';

```

