document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('h1, h2, p');
    texts.forEach(text => {
        text.style.animationDelay = `${Math.random() * 2}s`;
    });
});
