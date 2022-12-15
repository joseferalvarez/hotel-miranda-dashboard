"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var LogoStyled_1 = require("./LogoStyled");
var WordMark_1 = __importDefault(require("./WordMark"));
var Logo = function () {
    return (react_1["default"].createElement(LogoStyled_1.LogoStyled, null,
        react_1["default"].createElement(LogoStyled_1.LogoIcon, null,
            react_1["default"].createElement(LogoStyled_1.LogoLetter, null, "H")),
        react_1["default"].createElement(WordMark_1["default"], null)));
};
exports["default"] = Logo;
