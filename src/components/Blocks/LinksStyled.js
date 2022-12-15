"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.LinkButton = exports.ButtonNew = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var LinkButton = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: #EBF1EF;\n    border: none;\n    border-radius: 8px;\n    width: 160px;\n    height: 50px;\n    a{\n        text-align: center;\n        font-family: var(--font-poppins);\n        text-decoration: none;\n        color: #135846;\n        font-size: 14px;\n        font-weight: 600;\n        display: block;\n        padding: 15px;\n    }\n"], ["\n    background-color: #EBF1EF;\n    border: none;\n    border-radius: 8px;\n    width: 160px;\n    height: 50px;\n    a{\n        text-align: center;\n        font-family: var(--font-poppins);\n        text-decoration: none;\n        color: #135846;\n        font-size: 14px;\n        font-weight: 600;\n        display: block;\n        padding: 15px;\n    }\n"])));
exports.LinkButton = LinkButton;
var ButtonNew = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: #135846;\n    border-radius: 8px;\n    width: 213px;\n    height: 50px;\n    a{\n        text-align: center;\n        font-family: var(--font-poppins);\n        text-decoration: none;\n        color: #FFFFFF;\n        font-size: 14px;\n        font-weight: 600;\n        display: block;\n        padding: 15px;\n    }\n"], ["\n    background-color: #135846;\n    border-radius: 8px;\n    width: 213px;\n    height: 50px;\n    a{\n        text-align: center;\n        font-family: var(--font-poppins);\n        text-decoration: none;\n        color: #FFFFFF;\n        font-size: 14px;\n        font-weight: 600;\n        display: block;\n        padding: 15px;\n    }\n"])));
exports.ButtonNew = ButtonNew;
var templateObject_1, templateObject_2;
