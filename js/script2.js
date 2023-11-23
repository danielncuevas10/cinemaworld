const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});

function toggleWord(wordId) {
    var word = document.getElementById(wordId);
    if (word.classList.contains('hidden')) {
        word.classList.remove('hidden');
    } else {
        word.classList.add('hidden');
    }
}