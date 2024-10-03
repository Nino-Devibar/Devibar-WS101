document.getElementById('knowMeBtn').addEventListener('click', function(event) {
    event.preventDefault();


    const letter = document.getElementById('firstLetter');
    const button = this;


    letter.classList.add('animate');


    setTimeout(() => {
        document.body.classList.add('fade-out');
    }, 3200);


    setTimeout(() => {
        window.location.href = "Netflix.html";
    }, 3700);
});