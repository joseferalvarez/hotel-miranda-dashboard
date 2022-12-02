import React, { useEffect, useRef, useState } from 'react';
import { scaleLinear, select, axisBottom, scaleBand, scaleOrdinal } from 'd3';
import { axisLeft } from 'd3';
import { axisRight } from 'd3';
import { FilterTable, FilterButton } from '../Blocks/Blocks';
import {
    FilterContainer,
    StatsContainer,
    Stat,
    Square
} from "./StatisticsStyled.jsx"

import data from "../../db/bookings.json";

const Statistics = () => {

    const [graphWidth, setGraphWidth] = useState((window.innerWidth * 30) / 100);

    const ref = useRef();

    const margin = {
        top: 30,
        right: 35,
        bottom: 30,
        left: 35
    };
    const width = graphWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const subgroups = ["money", "percentage"];

    useEffect(() => {
        const svgElement = select(ref.current);

        setTimeout(() => {
            svgElement.selectAll("*").remove();
            createGraph(svgElement);
        }, 200)

    }, [graphWidth]);

    window.addEventListener("resize", () => {
        setGraphWidth((window.innerWidth * 30) / 100);
    })

    const createGraph = (svgElement) => {

        /*TODO: Recoger los dias de la base de datos*/
        const scaleDays = scaleBand()
            .domain(days)
            .range([0, width]);
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", `translate(${margin.left}, ${height + margin.top})`)
            .call(axisBottom(scaleDays));

        const scaleSales = scaleLinear()
            .domain([0, getMaxSales()])
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

        /*TODO: Cambiar el nombre*/
        const div = select("body").append("div")
            .style("opacity", 0)
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
                    .style("opacity", 1)
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
                    .style("opacity", 0)
            })
    }

    const getTotalSales = () => {
        let sales = 0;

        data.forEach((item) => {
            sales += item.money;
        });

        return sales;
    }

    const getOccupancyPercentage = () => {
        let occupancy = 0;

        data.forEach((item) => {
            occupancy += item.percentage
        })

        occupancy = Math.round(occupancy / data.length);

        return occupancy;
    }

    const getMaxSales = () => {
        let max = 0;
        data.forEach((item) => {
            if (item.money > max) {
                max = item.money;
            }
        });
        return max;
    }

    return (
        <div>
            <FilterContainer>
                <p>Reservation Stats</p>
                <FilterTable>
                    <FilterButton>Daily</FilterButton>
                    <FilterButton>Weekly</FilterButton>
                    <FilterButton>Monthly</FilterButton>
                </FilterTable>
            </FilterContainer>
            <StatsContainer>
                <Stat>
                    <Square color='#135846' />
                    <p>Sales</p>
                    <p>${getTotalSales()}</p>
                </Stat>
                <Stat>
                    <Square color='#E23428' />
                    <p>Occupation</p>
                    <p>{getOccupancyPercentage()}%</p>
                </Stat>
            </StatsContainer>
            <svg ref={ref} width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
            </svg>
        </div>
    );
}

export default Statistics;
