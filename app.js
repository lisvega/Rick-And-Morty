
const URL = "https://rickandmortyapi.com/api/character/";


// Lanzar cuando se cargue la ventana
window.onload = () => {
    // Función disparadora
    init();
}

const init = async () => {

    // Lanzar la función que obtiene los datos de la API
    const characters = await getCharacters();
    console.log(characters);
    // Lanzar la función que formatea los datos de la API
    mappedCharacters(characters);
}


const getCharacters = async () => {


    // Lanzar la petición a la API
    const result = await fetch(URL);
    // Cambiar formato
    const resultToJson = await result.json();
    // Retornar el resultado
    return resultToJson;

}


const mappedCharacters = async (characters) => {

    // Mappear los datos de la API
    characters.results.map((character) => {

        // Función de pintado
        return printCharacter({
            nombre: character.name,
            image: character.image,
            origin: character.origin.name,
            species: character.species,
            location: character.location.name
        });
    })
}


const printCharacter = async (character) => {
    console.log(character);
    // Selector query - id
    const container = document.querySelector("#characters");
    // Crear un elemento HTML e insertarlo
    container.innerHTML +=

        `
    <div class ="container-principal">
    <li class="character1">
      <h2 class="title">${character.nombre}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p class="parrafo">${character.origin}</p>
      <p class="parrafo">${character.species}</p>
      <p class="parrafo">${character.location}</p>
    </li>
    </div>
  `
}
