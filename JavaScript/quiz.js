function submitQuiz() {
    let quizForm = document.getElementById('quizForm');
    let formData = new FormData(quizForm);
    let correctAnswers = {
        question1: "Alfred Hitchcock",
        question2: "Camp Crystal Lake",
        question3: "Pazuzu"
    };
    
    let score = 0;
    for (let [key, value] of formData.entries()) {
        if (value === correctAnswers[key]) {
            score++;
        }
    }
    
    alert("Your score: " + score + "/3");
}

// Gallery:

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);

            const fullImg = document.createElement('img');
            fullImg.src = item.src;
            fullImg.classList.add('full-img');
            overlay.appendChild(fullImg);

            overlay.addEventListener('click', () => {
                overlay.remove();
            });
        });
    });
});
