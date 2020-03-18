const myHeading = document.querySelector('h1');
let myButton = document.querySelector('btnUser');

function multiply(num1, num2) {
    let result;
    result = num1 * num2;
    return result;
}

function stopPokeAlert() {
    alert("Element click registered.");
}

let myImage = document.querySelector('img');
myImage.onclick = function () { ChangeImage(); stopPokeAlert(); }
myButton.onclick = function() {setUserName();}

function ChangeImage() {
    let currentSrc = myImage.getAttribute('src');
    if (currentSrc === 'images/html-5-logo.png') {
        myImage.src = 'images/shaish.png';
    }
    else {
        myImage.src = 'images/html-5-logo.png';
    }
}

function setUserName() {
    let name = prompt('Please enter your name');
    if (name === '' || name === null) {
        setUserName();
    }
    else {
        localStorage.setItem('name', name);
        myHeading.textContent = "Hello " + name + "!";
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let name = localStorage.getItem('name');
    myHeading.textContent = "Hello " + name + "!";
}