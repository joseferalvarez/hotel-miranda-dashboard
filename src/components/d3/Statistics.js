"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var d3_1 = require("d3");
var d3_2 = require("d3");
var d3_3 = require("d3");
var Blocks_1 = require("../Blocks/Blocks");
var StatisticsStyled_jsx_1 = require("./StatisticsStyled.jsx");
var bookings_json_1 = __importDefault(require("../../db/bookings.json"));
var Statistics = function () {
    var _a = (0, react_1.useState)((window.innerWidth * 30) / 100), graphWidth = _a[0], setGraphWidth = _a[1];
    var ref = (0, react_1.useRef)();
    var margin = {
        top: 30,
        right: 35,
        bottom: 30,
        left: 35
    };
    var width = graphWidth - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;
    var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    var subgroups = ["money", "percentage"];
    (0, react_1.useEffect)(function () {
        var svgElement = (0, d3_1.select)(ref.current);
        setTimeout(function () {
            svgElement.selectAll("*").remove();
            createGraph(svgElement);
        }, 200);
    }, [graphWidth]);
    /*TODO: Ver si se puede hacer de otra forma*/
    window.addEventListener("resize", function () {
        setGraphWidth((window.innerWidth * 30) / 100);
    });
    var createGraph = function (svgElement) {
        /*TODO: Recoger los dias de la base de datos*/
        var scaleDays = (0, d3_1.scaleBand)()
            .domain(days)
            .range([0, width]);
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", "translate(".concat(margin.left, ", ").concat(height + margin.top, ")"))
            .call((0, d3_1.axisBottom)(scaleDays));
        var scaleSales = (0, d3_1.scaleLinear)()
            .domain([0, getMaxSales()])
            .range([height, 0]);
        var axisYLeft = (0, d3_2.axisLeft)(scaleSales);
        axisYLeft.ticks(10)
            .tickFormat(function (value) {
            return "$" + value;
        });
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", "translate(".concat(margin.left, ", ").concat(margin.top, ")"))
            .call(axisYLeft);
        var scaleOccupancy = (0, d3_1.scaleLinear)()
            .domain([0, 100])
            .range([height, 0]);
        var axisYRight = (0, d3_3.axisRight)(scaleOccupancy);
        axisYRight.ticks(4)
            .tickFormat(function (value) {
            return value + "%";
        });
        svgElement.append("g")
            .attr("color", "#6E6E6E")
            .attr("transform", "translate(".concat(width + margin.left, ", ").concat(margin.top, ")"))
            .call(axisYRight);
        var scaleProperties = (0, d3_1.scaleBand)()
            .domain(subgroups)
            .range([0, scaleDays.bandwidth()])
            .padding([0.05]);
        var color = (0, d3_1.scaleOrdinal)()
            .domain(subgroups)
            .range(["#135846", "#E23428"]);
        var colorHover = (0, d3_1.scaleOrdinal)()
            .domain(subgroups)
            .range(["#0e3f32", "#ca271c"]);
        /*TODO: Cambiar el nombre*/
        var div = (0, d3_1.select)("body").append("div")
            .style("opacity", 0)
            .style("background-color", "#FFFFFF")
            .style("padding", "5px")
            .style("border-radius", "8px")
            .style("box-shadow", "0px 16px 30px #00000014")
            .style("font-family", "Poppins");
        svgElement
            .append("g")
            .selectAll("g")
            .data(bookings_json_1["default"])
            .enter()
            .append("g")
            .attr("transform", function (d) {
            return "translate(" + scaleDays(d.day) + ",0)";
        })
            .selectAll("rect")
            .data(function (d) {
            return subgroups.map(function (item) {
                return {
                    item: item, value: d[item]
                };
            });
        })
            .enter().append("rect")
            .attr("x", function (d) { return scaleProperties(d.item) + margin.left + 2; })
            .attr("y", function (d) { return (d.item === subgroups[0] ? (scaleSales(d.value) + margin.top) : (scaleOccupancy(d.value) + margin.top)); })
            .attr("width", scaleProperties.bandwidth() - 4)
            .attr("height", function (d) {
            return (d.item === subgroups[0] ? (height - scaleSales(d.value)) : (height - scaleOccupancy(d.value)));
        })
            .attr("fill", function (d) { return color(d.item); })
            /*TODO: A veces falla el mouseover, buscar por que*/
            .on("mouseover", function (e, d) {
            (0, d3_1.select)(e.srcElement)
                .transition().duration("100")
                .attr("fill", function (d) { return colorHover(d.item); });
            div.transition()
                .duration("100")
                .style("opacity", 1);
            div.html(d.item === subgroups[0]
                ? "$" + d.value
                : d.value + "%")
                .style("position", "absolute")
                .style("left", (e.pageX + 10) + "px")
                .style("top", (e.pageY - 5) + "px");
        })
            .on("mouseout", function (e, d) {
            (0, d3_1.select)(e.srcElement)
                .transition().duration("100")
                .attr("fill", function (d) { return color(d.item); });
            div.transition()
                .duration("100")
                .style("opacity", 0);
        });
    };
    var getTotalSales = function () {
        var sales = 0;
        bookings_json_1["default"].forEach(function (item) {
            sales += item.money;
        });
        return sales;
    };
    var getOccupancyPercentage = function () {
        var occupancy = 0;
        bookings_json_1["default"].forEach(function (item) {
            occupancy += item.percentage;
        });
        occupancy = Math.round(occupancy / bookings_json_1["default"].length);
        return occupancy;
    };
    var getMaxSales = function () {
        var max = 0;
        bookings_json_1["default"].forEach(function (item) {
            if (item.money > max) {
                max = item.money;
            }
        });
        return max;
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(StatisticsStyled_jsx_1.FilterContainer, null,
            react_1["default"].createElement("p", null, "Reservation Stats"),
            react_1["default"].createElement(Blocks_1.FilterTable, null,
                react_1["default"].createElement(Blocks_1.FilterButton, null, "Daily"),
                react_1["default"].createElement(Blocks_1.FilterButton, null, "Weekly"),
                react_1["default"].createElement(Blocks_1.FilterButton, null, "Monthly"))),
        react_1["default"].createElement(StatisticsStyled_jsx_1.StatsContainer, null,
            react_1["default"].createElement(StatisticsStyled_jsx_1.Stat, null,
                react_1["default"].createElement(StatisticsStyled_jsx_1.Square, { color: '#135846' }),
                react_1["default"].createElement("p", null, "Sales"),
                react_1["default"].createElement("p", null,
                    "$",
                    getTotalSales())),
            react_1["default"].createElement(StatisticsStyled_jsx_1.Stat, null,
                react_1["default"].createElement(StatisticsStyled_jsx_1.Square, { color: '#E23428' }),
                react_1["default"].createElement("p", null, "Occupation"),
                react_1["default"].createElement("p", null,
                    getOccupancyPercentage(),
                    "%"))),
        react_1["default"].createElement("svg", { ref: ref, width: width + margin.left + margin.right, height: height + margin.top + margin.bottom })));
};
exports["default"] = Statistics;
