
const randomWord = document.getElementById('word');
const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

function getRandomWord() {
    const randomLetter1 = Math.floor(Math.random()*alphabet.length);
    const randomLetter2 = Math.floor(Math.random()*alphabet.length);
    const randomLetter3 = Math.floor(Math.random()*alphabet.length);
    const randomLetter4 = Math.floor(Math.random()*alphabet.length);
    randomWord.textContent = alphabet[randomLetter1] + alphabet[randomLetter2] + alphabet[randomLetter3] + alphabet[randomLetter4];    
};

getRandomWord();
