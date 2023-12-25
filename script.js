function sendWish() {
    const message = document.getElementById('message').value;
    if (message.trim() !== '') {
        const wishesContainer = document.getElementById('wishes-container');
        const wishElement = document.createElement('div');
        wishElement.textContent = message;
        wishesContainer.appendChild(wishElement);
        document.getElementById('message').value = ''; // Clear the input field
    } else {
        alert('Please enter a valid wish.');
    }
}
