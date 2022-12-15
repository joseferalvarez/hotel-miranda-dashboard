"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var SelectStyled = styled_components_1["default"].select(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", ";\n    border-radius: 8px;\n    font-weight: 500;\n    font-family: var(--font-poppins);\n    padding: 13px 25px;\n    height: 50px;\n    &:focus{\n        outline: none;\n    }\n"], ["\n    ", ";\n    border-radius: 8px;\n    font-weight: 500;\n    font-family: var(--font-poppins);\n    padding: 13px 25px;\n    height: 50px;\n    &:focus{\n        outline: none;\n    }\n"])), function (props) {
    switch (props.typeSelect) {
        case "green":
            return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                    background-color: #135846;\n                    color: #FFFFFF;\n                "], ["\n                    background-color: #135846;\n                    color: #FFFFFF;\n                "])));
        case "white":
            return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                    background-color: white;\n                    border-radius: 1px solid #135846;\n                    color: #135846;\n                    width: 129px;\n                "], ["\n                    background-color: white;\n                    border-radius: 1px solid #135846;\n                    color: #135846;\n                    width: 129px;\n                "])));
        default:
            return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n            "], ["\n\n            "])));
    }
});
var Select = function (_a) {
    var typeSelect = _a.typeSelect, options = _a.options;
    return (react_1["default"].createElement(SelectStyled, { typeSelect: typeSelect }, options.map(function (option, index) {
        return (react_1["default"].createElement("option", { key: index }, option));
    })));
};
exports["default"] = Select;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
