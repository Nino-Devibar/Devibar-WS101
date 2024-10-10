const slider = document.getElementById('myRange');

slider.addEventListener('input', function() {
    const value = this.value;
    const max = this.max;
    const percentage = (value / max) * 100;


    this.style.background = `linear-gradient(to right, ${value > this.max ? 'red' : '#ff0000'} ${percentage}%, #ffffff9f ${percentage}%)`;
});


let slideIndex = 1;
const totalSlides = document.getElementsByClassName("mySlides").length;
slider.max = totalSlides; 
slider.value = slideIndex; 
showSlides(slideIndex);

document.getElementById('f-b').children[0].onclick = function() {
    plusSlides(1); 
};
document.getElementById('f-b').children[1].onclick = function() {
    plusSlides(-1);
};

function plusSlides(n) {
    slideIndex += n; 
    if (slideIndex > totalSlides) slideIndex = 1;
    if (slideIndex < 1) slideIndex = totalSlides; 
    showSlides(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    
    slider.value = n; 
    slider.dispatchEvent(new Event('input')); 

    
    if (n === 1) {
        slider.style.background = '#ffffff9f'; 
    } else {
        slider.style.background = `linear-gradient(to right, #ff0000 ${((n - 1) / (totalSlides - 1)) * 100}%, #ffffff9f ${((n - 1) / (totalSlides - 1)) * 100}%)`;
    }

    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

slider.addEventListener('input', function() {
    const value = this.value;
    const max = this.max;
    const percentage = (value / max) * 100;

    
    this.style.background = `linear-gradient(to right, ${value > this.max ? 'red' : '#ff0000'} ${percentage}%, #ffffff9f ${percentage}%)`;

    
    slideIndex = Math.round(value); 
    showSlides(slideIndex);
});


