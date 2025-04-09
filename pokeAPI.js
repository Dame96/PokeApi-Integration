// JavaScript to Display Pokemon info from the Poke Api 

async function grabPokemonData(pokemonName) {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
       
    const pokemonData = await response.json();
    console.log(pokemonData);
    return pokemonData;
}

async function displayPokeInfo(event) {
    event.preventDefault();
    const pokemon = document.getElementById("pokemon").value;
    const pokemonInfoElement = document.getElementById("pokemon-info");
    pokemonInfoElement.innerHTML = "";

    try {
        pokemonInfoElement.innerHTML = "Pending..."
        const pokemonData = await grabPokemonData(pokemon)
        pokemonInfoElement.innerHTML = `
        <h2>${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <p>HERE IS THE POKEMON YOU REQUESTED!</p>`
        

    }

    catch (error) {
        console.log("Error:", error.message);
        pokemonInfoElement.innerHTML = "Pokemon Not Found!.. Please Try Agian";
    }
}

document.querySelector("form").addEventListener("submit", displayPokeInfo)