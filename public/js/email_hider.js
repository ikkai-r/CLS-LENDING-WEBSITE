document.getElementById('reveal-button').addEventListener('click', function() {
    var hiddenEmail = document.getElementById('hidden-email');
    var revealButton = document.getElementById('reveal-button');

    if (hiddenEmail.style.display === '' || hiddenEmail.style.display === 'inline') {
        hiddenEmail.style.display = 'none';
        this.textContent = 'Reveal';
    } else {
        hiddenEmail.style.display = 'inline';
        this.textContent = 'Hide';
    }
});