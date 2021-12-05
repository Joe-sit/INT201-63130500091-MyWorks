
// // Indepentdent variables, all are array
// let ids = [1, 2];
// let quests = ['what is your name? ', 'where are you?'];
// let answers = ['Pattarapon', 'Bangkok'];


// // array of objects, easy iterate all items under a single varible
// let quest3 = [
//     { id: 1, question: 'what is your names', answer: 'Pattarapon' },
//     { id: 2, qestion: 'what are you?', answer: 'Bangkok' }
// ];


// // one object, each property stores with array
// let quest4 = {
//     ids: [1, 2],
//     quests: ['what is your name?', 'where are you?'],
//     answers: ['Pattarapon', 'Bangkok']
// };




let quest = { id: 1, quest: '' }; //implicit class => let quest= new Object()
console.log(typeof quest);

class Question {
    constructor(id, question = 'unknown') {
        this._id = id;
        this._question = question;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get question() {
        console.log('this is getter Question');
        return this_question;
    }

    set question(question) {
        console.log('this is setter Question');
        if(question === ''){
        this._question = 'unknown';
        }
    }

    displayQuestion() {
        return `id: ${this._id}, question: ${this.question} }`;
    }

    getQuestLength() {
        return this._question.length;
    }

}

