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
    // If id is a number, convert it to string
    if (typeof id === 'number') {
        id = id.toString()
    }

    if (typeof id !== 'string') {
        throw new Error(`Parameter id must be a number or a string, but it was ${typeof id}`)
    }

    // Find character by id
    const character = characters.find((character) => character.id === id)

    // Throw error if character is not found
    if (!character) {
        throw new Error(`Character with id ${id} not found`)
    }
    return character
}

module.exports = {
    getCharacters,
    getCharacterById
}
