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

// ADD A CARD FORM

function addNewCardForm() {
    isFormOpened = true;
    flashcardForm.classList.add('flashcard-form-active');
    flashcardEmptyText.classList.add('flashcard-app-header-deactive');
};

// ADD A NEW CARD

function addNewCard(e) {
    e.preventDefault();

    flashcardThemselves.innerHTML += `
        <div class="flashcard-itself">
            <div class="flashcard-itself-inner">
                <div class="flashcard-itself-inner-question">
                    <h4 class="flashcard-itself-inner-question-text">Question:</h4>
                    <p class="flash-card-itself-inner-question-itself">${questionInput.value}</p>
                </div>
                <div class="flashcard-itself-inner-answer">
                    <h4 class="flashcard-itself-inner-answer-text">Answer:</h4>
                    <p class="flash-card-itself-inner-answer-itself">${answerInput.value}</p>
                </div>
            </div>
        </div>
    `;

    // RESETING
    questionInput.value = '';
    answerInput.value = '';
    isFormOpened = false;
    flashcardForm.classList.remove('flashcard-form-active');
    // FLAPPING THE CARD
    const flashcardItself = document.querySelectorAll('.flashcard-itself');
    function flipTheCard() {
        for (let i = 0; i < flashcardItself.length; i++) {
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
    };
};

// INITIALIZING BUTTONS

window.addEventListener('click', flipTheCard);

addNewCardBtn.addEventListener('click', addNewCardForm);

flashcardFormSubmitBtn.addEventListener('click', addNewCard);