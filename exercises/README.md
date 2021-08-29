# EXERCISES SOURCE CODE
Including inclass laboratory files and my own exploration about javascript will me paste write here  :sparkles::triangular_flag_on_post:
### exercise01 | Simple BMI Calculator 
```ruby
function getBMI(weight, height) {
    let BMI = weight / (height * height);
    if (BMI <= 18.5) {
        console.log(BMI, ": ต่ำกว่าเกณฑ์");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log(BMI, ": ปกติ");
    } else if (BMI >= 25 && BMI <= 29.9) {
        console.log(BMI, ": อ้วน");
    } else if (BMI >= 30) {
        console.log(BMI, ": เกินพิกัด");
    } else {
        console.log("ผิดพลาด");
    }
}
getBMI(79, 1.75);
```
### output 
``` output 
25.79591836734694 ": อ้วน"
```
### exercise02 | Text String Converter 
```ruby
function reverseString(word) {
    if (word === "")
        return "";
    else
        return reverseString(word.substr(1)) + word.charAt(0);
}
console.log(reverseString('Hello World'));

function replaceVoweils(word) {
    return word.replace('a', '*')
               .replace('e', '*')
               .replace('i', '*')
               .replace('o', '*')
               .replace('u', '*');
}
console.log(replaceVoweils("Hello"),replaceVoweils("World"));

function countVowels(word){
    let count = 0;
    let vowels = 'aeiouAEIOU';

    for(let i = 0 ; i < word.length; i++){
        if(vowels.indexOf(word[i])> -1){
            count ++;
        }
    }
    return count;
}

console.log(countVowels("Hello World"));
```
### output
```
dlroW olleH
VM2200:16 H*ll* W*rld
VM2200:30 3
```
