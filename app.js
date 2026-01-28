//  https://hp-api.onrender.com/api/characters

async function fetchCharacterUser() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    if (!response.ok) {
      console.log("Cannot realize this api");
    }
    const data = await response.json();
    renderUsersCharacter(data);
  } catch (error) {
    console.log(error);
  }
}

function renderUsersCharacter(characters) {
  let characterList = document.querySelector(".character__container");
  const characterRender = characters
    .slice(0, 10)
    .map((character) => {
      return ` <div class="movie">
          <img src="${character.image}" class="movie__image" alth="Movie Image Title" />
          <div class="character__info">
            <h3 class="character__name">${character.name}</h3>
            <span class="date__of__birth">${character.dateOfBirth}</span>
            <button class="more__details__info">More Details</button>
          </div>`;
    })
    .join("");
  characterList.innerHTML = characterRender;
}

fetchCharacterUser();
