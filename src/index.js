const fontButton = document.getElementById('buttswitch');
const toggleDark = document.getElementById('buttdark');
const body = document.body;
const logo = document.getElementById('logo');
let currentFont = 'Inria Sans';


const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;


body.classList.toggle('darkmode', isDarkModePreferred);

toggleDark.addEventListener('click', function() {
  body.classList.toggle('darkmode');

  
  const isDarkMode = body.classList.contains('darkmode');

  if (isDarkMode) {
    logo.src = 'media/logo2.png';
    toggleDark.style.backgroundImage = 'url(media/sun.png)';
    toggleDark.style.backgroundColor = 'white';
    fontButton.style.backgroundColor = 'white';
    document.getElementById("errormessage").style.color = 'black';
  } else {
    logo.src = 'media/logo1.png';
    toggleDark.style.backgroundImage = 'url(media/moon.png)';
    toggleDark.style.backgroundColor = '#a5a5a5';
    fontButton.style.backgroundColor = '#a5a5a5';
    document.getElementById("errormessage").style.color = 'red';
  }
});

function changeFont() {
  if (currentFont === 'Inria Sans') {
    body.style.fontFamily = 'Inria Serif';
    fontButton.style.fontFamily = 'Roboto Mono';
    currentFont = 'Inria Serif';
  } else if (currentFont === 'Inria Serif') {
    body.style.fontFamily = 'Roboto Mono';
    fontButton.style.fontFamily = 'Inria Sans';
    currentFont = 'Roboto Mono';
  } else {
    body.style.fontFamily = 'Inria Sans';
    fontButton.style.fontFamily = 'Inria Serif';
    currentFont = 'Inria Sans';
  }
}

fontButton.addEventListener('click', changeFont);


if (isDarkModePreferred) {
  logo.src = 'media/logo2.png';
  toggleDark.style.backgroundImage = 'url(media/sun.png)';
  toggleDark.style.backgroundColor = 'white';
  fontButton.style.backgroundColor = 'white';
  document.getElementById("errormessage").style.color = 'black';
} else {
  logo.src = 'media/logo1.png';
  toggleDark.style.backgroundImage = 'url(media/moon.png)';
  toggleDark.style.backgroundColor = '#a5a5a5';
  fontButton.style.backgroundColor = '#a5a5a5';
  document.getElementById("errormessage").style.color = 'red';
}



function updateResearch(value) {
  document.getElementById("searched").textContent = value;
};



function search() {
  let searchInput = document.getElementById("research");
  let word = searchInput.value.trim();
  
  if (word === "") {
      
  document.getElementById("errormessage").textContent = "Please enter a word.";
  return;
  }
  
    
  document.getElementById("errormessage").textContent = "";
  
    
  let definitionsDiv = document.getElementById("searchdef");
  definitionsDiv.innerHTML = "";

  let synonymesDiv = document.getElementById("listesyno");
  synonymesDiv.innerHTML = "";

  let phoneticsWord = document.getElementById("phone");
  phoneticsWord.innerHTML = "";

  let audioElement = document.getElementById("audio");
  audioElement.innerHTML = "";

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/" + word, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);

      if (response.length > 0) {
        let wordData = response[0];

      
        let meanings = wordData.meanings;
        for (let i = 0; i < meanings.length; i++) {
          let definition = meanings[i].definitions[0].definition;
          let definitionElement = document.createElement("div");
          definitionElement.className = "definition";
          definitionElement.textContent = definition;
          definitionsDiv.appendChild(definitionElement);
        }

        
        let synonyms = [];
        for (let i = 0; i < meanings.length; i++) {
          let synonymsData = meanings[i].definitions[0].synonyms;
          if (synonymsData && synonymsData.length > 0) {
            synonyms.push(...synonymsData);
          }
        }
        if (synonyms.length > 0) {
          let synonymsElement = document.createElement("ul");
          for (let i = 0; i < synonyms.length; i++) {
            let synonym = document.createElement("li");
            synonym.textContent = synonyms[i];
            synonymsElement.appendChild(synonym);
          }
          synonymesDiv.appendChild(synonymsElement);

          document.getElementById("descri").style.display = "flex";
        } else {
          
          document.getElementById("descri").style.display = "none";
        
        }

        
        let phonetics = wordData.phonetics;
        if (phonetics && phonetics.length > 0) {
          let phoneticsElement = document.createElement("p");
          phoneticsElement.textContent = phonetics[0].text;
          phoneticsWord.appendChild(phoneticsElement);

          let audioUrl = phonetics[0].audio;
          let audioImage = document.createElement("img");
          audioImage.src = "media/audio.png";
          audioImage.alt = "Audio";
          audioImage.width = 25;
          audioImage.height = 25;
          audioImage.addEventListener("click", function () {
            let audio = new Audio(audioUrl);
            audio.play();
          });
          audioElement.appendChild(audioImage);
        }
      } else {
        let noResultsElement = document.createElement("div");
        noResultsElement.textContent = "No definitions found.";
        definitionsDiv.appendChild(noResultsElement);
      }
    }
  };
  xhr.send();
};