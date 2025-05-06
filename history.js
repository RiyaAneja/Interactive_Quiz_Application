var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.length;
var nextButton = document.getElementById('next');
var resultDisplay = document.getElementById('result');
var timerDisplay = document.getElementById('timer');
var timerDuration = 10 * 60; 
var timerInterval;
function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === n);
    });
}
function calculateScore() {
    var score = 0;
    var correctAnswers = {
        q1: 'A', q2: 'A', q3: 'A', q4: 'A', q5: 'A',
        q6: 'A', q7: 'A', q8: 'B', q9: 'A', q10: 'A',
        q11: 'B', q12: 'A', q13: 'B', q14: 'A', q15: 'B',
        q16: 'A', q17: 'D', q18: 'A', q19: 'B', q20: 'A'
    };
    for (var i = 1; i<= totalSlides; i++) {
        var questionName = 'q' + i;
        var selected = document.querySelector('input[name="' + questionName + '"]:checked');
        if (selected && selected.value === correctAnswers[questionName]) {
            score++;
        }
    }
    return score;
}
function endQuiz() {
    var score = calculateScore();
    resultDisplay.innerText = 'Time is up! You scored ' + score + ' out of ' + totalSlides;
    nextButton.style.display = 'none';
    clearInterval(timerInterval);
    // Hide the slides
    slides.forEach(s => s.classList.remove('active'));
}
function startTimer() {
    var timeLeft = timerDuration;
    updateTimerDisplay(timeLeft);

    timerInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft< 0) {
            clearInterval(timerInterval);
            endQuiz();
        } else {
            updateTimerDisplay(timeLeft);
        }
    }, 1000);
}
function updateTimerDisplay(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    timerDisplay.textContent = 'Time left: ' + min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0');
}
nextButton.onclick = function() {
    if (currentSlide< totalSlides - 1) {
        slides[currentSlide].classList.remove('active');
        currentSlide++;
        slides[currentSlide].classList.add('active');
    } else {
        var score = calculateScore();
        resultDisplay.innerText = 'You scored ' + score + ' out of ' + totalSlides;
        nextButton.style.display = 'none';
        clearInterval(timerInterval);
    }
};

showSlide(currentSlide);
startTimer();
