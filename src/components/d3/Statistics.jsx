import React, { useEffect, useRef } from 'react';
import { scaleLinear, select, axisBottom, scaleBand, scaleOrdinal } from 'd3';
import { axisLeft } from 'd3';
import { axisRight } from 'd3';
import { FilterTable, FilterButton } from '../Blocks/Blocks';
import styled from 'styled-components';

const data = [
    {
        day: "Lunes",
        money: 50,
        percentage: 50,
    },
    {
        day: "Martes",
        money: 80,
        percentage: 70,
    },
    {
        day: "Miercoles",
        money: 70,
        percentage: 20,
    },
    {
        day: "Jueves",
        money: 30,
        percentage: 50,
    },
    {
        day: "Viernes",
        money: 30,
        percentage: 10,
    },
    {
        day: "Sabado",
        money: 90,
        percentage: 30,
    },
    {
        day: "Domingo",
        money: 100,
        percentage: 100,
    },
]

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        color: #393939;
        font-family: var(--font-poppins);
        font-weight: 500;
        font-size: 20px;
    }
`;

const StatsContainer = styled.div`
    display: flex;
    gap: 50px;
`;

const Stat = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    p{
        font-family: var(--font-poppins);
        font-size: 14px;
        &:nth-child(3){
            font-size: 16px;
            font-weight: 600;
        }
    }
`;

const Square = styled.div`
    width: 13px;
    height: 13px;
    background-color: ${(props) => props.color};
`;

const Statistics = () => {

    const margin = { top: 30, right: 50, bottom: 30, left: 50 };
    const width = 550 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const subgroups = ["money", "percentage"];

    const ref = useRef();

    useEffect(() => {

        const svgElement = select(ref.current);

        const x = scaleBand()
            .domain(days)
            .range([0, width]);
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", `translate(${margin.left}, ${height + margin.top})`)
            .call(axisBottom(x));

        const yLeft = scaleLinear()
            .domain([0, 200])
            .range([height, 0]);
        const axisYLeft = axisLeft(yLeft);
        axisYLeft.ticks(10)
            .tickFormat((value) => {
                return value + "\u20AC";
            })
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
            .call(axisYLeft);

        const yRight = scaleLinear()
            .domain([0, 100])
            .range([height, 0]);
        const axisYRight = axisRight(yRight);
        axisYRight.ticks(4)
            .tickFormat((value) => {
                return value + "%";
            })
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", `translate(${width + margin.left}, ${margin.top})`)
            .call(axisYRight);

        const xSubgroup = scaleBand()
            .domain(subgroups)
            .range([0, x.bandwidth()])
            .padding([0.05]);

        const color = scaleOrdinal()
            .domain(subgroups)
            .range(["#135846", "#E23428"]);

        svgElement
            .append("g")
            .selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", (d) => {
                return "translate(" + x(d.day) + ",0)";
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
            .attr("x", (d) => { return xSubgroup(d.item) + margin.left })
            .attr("y", (d) => { return (d.item === subgroups[0] ? (yLeft(d.value) + margin.top) : (yRight(d.value) + margin.top)) })
            .attr("width", xSubgroup.bandwidth())
            .attr("height", (d) => {
                return (d.item === subgroups[0] ? (height - yLeft(d.value)) : (height - yRight(d.value)))
            })
            .attr("fill", (d) => { return color(d.item) })

    }, []);

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
