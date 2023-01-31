import React, { useEffect, useRef, useState } from 'react';
import { scaleLinear, select, axisBottom, scaleBand, scaleOrdinal } from 'd3';
import { axisLeft } from 'd3';
import { axisRight } from 'd3';
import {
    FilterContainer,
    StatsContainer,
    Stat,
    Square
} from "./StatisticsStyled.jsx"
import { useSelector } from 'react-redux';
import { getTotalSales, getOccupancyPercentage, getMaxSales } from '../../helpers/graph.js';


const Statistics = ({ stats }) => {

    const graphWidth = 450;
    const [data, setData] = useState(null);
    const { bookings } = useSelector((state) => state.bookingsReducer);

    const ref = useRef();

    const margin = {
        top: 30,
        right: 40,
        bottom: 30,
        left: 40
    };
    const width = graphWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const DAYS_WEEK = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    const days = stats.map((day) => DAYS_WEEK[new Date(day.date).getDay()]);
    const subgroups = ["money", "percentage"];

    useEffect(() => {
        const stData = stats.map((day) => {
            return {
                day: DAYS_WEEK[new Date(day.date).getDay()],
                money: day.amount / 100,
                percentage: (day.count * 100) / bookings.length
            };
        });
        setData(stData);
    }, [stats]);

    useEffect(() => {
        const svgElement = select(ref.current);
        svgElement.selectAll("*").remove();
        createGraph(svgElement);
    }, [data]);

    const createGraph = (svgElement) => {
        const scaleDays = scaleBand()
            .domain(days)
            .range([0, width]);
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", `translate(${margin.left}, ${height + margin.top})`)
            .call(axisBottom(scaleDays));

        const scaleSales = scaleLinear()
            .domain([0, getMaxSales(data)])
            .range([height, 0]);
        const axisYLeft = axisLeft(scaleSales);
        axisYLeft.ticks(10)
            .tickFormat((value) => {
                return "$" + value;
            })
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(axisYLeft);

        const scaleOccupancy = scaleLinear()
            .domain([0, 100])
            .range([height, 0]);
        const axisYRight = axisRight(scaleOccupancy);
        axisYRight.ticks(4)
            .tickFormat((value) => {
                return value + "%";
            })
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", `translate(${width + margin.left}, ${margin.top})`)
            .call(axisYRight);

        const scaleProperties = scaleBand()
            .domain(subgroups)
            .range([0, scaleDays.bandwidth()])
            .padding([0.05]);

        const color = scaleOrdinal()
            .domain(subgroups)
            .range(["#135846", "#E23428"]);

        const colorHover = scaleOrdinal()
            .domain(subgroups)
            .range(["#0e3f32", "#ca271c"]);

        const div = select("body").append("div")
            .style("display", "none")
            .style("background-color", "#FFFFFF")
            .style("padding", "5px")
            .style("border-radius", "8px")
            .style("box-shadow", "0px 16px 30px #00000014")
            .style("font-family", "Poppins");

        svgElement
            .append("g")
            .selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", (d) => {
                return "translate(" + scaleDays(d.day) + ",0)";
            })
            .selectAll("rect")
            .data((d) => {
                return subgroups.map((item) => {
                    return {
                        item: item, value: d[item]
                    }
                })
            })
            .enter().append("rect")
            .attr("x", (d) => { return scaleProperties(d.item) + margin.left + 2 })
            .attr("y", (d) => { return (d.item === subgroups[0] ? (scaleSales(d.value) + margin.top) : (scaleOccupancy(d.value) + margin.top)) })
            .attr("width", scaleProperties.bandwidth() - 4)
            .attr("height", (d) => {
                return (d.item === subgroups[0] ? (height - scaleSales(d.value)) : (height - scaleOccupancy(d.value)))
            })
            .attr("fill", (d) => { return color(d.item) })
            .on("mouseover", (e, d) => {

                select(e.srcElement)
                    .transition().duration("100")
                    .attr("fill", (d) => colorHover(d.item))

                div.transition()
                    .duration("100")
                    .style("display", "inline-block")
                div.html(d.item === subgroups[0]
                    ? "$" + d.value
                    : d.value + "%")
                    .style("position", "absolute")
                    .style("left", (e.pageX + 10) + "px")
                    .style("top", (e.pageY - 5) + "px");
            })
            .on("mouseout", (e, d) => {
                select(e.srcElement)
                    .transition().duration("100")
                    .attr("fill", (d) => { return color(d.item) })

                div.transition()
                    .duration("100")
                    .style("display", "none")
            })
    }

    if (data) {
        return (
            <div>
                <FilterContainer>
                    <p>Reservation Stats</p>
                </FilterContainer>
                <StatsContainer>
                    <Stat>
                        <Square color='#135846' />
                        <p>Sales</p>
                        <p>${getTotalSales(data)}</p>
                    </Stat>
                    <Stat>
                        <Square color='#E23428' />
                        <p>Occupation</p>
                        <p>{getOccupancyPercentage(data)}%</p>
                    </Stat>
                </StatsContainer>
                <svg ref={ref} width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
                </svg>
            </div>
        );
    } else {
        return (<></>);
    }
}

export default Statistics;
