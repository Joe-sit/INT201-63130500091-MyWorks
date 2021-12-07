let studentScores = [65,72,43,50,96];

let passStudents = studentScores.filter((score) =>{
    return score >= 50;
})

console.log(passStudents);
