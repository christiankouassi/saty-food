// scripts.js
function scrollLeft() {
    const container = document.querySelector('.sites');
    container.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.querySelector('.sites');
    container.scrollBy({ left: 200, behavior: 'smooth' });
}
