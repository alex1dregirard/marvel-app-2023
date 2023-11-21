import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const RechartsPieChart = ({ data }) => {
    let transformedData = [];

    transformedData = [
        { name: 'Force', value: data?.force },
        { name: 'Intelligence', value: data?.intelligence },
        { name: 'Energy', value: data?.energy },
        { name: 'Speed', value: data?.speed },
        { name: 'Durability', value: data?.durability },
        { name: 'Fighting', value: data?.fighting }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

    return (
        <ResponsiveContainer width="100%" height={224}>
            <PieChart>
                <Pie dataKey="value" cx={100} cy={100}  data={transformedData} innerRadius={40} outerRadius={80} label>
                    {
                        transformedData.map((entry) => <Cell key={`cell-${entry.name}`} fill={COLORS[transformedData.indexOf(entry) % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}

RechartsPieChart.propTypes = {
    data: PropTypes.shape({
        force: PropTypes.number,
        intelligence: PropTypes.number,
        energy: PropTypes.number,
        speed: PropTypes.number,
        durability: PropTypes.number,
        fighting: PropTypes.number,
    }),
};

export default RechartsPieChart;