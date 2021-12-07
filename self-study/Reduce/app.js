let studentScores = [65,72,43,50,96];
let sumScores = studentScores.reduce((previousVlaue,currentValue)=>{
    return previousVlaue+currentValue;
})

console.log(sumScores);