const navbar = document.querySelector('.navbar');

function handleScroll() {
  const section2 = document.getElementById('about');
  const section2Top = section2.getBoundingClientRect().top;

  if (section2Top <= 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);

