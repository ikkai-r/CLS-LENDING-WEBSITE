function generateRegistrationLink() {
    fetch('/register/api/generate-registration-link', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration link generated: ' + data.link);
    })
    .catch(error => {
        console.error('Error generating registration link:', error);
    });
}

function openRegistrationModal(event) {
    event.preventDefault(); 

    fetch('/register/api/generate-registration-link', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('registration-link-input').value = data.link;
        document.getElementById('registration-modal').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error generating registration link:', error);
    });
}

function copyRegistrationLink() {
    const registrationLinkInput = document.getElementById('registration-link-input');

    registrationLinkInput.select();
    registrationLinkInput.setSelectionRange(0, 99999); 

    document.execCommand('copy');

    alert('Link copied to clipboard!');
}

function closeRegistrationModal() {
    document.getElementById('registration-modal').classList.add('hidden');
}