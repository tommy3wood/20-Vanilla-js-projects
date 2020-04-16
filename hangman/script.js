const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part')

const words = ['bubble butt', 'plums', 'melons', 'dingleberries', 'flacid', 'moist', 'cantacourous', 'down right nasty']

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// show hidden word\
function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord 
            .split('')
            .map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
            `).join('')
        }
    `;
    const innerWord = wordEl.innerText.replace(/\n/g, '');
    console.log(wordEl.innerText, innerWord);
    if (innerWord === selectedWord) {
        finalMessage.innerText = "Congrats! You've just WON! ";
        popup.style.display = 'flex';
    }
}

displayWord();