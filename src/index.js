const container = document.querySelector('.container')
const cards = document.querySelector('.cards')

/* keep track of user's mouse */
let isPressedDown = false;
/* x horizontal space of cursor from inner container*/
let cursorXSpace;

container.addEventListener('mousedown', (event) => {
    isPressedDown = true;
    cursorXSpace = event.offsetX - cards.offsetLeft;
});

window.addEventListener('mouseup', () => {
    isPressedDown = false
})

container.addEventListener('mousemove', (event) => {
    if(!isPressedDown) return;
    event.preventDefault();
    cards.style.left = `${event.offsetX - cursorXSpace}px`;
    boundcards()
});

function boundcards() {
    const container_rect = container.getBoundingClientRect()
    const cards_rect = cards.getBoundingClientRect()

    if(parseint(cards.style.left) > 0) {
        cards.style.left = 0
    }
}