document.addEventListener('DOMContentLoaded', () => {
    let storedName = localStorage.getItem('name');
    if (storedName) {
        alert(`Hello again ${storedName}`);
    } else {
        let name = prompt("What is your name ?");

        if (name) {
            localStorage.setItem("name", name);
        }
    }
})