// JavaScript Async functions for fetching and displaying the selected pokemons data. 


// 1. async function accepts a pokemon name as the arguement and fetches data from the API
// 2. response is deserialized and stored in the pokemonData variable, which is returned

async function grabPokemonData(pokemonName) {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
       
    const pokemonData = await response.json();
    console.log(pokemonData);
    return pokemonData;
}

//  Async functions: 
// 1. This function is passed the form submit event as it's argurment, prevents default browser refresh behavior.
// 2. Stores the value entered in the input field in pokemon variable. 

async function displayPokeInfo(event) {
    event.preventDefault();
    const pokemon = document.getElementById("pokemon").value;
    const pokemonInfoElement = document.getElementById("pokemon-info");
    pokemonInfoElement.innerHTML = "";

// "Pending" message will be shown as data is loading. 
// once the pokemon data is returnd the name, image, and success message will be shown. 

    try {
        pokemonInfoElement.innerHTML = "Pending..."
        const pokemonData = await grabPokemonData(pokemon)
        pokemonInfoElement.innerHTML = `
        <h2>${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <p>HERE IS THE POKEMON YOU REQUESTED!</p>`
        

    }
// If the pokemon is not found this message will display, prompting the user to try again. 

    catch (error) {
        console.log("Error:", error.message);
        pokemonInfoElement.innerHTML = "Pokemon Not Found!.. Please Try Agian";
    }
}

document.querySelector("form").addEventListener("submit", displayPokeInfo)