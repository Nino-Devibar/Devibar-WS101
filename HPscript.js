document.getElementById('aboutme').addEventListener('click', function(event) {
  event.preventDefault();
  const nameElement = document.getElementById('name');
  const body = document.body;

  nameElement.classList.add('animate');

  setTimeout(() => {
    body.style.opacity = 0;
    body.style.transition = 'opacity 1s'; 
    nameElement.style.opacity = 1; 
    nameElement.style.position = 'absolute'; 
    setTimeout(() => {
      window.location.href = "Netflix.html";
    }, 1000); 
  }, 4000); 
});