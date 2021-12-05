//getElementById to grandparentid and change its color.
//const grandparent = document.getElementById('grandparentid');

//const grandparent = document.querySelector('#grandparentid');
//const grandparent = document.querySelector('.grandparent');

//Get to the first 'parent' it finds.
//const parents = document.querySelector('.parent');
//Get to all element named 'parent'
//const parents = document.querySelectorAll('.parent');

//When we call Class name it will return a collecttion (multiple elements)
//const parents = Array.from(document.getElementsByClassName('parent'));

//const grandparent = document.querySelector('.grandparent');
//const children = grandparent.querySelectorAll('.child');
// const parents = Array.from(grandparent.children);
// const parentOne = parents[0];
// const children = parentOne.children;

const childOne = document.querySelector('#child-one');
const childTwo = childOne.nextElementSibling
// const parent = childOne.parentElement;
// const grandparent = parent.parentElement;
//changeColor(childOne);
changeColor(childTwo);
// changeColor(parent)
// changeColor(grandparent)



//Create a changeColor function to change the color.

function changeColor(element){
    element.style.backgroundColor = '#FFC0CB';
};

