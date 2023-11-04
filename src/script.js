console.log("Welcome to marvel app");

/**
 * Get characters from json file 
 */

const getCharacters = () => {
    const API_URL = 'http://localhost:3000/data/characters.json';
    return fetch(API_URL)
        .then(response => response.json());

};

// Call getCharacters function, and add characters to the list
const characters = getCharacters().then(characters => {
    console.log(characters);
});
