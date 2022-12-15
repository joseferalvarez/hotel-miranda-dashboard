"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_1 = require("react-router");
var Guest = function () {
    var params = (0, react_router_1.useParams)();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null,
            "guest n\u00BA",
            params.idguest)));
};
exports["default"] = Guest;
