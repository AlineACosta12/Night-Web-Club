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

