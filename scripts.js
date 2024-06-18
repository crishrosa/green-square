document.addEventListener('DOMContentLoaded', (event) => {
    moveGreenSquare();
    const greenSquare = document.getElementById('green-square');
    greenSquare.addEventListener('click', call_message);

    changeMiddleText('...');
    changeTitleText('Click the green square');
});

function moveGreenSquare() {
    const greenSquare = document.getElementById('green-square');
    const maxWidth = window.innerWidth - greenSquare.offsetWidth;
    const maxHeight = window.innerHeight - greenSquare.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    
    greenSquare.style.left = `${randomX}px`;
    greenSquare.style.top = `${randomY}px`;
    
    setTimeout(moveGreenSquare, 550);
}

message = 0;
function call_message() {
    changeTitleText("Keep Clicking the Green Square");
    switch (message) {
        case 0:
            changeMiddleText("Nathiany");
            break;
        case 1:
            changeMiddleText("I couldn't tell you this");
            break;
        case 2:
            changeMiddleText("so I made this website to tell you");
            break;
        case 3:
            changeMiddleText("Ik I'm a boring loser but");
            break;
        case 4:
            changeMiddleText("I like you a lot");
            break;
        case 5:
            changeMiddleText("You're beautiful");
            break;
        case 6:
            changeMiddleText("I'm really interested in you and");
            break;
        case 7:
            changeMiddleText("I was wondering if you would like to");
            break;
        case 8:
            changeMiddleText("go somewhere sometime to");
            break;
        case 9:
            changeMiddleText("get to know each other better");
            break;
        case 10:
            changeMiddleText("If not it's alright");
            break;
        case 11:
            changeMiddleText("I just really wanted to tell you");
            break;
        case 12:
            changeMiddleText("and I couldn't find another way");
            break;
        case 13:
            changeMiddleText("Sorry if this feels weird")
            createInputField();
            createButton();
            break;
    }
    message += 1;
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
}

function changeMiddleText(newText) {
    const middleText = document.getElementById('middle-text');
    middleText.textContent = newText;
}

function changeTitleText(newText) {
    const middleText = document.getElementById('header-text');
    middleText.textContent = newText;
}

function createInputField() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'soo yes or no?';
    input.id = 'user-input'
    
    const inputContainer = document.getElementById('input-container');
    
    inputContainer.appendChild(input);
}

function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Submit';
    
    button.addEventListener('click', () => {
        const inputValue = document.getElementById('user-input').value;

        if (inputValue.toLowerCase() == 'yes') {
            alert(':)');
        }
        else if (inputValue.toLowerCase() == 'no') {
            alert("It's okk dw and I'm sorry")
        }

        saveValueToLocalStorage(inputValue);
    });
    
    const inputContainer = document.getElementById('input-container');
    
    inputContainer.appendChild(button);
}

function saveValueToLocalStorage(value) {
    localStorage.setItem('savedValue', value);
}