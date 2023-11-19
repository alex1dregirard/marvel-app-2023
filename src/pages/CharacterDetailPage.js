import React from 'react';

import { useLoaderData } from 'react-router';
import CharacterDetail from '../components/CharacterDetail';
import { D3PieChart } from '../components/D3PieChart';

const CharacterDetailPage = () => {
    // retrieve the character using the useLoaderData hook
    const character = useLoaderData();

    document.title = `${character.name} | Marvel App`;

    return (
        <>
            <CharacterDetail character={character} />
            <D3PieChart displayTooltip displayValue data={character.capacities} />
        </>
    );
};

export default CharacterDetailPage;
