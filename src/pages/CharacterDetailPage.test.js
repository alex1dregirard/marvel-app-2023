import { render, screen } from '@testing-library/react';
import CharacterDetailPage from './CharacterDetailPage';
import { BrowserRouter } from 'react-router-dom';

const character = {
    id: "1",
    name: "Thor",
    description: "Thor description",
}

// mock the useLoaderData hook, so that we can test the CharacterDetailPage component
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // use actual for all non-hook parts
    useLoaderData: () => {
        return character;
    },
}));

describe('CharacterDetailPage', () => {

    test('render CharacterDetailPage component', () => {
        // when

        // then
        render(<CharacterDetailPage />, { wrapper: BrowserRouter });

        // expect the document title to be "Thor | Marvel App"
        expect(document.title).toBe(`${character.name} | Marvel App`);

        // expect to have a heading with the character name
        const h2Element = screen.getByRole('heading', { level: 2, name: character.name });
        expect(h2Element).toBeInTheDocument();

        // expect to have a paragraph with the character description
        const pElement = screen.getByText(character.description);
        expect(pElement).toBeInTheDocument();
    });
});