localStorage.setItem('name','Joe');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');

sessionStorage.setItem('age','19')
console.log(sessionStorage.getItem('age'));
sessionStorage.removeItem('age');

document.cookie = 'name=James; expires=' + new Date(2020,1,10).toUTCString();