function toggleInput(inputType) {
    if (inputType === 'suggested') {
        document.getElementById('suggested-button').classList.add('input-button-active');
        document.getElementById('custom-button').classList.remove('input-button-active');
        document.getElementById('suggested-input').style.display = 'block';
        document.getElementById('custom-input').style.display = 'none';
    } else if (inputType === 'custom') {
        document.getElementById('suggested-button').classList.remove('input-button-active');
        document.getElementById('custom-button').classList.add('input-button-active');
        document.getElementById('suggested-input').style.display = 'none';
        document.getElementById('custom-input').style.display = 'block';
    }
}

