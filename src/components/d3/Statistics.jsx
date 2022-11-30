import React, { useEffect, useRef } from 'react';
import { scaleLinear, select, axisBottom, scaleBand, color, scaleOrdinal, map } from 'd3';
import { axisLeft } from 'd3';
import { axisRight } from 'd3';

const data = [
    {
        day: "Lunes",
        percentage: 50,
        money: 50,
    },
    {
        day: "Martes",
        percentage: 70,
        money: 80,
    },
    {
        day: "Miercoles",
        percentage: 20,
        money: 70,
    },
    {
        day: "Jueves",
        percentage: 50,
        money: 30,
    },
    {
        day: "Viernes",
        percentage: 10,
        money: 30,
    },
    {
        day: "Sabado",
        percentage: 30,
        money: 90,
    },
    {
        day: "Domingo",
        percentage: 100,
        money: 100,
    },
]

const Statistics = () => {

    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const subgroups = ["percentage", "money"];

    const ref = useRef();

    useEffect(() => {
        const svgElement = select(ref.current);

        const x = scaleBand()
            .domain(days)
            .range([0, 400]);
        svgElement.append("g")
            .attr("transform", "translate(50, 310)")
            .call(axisBottom(x));

        const yLeft = scaleLinear()
            .domain([200, 0])
            .range([0, 300]);
        const axisYLeft = axisLeft(yLeft);
        axisYLeft.ticks(10)
            .tickFormat((value) => {
                return value + "\u20AC";
            })
        svgElement.append("g")
            .attr("transform", "translate(50, 10)")
            .call(axisYLeft);

        const yRight = scaleLinear()
            .domain([100, 0])
            .range([0, 300]);
        const axisYRight = axisRight(yRight);
        axisYRight.ticks(4)
            .tickFormat((value) => {
                return value + "%";
            })
        svgElement.append("g")
            .attr("transform", "translate(450, 10)")
            .call(axisYRight);

        const xSubgroup = scaleBand()
            .domain(subgroups)
            .range([0, x.bandwidth()])
            .padding([0.05]);

        const color = scaleOrdinal()
            .domain(subgroups)
            .range(["#61dafb", "#000000"]);

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
            .attr("x", (d) => { return xSubgroup(d.item) })
            .attr("y", (d) => { return yLeft(d.value) })
            .attr("width", xSubgroup.bandwidth())
            .attr("height", (d) => { return 300 - yLeft(d.value) })
            .attr("fill", (d) => { return color(d.item) });

    }, []);

    return (
        <svg ref={ref} width="500" height="500">
        </svg>
    );
}

export default Statistics;
