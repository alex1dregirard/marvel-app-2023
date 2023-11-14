const { getCharacters, getCharacterById } = require('./character-api');
const fs = require('fs');

describe('character-api', () => {
  const expected = JSON.parse(fs.readFileSync('src/data/characters.json', 'utf8'));

  describe('getCharacters', () => {
    test('returns an array of characters', () => {
      // when

      // then
      const characters = getCharacters();

      // expect
      expect(Array.isArray(characters)).toBe(true);
      expect(characters.length).toBe(expected.length);
    });

  });

  describe('getCharacterById', () => {
    test('returns the character with the given id when id is a string', () => {
      // when
      const id = "1009663";
      const name = "Thor";

      // then
      const character = getCharacterById(id);

      // expect
      expect(character.id).toBe(id);
      expect(character.name).toBe(name);
    });

    test('returns the character with the given id when id is a number', () => {
      // when
      const id = 1009663;
      const name = "Thor";

      // then
      const character = getCharacterById(id);

      // expect
      expect(character.id).toBe(id.toString());
      expect(character.name).toBe(name);
    });

    test('throws an error if id is not provided', () => {
      expect(() => {
        getCharacterById();
      }).toThrow(`Parameter id must be a number or a string, but it was undefined`);
    });

    test('throws an error if id is not a number or a string', () => {
      expect(() => {
        getCharacterById({});
      }).toThrow(`Parameter id must be a number or a string, but it was object`);
    });

    test('throws an error if character with given id is not found', () => {
      const id = 999;
      expect(() => {
        getCharacterById(id);
      }).toThrow(`Character with id ${id} not found`);
    });
  });
});
