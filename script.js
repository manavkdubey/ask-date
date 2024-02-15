document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');
    const container = document.querySelector('.container');

    yesButton.addEventListener('click', function() {
        alert('Yay! 😊 Looking forward to our time together!');
    });

    noButton.addEventListener('mouseover', function() {
        const containerRect = container.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        // Generate a random position within the container
        const randomX = Math.random() * (containerRect.width - noButtonRect.width);
        const randomY = Math.random() * (containerRect.height - noButtonRect.height);

        // Update the button's position
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
