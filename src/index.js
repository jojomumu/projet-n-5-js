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
    toggleDark.style.backgroundColor = 'white';
    fontButton.style.backgroundColor = 'white';
  } else {
    logo.src = 'media/logo1.png';
    toggleDark.style.backgroundImage = 'url(media/moon.png)';
    toggleDark.style.backgroundColor = '#a5a5a5';
    fontButton.style.backgroundColor = '#a5a5a5';
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
};

fontButton.addEventListener('click', changeFont);

function updateResearch(value) {
  document.getElementById("searched").textContent = value;
};

function search() {
  let searchInput = document.getElementById("research");
  let word = searchInput.value;

  let definitionsDiv = document.getElementById("searchdef");
  definitionsDiv.innerHTML = "";

  let synonymesDiv = document.getElementById("listesyno");
  synonymesDiv.innerHTML = "";

  let exemplesDiv = document.getElementById("exemples");
  exemplesDiv.innerHTML = "";

  let phoneticsWord = document.getElementById("phone");
  phoneticsWord.innerHTML = "";

};



// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/" + word, true);
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     var response = JSON.parse(xhr.responseText);

//     if (response.length > 0) {
//       var meanings = response[0].meanings;

//       for (var i = 0; i < meanings.length; i++) {
//         var definition = meanings[i].definitions[0].definition;

//         var definitionElement = document.createElement("div");
//         definitionElement.className = "definition";
//         definitionElement.textContent = definition;
//         definitionsDiv.appendChild(definitionElement);

//         var synonyms = meanings[i].definitions[0].synonyms;
//         if (synonyms && synonyms.length > 0) {
//           var synonymsElement = document.createElement("div");
//           synonymsElement.textContent = "Synonyms: " + synonyms.join(", ");
//           definitionsDiv.appendChild(synonymsElement);
//         }

//         var examples = meanings[i].definitions[0].examples;
//         if (examples && examples.length > 0) {
//           var examplesElement = document.createElement("div");
//           examplesElement.textContent = "Examples: ";
//           definitionsDiv.appendChild(examplesElement);

//           var examplesList = document.createElement("ul");
//           for (var j = 0; j < examples.length; j++) {
//             var exampleItem = document.createElement("li");
//             exampleItem.textContent = examples[j];
//             examplesList.appendChild(exampleItem);
//           }
//           definitionsDiv.appendChild(examplesList);
//         }
//       }
//     } else {
//       var noResultsElement = document.createElement("div");
//       noResultsElement.textContent = "No definitions found.";
//       definitionsDiv.appendChild(noResultsElement);
//     }
//   } else {
//     console.log("Request failed. Status: " + xhr.status);
//   }
// };
// xhr.send();
