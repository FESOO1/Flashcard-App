const flashcardThemselves = document.querySelector('.flashcard-themselves');
const flashcardItself = document.querySelector('.flashcard-itself');
const flashcardShadow = document.querySelector('.flashcard-shadow');
const flashcardEmptyText = document.querySelector('.flashcard-app-header');
const flashcardParent = document.querySelector('.flashcard-parent');
const flashcardFormSubmitBtn = document.querySelector('.flashcard-button');
const addNewCardBtn = document.getElementById('addNewCardBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const questionInput = document.getElementById('questionInput');
const answerInput = document.getElementById('answerInput');
const prevCardBtn = document.getElementById('prevCardBtn');
const nextCardBtn = document.getElementById('nextCardBtn');
const flashcardCounterInText = document.getElementById('flashcardCounterInText');
const flashcardCounterText = document.getElementById('flashcardCounterText');
const flashcardCounterContainer = document.querySelector('.flashcard-counter');
let cardCounter = 0;
let cardCounterIn = 1;
let cardFlipped = false;
let isFormOpened = false;

// FLIP THE CARD

// ADD A CARD FORM

function addNewCardForm(e) {
    e.stopImmediatePropagation();

    isFormOpened = true;
    flashcardParent.classList.add('flashcard-parent-active');
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
    
    
    // NEXT AND PREVIOUS BUTTONS
    cardCounter++;

    if (cardCounter === 2) {
        nextCardBtn.disabled = false;
    };
    // RESETING
    questionInput.value = '';
    answerInput.value = '';
    isFormOpened = false;
    flashcardParent.classList.remove('flashcard-parent-active');
    //
    flashcardThemselves.classList.add('flashcard-themselves-active');
    // FLASHCARD COUNTER
    flashcardCounterText.textContent = cardCounter;
    flashcardCounterContainer.classList.add('flashcard-counter-active');
};

// FLIP CARD

function flipCard() {
    if (cardFlipped === false) {
        flashcardThemselves.firstElementChild.classList.add('flashcard-itself-flipped');
        /* flashcardShadow.classList.add('flashcard-shadow-flipped'); */

        cardFlipped = true;
    } else {
        flashcardThemselves.firstElementChild.classList.remove('flashcard-itself-flipped');
        /* flashcardShadow.classList.remove('flashcard-shadow-flipped'); */

        cardFlipped = false;
    };
};

flashcardThemselves.addEventListener('click', flipCard);

// PREVIOUS AND NEXT BUTTON FUNCTIONS

function nextCardFunction() {
    flashcardThemselves.append(document.querySelector('.flashcard-itself:first-child'));
    prevCardBtn.disabled = false;
    cardCounterIn++;
    flashcardCounterInText.textContent = cardCounterIn;
    
    if (cardCounterIn === cardCounter) {
        nextCardBtn.disabled = true;
    };
};

function prevCardFunction() {
    nextCardBtn.disabled = false;
    cardCounterIn--;
    flashcardCounterInText.textContent = cardCounterIn;

    if (cardCounterIn === 1) {
        prevCardBtn.disabled = true;
    };
};

prevCardBtn.addEventListener('click', prevCardFunction);
nextCardBtn.addEventListener('click', nextCardFunction);

// SHUFFLE FUNCTION

function shuffleFunction() {
    flashcardThemselves.querySelector('div').style.order = Math.floor(Math.random() * cardCounter);
};

shuffleBtn.addEventListener('click', shuffleFunction);

// INITIALIZING BUTTONS

addNewCardBtn.addEventListener('click', addNewCardForm);
flashcardFormSubmitBtn.addEventListener('click', addNewCard);