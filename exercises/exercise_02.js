// Item 1:  Reverse String
function reverseString(word) {
    if (word === "")
        return "";
    else
        return reverseString(word.substr(1)) + word.charAt(0);
}
console.log(reverseString('Hello World'));
// Item 2: Replace Vowels with '*'
function replaceVoweils(word) {
    return word.replace('a', '*')
               .replace('e', '*')
               .replace('i', '*')
               .replace('o', '*')
               .replace('u', '*');
}
console.log(replaceVoweils("Hello"),replaceVoweils("World"));
// Item 3: Count Vowels in String
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