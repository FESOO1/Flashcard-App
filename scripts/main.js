const flashCardItself = document.querySelector('.flashcard-itself');
let cardFlipped = false;
// FLIP THE CARD

function flipTheCard() {
    if (cardFlipped === false) {
        flashCardItself.classList.add('flashcard-itself-flipped');

        cardFlipped = true;
    } else {
        flashCardItself.classList.remove('flashcard-itself-flipped');

        cardFlipped = false;
    };
};

// INITIALIZING BUTTONS

window.addEventListener('click', flipTheCard);