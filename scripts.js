const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwordEl = document.getElementById("password1-el");
let passwordEl2 = document.getElementById("password2-el");
let copyDivEl = document.getElementById("copied-msg");

function randomCharacter() {
    for (let i = 0; i < characters.length; i++) {
        return characters[Math.floor(Math.random() * characters.length)];
    }
}

function generatePassword() {
    let password1 = "";
    let password2 = "";

    copyDivEl.style.display = "none";
    
    for (let i = 0; i < 15; i++) {
        password1 += randomCharacter();
        password2 += randomCharacter();
    }
    passwordEl.textContent = password1;
    passwordEl2.textContent = password2;
}

function copyPassword(event) {
    copyDivEl.style.display = "none";
    let selectedEl = document.getElementById(event.target.id);

    if (selectedEl.textContent !== "") {
        navigator.clipboard.writeText(selectedEl.textContent);
        copyDivEl.style.display = "block";
    }
}

