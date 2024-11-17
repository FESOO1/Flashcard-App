const flashcardItself = document.querySelector('.flashcard-itself');
const flashcardShadow = document.querySelector('.flashcard-shadow');
let cardFlipped = false;
// FLIP THE CARD

function flipTheCard() {
    if (cardFlipped === false) {
        flashcardItself.classList.add('flashcard-itself-flipped');
        flashcardShadow.classList.add('flashcard-shadow-flipped');

        cardFlipped = true;
    } else {
        flashcardItself.classList.remove('flashcard-itself-flipped');
        flashcardShadow.classList.remove('flashcard-shadow-flipped');

        cardFlipped = false;
    };
};

// INITIALIZING BUTTONS

window.addEventListener('click', flipTheCard);