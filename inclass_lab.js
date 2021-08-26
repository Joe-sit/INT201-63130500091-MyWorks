/*เขียนโปรแกรมเพื่อแสดงราศีที่ตรงกับปีที่กำหนดไว้ โดยมีทั้งหมด 12 ราศี ซึ่งแทนโดยสัตว์ประเภทต่างๆ ตัวอย่างเช่น ปี 1900 % 12 จะมีค่าเท่ากัน 4 และจะถูกแทนด้วยราศัหนู*/

//Solution #1 
/*เขียน Function ที่รับ Parameter เป็น year ประกาศตัวแปร result ที่จะเก็บค่าที่ได้จากการเอา year ไป modulo 12 และใช้ switch case ในการแบ่ง case ต่างๆที่เป็นไปได้ ซึ่งมีค่าตั้งแต่ 0 ไปจนถึง 11 แทนโดยสัตว์ต่างๆทั้ง 12 ราศี และ log ชื่อสัตว์ในแต่ละ case*/
function findZodiac(year) {
    let result = year % 12;
    switch (result) {
        case 0:
            console.log("monkey");
            break;
        case 1:
            console.log("rooster");
            break;
        case 2:
            console.log("dog");
            break;
        case 3:
            console.log("pig");
            break;
        case 4:
            console.log("rat");
            break;
        case 5:
            console.log("ox");
            break;
        case 6:
            console.log("tiger");
            break;
        case 7:
            console.log("rabbit");
            break;
        case 8:
            console.log("dragon");
            break;
        case 9:
            console.log("snake");
            break;
        case 10:
            console.log("horse");
            break;
        case 11:
            console.log("sheep");
            break;
    }
}

findZodiac(1900);

console.log('-----');

//Solution #2
let year = 1900;
const allZodiac = ['monkey', 
                   'rooster', 
                   'dog', 
                   'pig', 
                   'rat',
                   'ox', 
                   'tiger', 
                   'rabbit', 
                   'dragon',
                   'snake',
                   'horse',
                   'sheep'];

console.log(allZodiac[(year % 12)]);


