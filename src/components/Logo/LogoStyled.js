"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.LogoLetter = exports.LogoIcon = exports.LogoStyled = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var LogoStyled = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    margin-bottom: 50px;\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    margin-bottom: 50px;\n"])));
exports.LogoStyled = LogoStyled;
var LogoIcon = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\noverflow: hidden;\n    width: 80px;\n    height: 80px;\n    box-shadow: 0px 14px 24px 0px rgba(139, 139, 139, 0.25);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\noverflow: hidden;\n    width: 80px;\n    height: 80px;\n    box-shadow: 0px 14px 24px 0px rgba(139, 139, 139, 0.25);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));
exports.LogoIcon = LogoIcon;
var LogoLetter = styled_components_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\noverflow: hidden;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: var(--font-poppins);\n"], ["\noverflow: hidden;\n    font-size: 2.5rem;\n    font-weight: 700;\n    font-family: var(--font-poppins);\n"])));
exports.LogoLetter = LogoLetter;
var templateObject_1, templateObject_2, templateObject_3;
