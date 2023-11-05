const characters = require('../data/characters.json');

/**
 * Get all characters from json file
 * @returns 
 */
function getCharacters() {
    return characters
}

/**
 * Get character by id
 * @param {number} id 
 * @returns 
 */
function getCharacterById(id) {
    const character = characters.find((character) => character.id === id)
    if (!character) {
        throw new Error(`Character with id ${id} not found`)
    }
    return character
}

module.exports = {
    getCharacters,
    getCharacterById
}
