/*for (variable in object) {
    statements;
}
for (varible of object) {
    statements;
}
*/

let CmajorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];

for (let i in CmajorScale) {
    console.log(i);
}
for (let i of CmajorScale) {
    console.log(`${i}`);
}

/*function chordIdentifier() {
    if(notes.length < 3){
        return `This is not a chord`;
    }
    
   for(let i = 0; i < CmajorScale.length; i++){
        if()
    }
}
console.log(chordIdentifier('C','E','G'));*/