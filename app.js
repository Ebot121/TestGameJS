window.addEventListener('load', () => {
    console.clear();
});

const button = document.getElementById('reset');
const section = document.querySelector('section');
const article = document.querySelector('article');
let valueHor = 100;
let valueVer = 100;
let rotateValue = 0;

function moveRight() {
  
    const sectionWidth = section.offsetWidth;
    const windowWidth = window.innerWidth;
    if (valueHor + sectionWidth + 10 <= windowWidth) { 
        valueHor += 10;
        section.style.left = `${valueHor}px`;
    }
}

function moveLeft() {
   
    if (valueHor - 10 >= 0) {
        valueHor -= 10;
        section.style.left = `${valueHor}px`;
    }
}

function moveDown() {
    
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    if (valueVer + sectionHeight + 10 <= windowHeight) {  
        valueVer += 10;
        section.style.top = `${valueVer}px`;
    }
}

function moveUp() {
   
    if (valueVer - 10 >= 0) {
        valueVer -= 10;
        section.style.top = `${valueVer}px`;
    }
}

window.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        moveDown();
    }

    if (event.key === 'w') {
        moveUp();
    }

    if (event.key === 'a') {
        moveLeft();
    }

    if (event.key === 'd') {
        moveRight();
    }

    // Obrót na strzałki
    if (event.key === 'ArrowUp') {
        rotateValue -= 45; 
        section.style.transform = `rotate(${rotateValue}deg)`;
    }

    if (event.key === 'ArrowDown') {
        rotateValue += 45; 
        section.style.transform = `rotate(${rotateValue}deg)`;
    }

    if (event.key === 'd' || event.key === 'a' || event.key === 'w' || event.key === 's') {
        rotateValue = 0;
        section.style.transform = `rotate(0deg)`;
    }
    if (event.key === 'w') {
        rotateValue -= 0; 
        section.style.transform = `rotate(${rotateValue}deg)`;
        rotateValue -= 90; 
        section.style.transform = `rotate(${rotateValue}deg)`;
    }
    if (event.key === 's') {
        rotateValue -= 0; 
        section.style.transform = `rotate(${rotateValue}deg)`;
        rotateValue += 90; 
        section.style.transform = `rotate(${rotateValue}deg)`;
    }
    if (event.key === 'a') {
        rotateValue -= 0; 
        section.style.transform = `rotate(${rotateValue}deg)`;
        rotateValue += 180; 
        section.style.transform = `rotate(${rotateValue}deg)`;
    }
    
});

button.addEventListener('click', () => {
    valueHor = 100;
    valueVer = 100;
    rotateValue = 0; 
    section.style.top = '100px';
    section.style.left = '100px';
    section.style.transform = 'rotate(0deg)'; 
});
