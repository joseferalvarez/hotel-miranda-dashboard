"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.UserEmail = exports.UserName = exports.Card = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Card = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    max-width: 200px;\n    height: 200px;\n    padding: 20px;\n    border-radius: 18px;\n    box-shadow: 0px 6px 6px #00000014;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    img{\n        width: 70px;\n        height: 70px;\n        object-fit: cover;\n        display: block;\n        margin: auto;\n        border-radius: 8px;\n    }\n"], ["\n    width: 100%;\n    max-width: 200px;\n    height: 200px;\n    padding: 20px;\n    border-radius: 18px;\n    box-shadow: 0px 6px 6px #00000014;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    img{\n        width: 70px;\n        height: 70px;\n        object-fit: cover;\n        display: block;\n        margin: auto;\n        border-radius: 8px;\n    }\n"])));
exports.Card = Card;
var UserName = styled_components_1["default"].p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: #393939;\n    font-family: var(--font-poppins);\n    text-align: center;\n    font-weight: 500;\n"], ["\n    color: #393939;\n    font-family: var(--font-poppins);\n    text-align: center;\n    font-weight: 500;\n"])));
exports.UserName = UserName;
var UserEmail = styled_components_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: #B2B2B2;\n    font-family: var(--font-poppins);\n    font-size: 12px;\n    text-align: center;\n"], ["\n    color: #B2B2B2;\n    font-family: var(--font-poppins);\n    font-size: 12px;\n    text-align: center;\n"])));
exports.UserEmail = UserEmail;
var templateObject_1, templateObject_2, templateObject_3;
