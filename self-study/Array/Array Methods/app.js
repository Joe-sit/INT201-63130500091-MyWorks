//1.
const myFunc1 = function (instructor1, ta1, ...students1) {
    let greeting1 = 'Hello';
    return students1;
};


//2.
function echo1(text1) {
    return text1;
}

//3.
function sayHi1(greeting1, name1) {
    return `${greeting1},${name1}`;
}


//4.
function getClass1() {
    return 'INT201';
}

//Arrow Function
//1.
const myFunc2 = (instructor2, ta2, ...students2) => { let greeting2 = 'Hello'; return students2; };
console.log(myFunc1(1,2,3));
console.log(myFunc2(1,2,3));

//2.
const echo2 = text2 => text2;
console.log(echo1('something'));
console.log(echo2('something'));

//3.
const sayHi2 = (greeting2, name2) => `${greeting2},${name2}`;
console.log(sayHi1('Hi','James'));
console.log(sayHi2('Hi','James'));

//4.
const getClass2 = () => 'INT201';
console.log(getClass1());
console.log(getClass2());
