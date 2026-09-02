const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});