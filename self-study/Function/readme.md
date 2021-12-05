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
