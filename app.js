// Interactive Dark and Light Mode
function toggleMode() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

//  https://hp-api.onrender.com/api/characters
let searchInput = document.querySelector(".input__search");
let characterList = document.querySelector(".character__container");
let allCharacters = [];

searchInput.addEventListener("keyup", (event) => {
  const searchTarget = event.target.value.toLowerCase();
  const filterCharacter = allCharacters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchTarget) ||
      character.id.toLowerCase().includes(searchTarget)
    );
  });
  renderUsersCharacter(filterCharacter);
  if (searchTarget.length === 0) {
    renderUsersCharacter(allCharacters.slice(0, 6));
  }
});

async function fetchCharacterUser() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    if (!response.ok) {
      console.log("Cannot realize this api");
    }
    allCharacters = await response.json();
    renderUsersCharacter(allCharacters.slice(0, 6));
  } catch (error) {
    console.log(error);
  }
}

function renderUsersCharacter(characters) {
  const characterRender = characters

    .map((character) => {
      return ` 
      <div class="movie">
     
         <img src="${character.image || "placeholder.jpg"}" 
     onerror="this.src='https://via.placeholder.com/198x288?text=No+Image'" 
     class="movie__image" alt="${character.name}" />
          <div class="character__info">
            <h3 class="character__name">${character.name}</h3>
            <span class="date__of__birth">${character.gender}</span>
            <button class="more__details__info">More Details</button>
            
          </div>
        </div>`;
    })
    .join("");
  characterList.innerHTML = characterRender;
}
function loadingResult(event) {
  event.preventDefault();
}

fetchCharacterUser();

const formSubmit = document.querySelector("form");

formSubmit.addEventListener("submit", loadingResult);
