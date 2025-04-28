var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.lengt;
var nextButton = document.getElementById('next');
nextButton.onclick = function() {
    if (currentSlide < totalSlides - 1) {
        slides[currentSlide].classList.remove('active');
        currentSlide++;
        slides[currentSlide].classList.add('active');
    } else {
        var score = 0;
        if (document.querySelector('input[name="q1"]:checked') && document.querySelector('input[name="q1"]:checked').value === 'C') {
            score++;
        }
        if (document.querySelector('input[name="q2"]:checked') && document.querySelector('input[name="q2"]:checked').value === 'B') {
            score++;
        }
        if (document.querySelector('input[name="q2"]:checked') && document.querySelector('input[name="q2"]:checked').value === 'C') {
            score++;
        }
        if (document.querySelector('input[name="q3"]:checked') && document.querySelector('input[name="q3"]:checked').value === 'B') {
            score++;
        }
        if (document.querySelector('input[name="q4"]:checked') && document.querySelector('input[name="q4"]:checked').value === 'C') {
            score++;
        }
        if (document.querySelector('input[name="q5"]:checked') && document.querySelector('input[name="q5"]:checked').value === 'C') {
            score++;
        }
        document.getElementById('result').innerText = 'You scored ' + score + ' out of ' + totalSlides;
        nextButton.style.display = 'none';
    }
};
