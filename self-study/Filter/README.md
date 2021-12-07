## Filter
- เป็นการนำข้อมูลแต่ละตัวใน array ไปผ่านการกรองใน function
```ruby
let studentScores = [65,72,43,50,96];

let passStudents = studentScores.filter((score) =>{
    return score >= 50;
})

console.log(passStudents); // 65,72,50,96
```
