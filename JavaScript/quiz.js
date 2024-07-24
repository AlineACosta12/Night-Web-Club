// Quiz:

function submitQuiz() {
    // Get the quiz form and data
    let quizForm = document.getElementById('quizForm');
    let formData = new FormData(quizForm);

    // Define the correct answers
    let correctAnswers = {
        question1: "Alfred Hitchcock",
        question2: "Camp Crystal Lake",
        question3: "Pazuzu"
    };
    
    // Checks how many answers from the user were correct
    let score = 0;
    for (let [key, value] of formData.entries()) {
        if (value === correctAnswers[key]) {
            score++;
        }
    }
    
    // Display the score to the user
    alert("Your score: " + score + "/3");
}

// --END OF THE QUIZ--

// Gallery:

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    // Add click event listener to each gallery item
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Create and display an overlay with the clicked image
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);

            const fullImg = document.createElement('img');
            fullImg.src = item.src;
            fullImg.classList.add('full-img');
            overlay.appendChild(fullImg);

            // Remove the overlay when clicked
            overlay.addEventListener('click', () => {
                overlay.remove();
            });
        });
    });
});
