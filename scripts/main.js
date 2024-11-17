const flashcardItself = document.querySelector('.flashcard-itself');
const flashcardShadow = document.querySelector('.flashcard-shadow');
const flashcardEmptyText = document.querySelector('.flashcard-app-header');
const flashcardForm = document.querySelector('.flashcard-form');
const addNewCardBtn = document.getElementById('addNewCardBtn');
let cardFlipped = false;
let isFormOpened = false;

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

// ADD A CARD

function addNewCard() {
    isFormOpened = true;
    flashcardForm.classList.add('flashcard-form-active');
    flashcardEmptyText.classList.add('flashcard-app-header-deactive');
};

// INITIALIZING BUTTONS

window.addEventListener('click', flipTheCard);

addNewCardBtn.addEventListener('click', addNewCard);