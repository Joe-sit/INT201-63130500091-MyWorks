let questions = [{
    question: '1+2=?',
    choices: { a: '3', b: '5', c: '7' },
    correctAnswer: 'a'
},
{
    question: '4*8=?',
    choices: { a: '28', b: '32', c: '36' },
    correctAnswer: 'b'
},
{
    question: '7*5-2=?',
    choices: { a: '27', b: '30', c: '33' },
    correctAnswer: 'c'
},
{
    question: '6/3*4=?',
    choices: { a: '4', b: '8', c: '12' },
    correctAnswer: 'b'
},
{
    question: '4+6+10=?',
    choices: { a: '20', b: '55', c: '19' },
    correctAnswer: 'a'
}
]

class Player {
constructor(name, answer) {
    this._name = name;
    this._answer = answer;
    this._score = 0;
}

// ตรวจสอบคำตอบที่ใส่เข้ามาว่าถูกหรือไม่
// โดยใช้ for in เพื่อ loop คำตอบที่ผู้เล่นใส่เข้ามาทีละข้อ 
// แล้วเช็คเงื่อนไข ถ้าคำตอบของเลขข้อที่ใส่เข้ามาตรงกับคำตอบที่ผู้เล่นตอบ จะทำการเพิ่ม score
// return เป็นคะแนนที่ผู้เล่นทำได้
isCorrect() {
    for (let i in this._answer) {
        questions[i - 1].correctAnswer == this._answer[i] ? this._score++ : this._score += 0;
    }
    return this._score;
}

// แสดงคำถาม ตัวเลือก และคำตอบที่ผู้เล่นเลือกตอบ
// ถ้าผู้เล่นเลือกตอบครบ 3 ข้อหรือมากกว่า จะแสดงโจทย์ออกมา แต่ถ้าน้อยกว่า 3 ข้อ จะ return ให้ผู้เล่นเลือกทำใหม่อีกครั้ง
// โดยใน loop i จะ loop object ใน this._answer เพื่อแสดงคำถาม
// และใน loop j จะ loop object ใน questions[i - 1].choices เพื่อแสดงตัวเลือก
showQuestion() {
    let result = 'Please select 3 or more questions.';
    if (Object.keys(this._answer).length >= 3) {
        result = '';
        for (let i in this._answer) {
            result += `Question ${i} : ` + `${questions[i - 1].question}\n`;
            for (let j in questions[i - 1].choices) {
                result += `${j}. ` + `${questions[i - 1].choices[j]}\n`;
            }
            result += `Select answer : ${this._answer[i]}.\n\n`;
        }
    }
    return result;
}

// แสดงชื่อผู้เล่นและคะแนนที่ผู้เล่นทำได้ หากเลือกทำไม่ครบ 3 ข้อจะไม่แสดง
toString() {
    return Object.keys(this._answer).length >= 3 ? `${this._name}. ` + `Your score is ${this._score}.` : '';
}

}

function playGame(person) {
return person.showQuestion() + person.toString();
}

let p1 = new Player('Benjamin', { 1: 'a', 2: 'b', 3: 'c', 4: 'b', 5: 'a' });
let p2 = new Player('Phumin', { 2: 'b', 3: 'a', 4: 'b', 5: 'c' });
let p3 = new Player('Pin', { 1: 'a', 3: 'b', 5: 'c' });
let p4 = new Player('Joe', { 2: 'a', 3: 'b' });
let p5 = new Player('Ploy', { 1: 'a' });

console.log(playGame(p1));
console.log(playGame(p2));
console.log(playGame(p3));
console.log(playGame(p4));
console.log(playGame(p5));