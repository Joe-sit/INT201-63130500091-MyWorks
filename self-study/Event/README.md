## Overview of this...
![alt text](https://github.com/Joe-sit/INT201-63130500091-MyWorks/blob/master/self-study/Event/lolxd.gif)

## js file
```ruby
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
```
## html file
```ruby
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="myDiv1">
        <h2 id="myHeader">Ricardo Milos</h2>
        <p id="myPar">Ricardo Milos was born on November 11, 1977, along with his twin brother, in Rio, Brazil. He is mixed, with both Brazilian and Irish heritage. However, he and his brother are adopted, with a Greek father and a Canadian mother. Ricardo is 5 foot and 8 inches tall, and weighs 190 pounds. Ricardo has been modeling for over 10 years and his father is a professional photographer who taught him how to take good photos as well as how to pose in photos.</p>
    </div>
    <br>
    <div id="myDiv2">
        <p id="myPar">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea velit magni numquam. Itaque a consectetur earum enim id. Voluptatum perspiciatis facilis molestias natus dolore fugit, pariatur ad commodi! Recusandae.</p>
    </div>
    <script src="app.js"></script>
    <script src="history.js"></script>
</body>
</html>
```
