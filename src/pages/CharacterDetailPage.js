import React from 'react';

import { useLoaderData } from 'react-router';
import CharacterDetail from '../components/CharacterDetail';
import { StatisticsPieChart } from '../components/StatisticsPieChart';

const CharacterDetailPage = () => {
    // retrieve the character using the useLoaderData hook
    const character = useLoaderData();

    document.title = `${character.name} | Marvel App`;

    return (
        <>
            <CharacterDetail character={character} />
            <StatisticsPieChart displayTooltip displayValue data={character.capacities} />
        </>
    );
};

export default CharacterDetailPage;
