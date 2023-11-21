import PropTypes from 'prop-types';
import { useEffect } from "react";
import * as d3 from "d3";

/**
 * Draw the pie chart
 * @param {*} data 
 * @param {*} displayTooltip 
 * @param {*} displayValue 
 */
const drawChart = (data = []) => {
    // Define the radius
    const outerRadius = 100;

    // Define the margin
    const margin = {
        top: 10, right: 10, bottom: 10, left: 10,
    };

    // Define the width and height using the margin conventions
    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;

    // Remove the elements with undefined values
    const filteredData = data.filter((element) => { return element.value !== undefined });

    // Remove the old svg
    d3.select('#pie-container')
        .select('svg')
        .remove();

    // Create the arc
    const radius = Math.min(width, height) / 2;

    const innerRadius = radius * 0.5;

    const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius - 1);

    // Create the pie
    const pie = d3.pie()
        .padAngle(1 / radius) // padding between slices
        .sort(null) // disable sorting of data
        .value(d => d.value);

    // Create the color scale
    const color = d3.scaleOrdinal()
        // colors based on filteredData
        .domain(filteredData.map(d => d.name))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), filteredData.length).reverse());

    // Create the svg, with the right dimensions
    const svg = d3
        .select('#pie-container')
        .append('svg')
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height])

    // draw the donut
    svg.append("g")
        .selectAll()
        .data(pie(filteredData))
        .join("path")
        .attr("fill", d => color(d.data.name))
        .attr("d", arc)

    // add labels over the donut
    svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
        .selectAll()
        .data(pie(filteredData))
        .join("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        // add the name of the data
        .call(text => text.append("tspan")
            .attr("id", d => `pie-labels-name-${d.data.name}`)
            .attr("x", 0) // center the text
            .attr("y", "-0.4em") // add a space between the name and the value
            .attr("font-weight", "bold")
            .text(d => d.data.name))
        // add the value of the data
        .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
            .attr("id", d => `pie-labels-value-${d.data.name}`)
            .attr("x", 0) // center the text
            .attr("y", "0.7em") // add a space between the name and the value
            .attr("fill-opacity", 0.7) // make it lighter
            .text(d => d.data.value));
};

/**
 * Draw a pie chart with the statistics of a character
 * 
 * @param {*} data
 * @param {*} displayTooltip
 * @param {*} displayValue
 */ 
export default function D3PieChart({
    data,
}) {
    // useEffect is a hook that will run the code inside it only once when data is loaded
    useEffect(() => {
        // transform data
        const transformData = [
            { name: 'Force', value: data?.force },
            { name: 'Intelligence', value: data?.intelligence },
            { name: 'Energy', value: data?.energy },
            { name: 'Speed', value: data?.speed },
            { name: 'Durability', value: data?.durability },
            { name: 'Fighting', value: data?.fighting }
        ]

        console.log(transformData)
        // draw the chart
        drawChart(transformData);
    }, [data]);

    return (
        // Return the div that will contain the chart
        <div id="pie-container" />
    );
}

D3PieChart.propTypes = {
    data: PropTypes.shape({
        force: PropTypes.number,
        intelligence: PropTypes.number,
        energy: PropTypes.number,
        speed: PropTypes.number,
        durability: PropTypes.number,
        fighting: PropTypes.number,
    }),
};