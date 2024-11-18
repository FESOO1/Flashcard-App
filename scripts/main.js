const flashcardThemselves = document.querySelector('.flashcard-themselves');
const flashcardItself = document.querySelector('.flashcard-itself');
const flashcardShadow = document.querySelector('.flashcard-shadow');
const flashcardEmptyText = document.querySelector('.flashcard-app-header');
const flashcardParent = document.querySelector('.flashcard-parent');
const flashcardFormSubmitBtn = document.querySelector('.flashcard-button');
const addNewCardBtn = document.getElementById('addNewCardBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const infoBtn = document.getElementById('infoBtn');
const infoContainer = document.querySelector('.flashcard-app-information');
const closeInfoBtn = document.querySelector('.flashcard-app-close-button');
const questionInput = document.getElementById('questionInput');
const answerInput = document.getElementById('answerInput');
const prevCardBtn = document.getElementById('prevCardBtn');
const nextCardBtn = document.getElementById('nextCardBtn');
const flashcardCounterInText = document.getElementById('flashcardCounterInText');
const flashcardCounterText = document.getElementById('flashcardCounterText');
const flashcardCounterContainer = document.querySelector('.flashcard-counter');
const savedQuestions = [];
const savedAnswers = [];
let cardCounter = 0;
let cardCounterIn = 1;
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
    
    // SAVING THE DATA ENTERED BY A USER IN THE LOCAL STORAGE
    savedQuestions.push(questionInput.value);
    localStorage.setItem('savedQuestionsLC', JSON.stringify(savedQuestions));

    savedAnswers.push(answerInput.value);
    localStorage.setItem('savedAnswersLC', JSON.stringify(savedAnswers));
    
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
    // SHUFFLE FUNCTION
    const flashcardItself = document.querySelectorAll('.flashcard-itself');
    function shuffleFunction() {
        for (const flashcardItselfs of flashcardItself) {
            flashcardItselfs.style.order = Math.floor(Math.random() * cardCounter);
        };
    };

    shuffleBtn.addEventListener('click', shuffleFunction);
};

// FLIP CARD

function flipCard() {
    flashcardThemselves.firstElementChild.classList.toggle('flashcard-itself-flipped');
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
    flashcardThemselves.prepend(document.querySelector('.flashcard-itself:last-child'));
    nextCardBtn.disabled = false;
    cardCounterIn--;
    flashcardCounterInText.textContent = cardCounterIn;

    if (cardCounterIn === 1) {
        prevCardBtn.disabled = true;
    };
};

prevCardBtn.addEventListener('click', prevCardFunction);
nextCardBtn.addEventListener('click', nextCardFunction);

// INFO FUNCTION

infoBtn.addEventListener('click', () => {
    infoContainer.classList.add('flashcard-app-information-opened');
});

closeInfoBtn.addEventListener('click', () => {
    infoContainer.classList.remove('flashcard-app-information-opened');
});

// INITIALIZING BUTTONS

addNewCardBtn.addEventListener('click', addNewCardForm);
flashcardFormSubmitBtn.addEventListener('click', addNewCard);


// RETRIEVING DATA FROM LOCAL STORAGE

function getDataFromLocalStorageToDisplay() {
    const savedQuestionsIntoLocalStorage = JSON.parse(localStorage.getItem('savedQuestionsLC'));
    const savedAnswersIntoLocalStorage = JSON.parse(localStorage.getItem('savedAnswersLC'));

    if (savedQuestionsIntoLocalStorage.length > 0) {
        for (let i = 0; i < savedQuestionsIntoLocalStorage.length; i++) {
            flashcardThemselves.innerHTML += `
                <div class="flashcard-itself">
                    <div class="flashcard-itself-inner">
                        <div class="flashcard-itself-inner-question">
                            <h4 class="flashcard-itself-inner-question-text">Question:</h4>
                            <p class="flash-card-itself-inner-question-itself">${savedQuestionsIntoLocalStorage[i]}</p>
                        </div>
                        <div class="flashcard-itself-inner-answer">
                            <h4 class="flashcard-itself-inner-answer-text">Answer:</h4>
                            <p class="flash-card-itself-inner-answer-itself">${savedAnswersIntoLocalStorage[i]}</p>
                        </div>
                    </div>
                </div>
            `;

            // 
            flashcardThemselves.classList.add('flashcard-themselves-active');
            flashcardEmptyText.classList.add('flashcard-app-header-deactive');


            // SAVING THE DATA ENTERED BY A USER IN THE LOCAL STORAGE
            savedQuestions.push(savedQuestionsIntoLocalStorage[i]);
            localStorage.setItem('savedQuestionsLC', JSON.stringify(savedQuestions));

            savedAnswers.push(savedAnswersIntoLocalStorage[i]);
            localStorage.setItem('savedAnswersLC', JSON.stringify(savedAnswers));

            // NEXT AND PREVIOUS BUTTONS
            cardCounter++;

            if (cardCounter === 2) {
                nextCardBtn.disabled = false;
            };
        };
    };
};


getDataFromLocalStorageToDisplay();