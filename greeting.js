const form = document.querySelector('form');
const input = form.querySelector('input');
const greeting = document.querySelector('.greetings');

const USER_LS = "curretUser";
const SHOWING_CN = "showing";

function saveName (text) {
    localStorage.setItem(USER_LS, text);
}

function handleSumbit (e) {
    e.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName () {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSumbit);
}

function paintGreeting (text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadNme () {

    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init () {

    loadNme();
}

init();