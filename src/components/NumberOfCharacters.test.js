import { render } from '@testing-library/react';
import { NumberOfCharacters } from './NumberOfCharacters';

describe('NumberOfCharacters', () => {

  it('renders "There is no characters" when characters prop is empty', () => {
    const { getByText } = render(<NumberOfCharacters characters={[]} />);
    expect(getByText('There is no characters')).toBeInTheDocument();
  });

  it('renders "There is no characters" when characters prop is not passed', () => {
    const { getByText } = render(<NumberOfCharacters />);
    expect(getByText('There is no characters')).toBeInTheDocument();
  });

  it('renders "There is 1 character" when characters prop has 1 item', () => {
    const { getByText } = render(<NumberOfCharacters characters={[{id: '1', name: 'Iron Man'}]} />);
    expect(getByText('There is 1 character')).toBeInTheDocument();
  });

  it('renders "There is 2 characters" when characters prop has 2 items', () => {
    const { getByText } = render(<NumberOfCharacters characters={[{id: '1', name: 'Iron Man'}, {id: '2', name: 'Captain America'}]} />);
    expect(getByText('There is 2 characters')).toBeInTheDocument();
  });

});
