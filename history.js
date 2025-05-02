var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.length;
var nextButton = document.getElementById('next');
nextButton.onclick = function() {
    
        
        document.getElementById('result').innerText = 'You scored ' + score + ' out of ' + totalSlides;
        nextButton.style.display = 'none';
    }
};
