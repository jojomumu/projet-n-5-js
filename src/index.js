const fontButton = document.getElementById('buttswitch');



let toggleDark = document.getElementById('buttdark');
let body = document.body;
let logo = document.getElementById('logo');
let currentFont = 'Inria Sans';




toggleDark.addEventListener('click', function() {
    
    body.classList.toggle('darkmode');

    let isDarkMode = body.classList.contains('darkmode');
  
  if (isDarkMode) {
    logo.src = 'media/logo2.png';
    toggleDark.style.backgroundImage = 'url(media/sun.png)';
  } else {
    logo.src = 'media/logo1.png';
    toggleDark.style.backgroundImage = 'url(media/moon.png)';
  }
  
  });



  function changeFont() {
    if (currentFont === 'Inria Sans') {
      body.style.fontFamily = 'Inria Serif';
      currentFont = 'Inria Serif';
    } else if (currentFont === 'Inria Serif') {
      body.style.fontFamily = 'Roboto Mono';
      currentFont = 'Roboto Mono';
    } else {
      body.style.fontFamily = 'Inria Sans';
      currentFont = 'Inria Sans';
    }
}

fontButton.addEventListener('click', changeFont);