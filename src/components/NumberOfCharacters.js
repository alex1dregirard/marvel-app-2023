import PropTypes from 'prop-types';

export function NumberOfCharacters({ characters = [] }) {
  return (
    <p>
      There is {characters.length === 0 ? 'no' : characters.length} character{characters.length !== 1 ? 's' : ''}
    </p>
  );
}

NumberOfCharacters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};