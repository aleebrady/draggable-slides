const container = document.querySelector('.container')
const cards = document.querySelector('.cards')

/* keep track of user's mouse */
let isPressedDown = false;
/* x horizontal space of cursor from inner container*/
let cursorXSpace;

container.addEventListener('mousedown', (event) => {
    isPressedDown = true;
    cursorXSpace = event.offsetX - cards.offsetLeft;
    container.style.cursor = 'grabbing'
});

container.addEventListener('mouseup', () => {
    container.style.cursor = 'grab'
})

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

    if(parseInt(cards.style.left) > 0) {
        cards.style.left = 0
    } else if (cards_rect.right < container_rect.right) {
        cards.style.left = `-${cards_rect.width - container_rect.width}px`
    }
}