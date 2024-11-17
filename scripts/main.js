const flashcardThemselves = document.querySelector('.flashcard-themselves');
const flashcardItself = document.querySelector('.flashcard-itself');
const flashcardShadow = document.querySelector('.flashcard-shadow');
const flashcardEmptyText = document.querySelector('.flashcard-app-header');
const flashcardForm = document.querySelector('.flashcard-form');
const flashcardFormSubmitBtn = document.querySelector('.flashcard-button');
const addNewCardBtn = document.getElementById('addNewCardBtn');
const questionInput = document.getElementById('questionInput');
const answerInput = document.getElementById('answerInput');
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

// ADD A CARD FORM

function addNewCardForm() {
    isFormOpened = true;
    flashcardForm.classList.add('flashcard-form-active');
    flashcardEmptyText.classList.add('flashcard-app-header-deactive');
};

// ADD A NEW CARD

function addNewCard() {
    flashcardThemselves.innerHTML += `
        
    `;
};

// INITIALIZING BUTTONS

window.addEventListener('click', flipTheCard);

addNewCardBtn.addEventListener('click', addNewCardForm);