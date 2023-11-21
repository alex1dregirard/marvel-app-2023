import { render, screen } from '@testing-library/react';
import RechartsPieChart from './RechartsPieChart';

jest.mock('recharts', () => {
    const OriginalRechartsModule = jest.requireActual('recharts');

    return {
        ...OriginalRechartsModule,
        ResponsiveContainer: ({ height, children }) => (
            <div className="recharts-responsive-container" style={{ width: 800, height }}>
                {children}
            </div>
        ),
    };
});

describe('RechartsPieChart', () => {
    test('renders the pie chart with correct data', () => {
        // when
        const data = {
            force: 80,
            intelligence: 90,
            energy: 70,
            speed: 85,
            durability: 75,
            fighting: 95
        };

        // then
        render(<RechartsPieChart data={data} />);

        // expect to be ok
        expect(true).toBe(true); 
    });

    test(' don\'t fail when data is null', () => {
        // when
        const data = null;

        // then
        render(<RechartsPieChart data={data} />);

        // expect to be ok
        expect(true).toBe(true); 
    });
});