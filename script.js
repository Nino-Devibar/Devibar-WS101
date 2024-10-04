document.getElementById('knowMeBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const letter = document.getElementById('firstLetter');


    letter.classList.add('animate');


    setTimeout(() => {
        letter.style.opacity = 1;
        document.body.classList.add('fade-out');
    }, 3200);


    setTimeout(() => {
        window.location.href = "Netflix.html";
    }, 4000);
});