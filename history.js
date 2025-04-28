var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.length;
var nextButton = document.getElementById('next');

nextButton.onclick = function() {
    if (currentSlide < totalSlides - 1) {
        slides[currentSlide].classList.remove('active');
        currentSlide++;
        slides[currentSlide].classList.add('active');
    } else {
        var score = 0;

        // Check answers for each question
        if (Array.from(document.querySelectorAll('input[name="q1"]:checked')).map(el => el.value).includes('C')) {
            score++;
        }
        if (Array.from(document.querySelectorAll('input[name="q2"]:checked')).map(el => el.value).includes('B')) {
            score++;
        }
        if (Array.from(document.querySelectorAll('input[name="q2"]:checked')).map(el => el.value).includes('C')) {
            score++;
        }
        if (Array.from(document.querySelectorAll('input[name="q3"]:checked')).map(el => el.value).includes('B')) {
            score++;
        }
        if (Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(el => el.value).includes('C')) {
            score++;
        }
        if (Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(el => el.value).includes('C')) {
            score++;
        }

        document.getElementById('result').innerText = 'You scored ' + score + ' out of ' + totalSlides;
        nextButton.style.display = 'none'
    }
};
