//import {history} from "./history.js";

let myDiv1 = document.querySelector('#myDiv1');
myDiv1.setAttribute('style', 'background-color : #FAAA; width : 500px; padding: 5px; border-radius : 10px; border: 1px solid black; margin : auto;');

let myDiv2 = document.querySelector('#myDiv2');
myDiv2.setAttribute('style', 'background-color : #FAAA; width : 500px; padding: 5px; border-radius : 10px; border: 1px solid black; margin : auto;');

let myPar = document.querySelectorAll('#myPar');
let myHeader = document.querySelector('#myHeader');

let imgElement = document.createElement('img');
imgElement.setAttribute('src', './ricardo.png');
imgElement.setAttribute('style','width : 250px; height:285px; margin:auto; position:relative; left:150px');

myDiv1.appendChild(imgElement)

myDiv1.style.background = '#FAAA';

//showInfo();

// function showInfo(){
//     for(const i of history){
//         let divEachIdol = document.createElement('div');
//         divEachIdol = document.setAttribute('id',i.idol_id);
//     }
// }

myDiv1.addEventListener("click", () => {
    let myDiv1 = document.querySelector('#myDiv1');
    let myPar = document.querySelector('#myPar');
    let myHeader = document.querySelector('#myHeader');

    if (myDiv1.style.background === 'black') {
        myDiv1.style.background = '#FAAA';
        myPar.style.color = 'black';
        myHeader.style.color = 'black';
        console.log('now im red');
    } else {
        myDiv1.style.background = 'black';
        myPar.style.color = 'white';
        myHeader.style.color = 'white';
        console.log('now im black');

    }
});

