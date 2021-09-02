// ประกาศให้ reverse_str = ''(empty string)
// ใช้ for loop เพื่อนำค่าในแต่ละ index ของ text เรียงเข้าไปให้ใน reverse_str โดยเริ่มจาก index ท้ายสุด
// ทำจนกว่าจะครบ loop แล้ว return ค่า reverse_str ออกไป
function reverseString(text) {
    let reverse_str = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reverse_str += text[i];
    }
    return reverse_str;
}

// ใช้ method ของ string ที่ชื่อว่า .replace() ที่ทำหน้าที่แทนค่าใหม่ลงในค่าที่เรากำหนด
// โดยแทนที่ตัวที่พบในวงเล็บ [] ด้วย * ซึ่งมีเงื่อนไข /ig
// ตัว i จะเป็น case sensitive แล้วก็ g เป็น global คือแทนที่ทั้งหมด
function replaceVowels(text) {
    let replace_str = text.replace(/[aeiou]/ig, '*');
    return replace_str;
}

// ประกาศค่า count มีค่าเท่ากับ 0
// ในลูปการทำงานจะทำงานจนกว่าจะเท่ากับความยาวของข้อความ
// โดยในลูปจะมีประกาศตัวแปร vowels ในภาษาอังกฤษ
// ถ้ามี vowels ในข้อความตำแหน่งที่ i จะเพิ่มค่า count ขึ้นมา 1 
// ทำจนกว่าจะครบ loop แล้ว return ค่า count ออกไป
function countVowels(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    return (count);
}

let text = 'Hello World';
console.log(reverseString(text));
console.log(replaceVowels(text));
console.log(countVowels(text))