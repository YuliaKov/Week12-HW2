
const randomWord = document.getElementById('word');
const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

function getRandomWord() {
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random()*alphabet.length);
        randomWord.textContent += alphabet[randomIndex];
   }
     };

getRandomWord();
