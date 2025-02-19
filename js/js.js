document.querySelectorAll('.row .card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Hello, I'm ${card.querySelector('h2').textContent}!`);
    });
});
