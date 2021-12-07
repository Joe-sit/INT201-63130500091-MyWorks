## Map
```ruby
let studentScores = [65,72,43,50,96];

let gradeEvaluate = studentScores.map((score) =>{
    if(score >= 50){
        return 'Congratulations';
    }
    return 'Try harder';
})

console.log(studentScores); // [65,72,43,50,96]
console.log(gradeEvaluate); // ['Congratulations','Congratulations','Try harder','Congratulations','Congratulations']
```
