document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.stars .star');
    const avgRatingElement = document.getElementById('average-rating');
    let ratingData = JSON.parse(localStorage.getItem('ratingData')) || {
        counts: [0, 0, 0, 0, 0],
        totalReviews: 0
    };
    let hasRated = false;

    updateUI();

    stars.forEach(star => {
        star.addEventListener('click', () => {
            if (hasRated) return;
            const rating = parseInt(star.getAttribute('data-value'));
            ratingData.counts[rating - 1]++;
            ratingData.totalReviews++;
            localStorage.setItem('ratingData', JSON.stringify(ratingData));
            hasRated = true;
            updateUI();
        });
    });

    function updateUI() {
        const total = ratingData.counts.reduce((acc, val) => acc + val, 0);
        const average = ratingData.counts.reduce((acc, val, i) => acc + val * (i + 1), 0) / total;
        avgRatingElement.textContent = `${average.toFixed(1)} average based on ${total} reviews.`;

        ratingData.counts.forEach((count, index) => {
            document.getElementById(`bar-${index + 1}`).style.width = (count / total * 100) + '%';
            document.getElementById(`count-${index + 1}`).textContent = count;
        });
    }
});