"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Link = exports.NavigationAuthor = exports.NavigationRights = exports.NavigationDescription = exports.UserCard = exports.Navigation = exports.LogoContainer = exports.ArrowButton = exports.NavContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var NavContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    box-shadow: 13px 3px 40px #00000005;\n    background-color: #FFFFFF;\n    transition: width 0.3s;\n    overflow: visible;\n    position: relative;\n"], ["\n    width: ", ";\n    box-shadow: 13px 3px 40px #00000005;\n    background-color: #FFFFFF;\n    transition: width 0.3s;\n    overflow: visible;\n    position: relative;\n"])), function (props) { return props.display; });
exports.NavContainer = NavContainer;
var ArrowButton = styled_components_1["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    right: -50px;\n    top: 45px;\n    background-color: transparent;\n    border: none;\n    width: 25px;\n    height: 25px;\n\n    &:focus{\n        outline: none;\n    }\n\n    .arrow{\n        width: 25px;\n        height: 25px;\n    }\n"], ["\n    position: absolute;\n    right: -50px;\n    top: 45px;\n    background-color: transparent;\n    border: none;\n    width: 25px;\n    height: 25px;\n\n    &:focus{\n        outline: none;\n    }\n\n    .arrow{\n        width: 25px;\n        height: 25px;\n    }\n"])));
exports.ArrowButton = ArrowButton;
var UserCard = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin-left: 15%;\n    padding-bottom: 10px;\n    overflow: hidden;\n"], ["\n    margin-left: 15%;\n    padding-bottom: 10px;\n    overflow: hidden;\n"])));
exports.UserCard = UserCard;
var LogoContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding-top: 30px;\n    overflow: hidden;\n"], ["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding-top: 30px;\n    overflow: hidden;\n"])));
exports.LogoContainer = LogoContainer;
var Navigation = styled_components_1["default"].nav(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\noverflow: hidden;\n    ul{\n        display: flex;\n        flex-direction: column;\n        list-style: none;\n        padding: 0;\n        a{\n            text-decoration: none;\n        }\n    }\n"], ["\noverflow: hidden;\n    ul{\n        display: flex;\n        flex-direction: column;\n        list-style: none;\n        padding: 0;\n        a{\n            text-decoration: none;\n        }\n    }\n"])));
exports.Navigation = Navigation;
var Link = styled_components_1["default"].li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    width: 70%;\n    display: flex;\n    height: 70px;\n    border-radius: 6px;\n    align-items: center;\n    gap: 20px;\n    transition: all 0.2s;\n\n    &:hover p,\n    &:hover .icon{\n        color: #E23428;\n    }\n\n    div{\n        margin-right: 15%;\n        transition: background-color 0.2s;\n        width: 8px;\n        height: 100%;\n        background-color: ", ";;\n        border-radius: 0 8px 8px 0;\n    }\n\n    p {\n        color: ", ";\n        font-family: var(--font-poppins);\n        font-size: 18px;\n        text-decoration: none;\n    }\n\n    .icon{\n        color: ", ";\n        width: 20px;\n        height: 20px;\n    }\n"], ["\n    width: 70%;\n    display: flex;\n    height: 70px;\n    border-radius: 6px;\n    align-items: center;\n    gap: 20px;\n    transition: all 0.2s;\n\n    &:hover p,\n    &:hover .icon{\n        color: #E23428;\n    }\n\n    div{\n        margin-right: 15%;\n        transition: background-color 0.2s;\n        width: 8px;\n        height: 100%;\n        background-color: ", ";;\n        border-radius: 0 8px 8px 0;\n    }\n\n    p {\n        color: ", ";\n        font-family: var(--font-poppins);\n        font-size: 18px;\n        text-decoration: none;\n    }\n\n    .icon{\n        color: ", ";\n        width: 20px;\n        height: 20px;\n    }\n"])), function (props) {
    if (props.route === props.current) {
        return "#E23428";
    }
    else {
        return "#FFFFFF";
    }
}, function (props) {
    if (props.route === props.current) {
        return "#E23428";
    }
    else {
        return "#799283";
    }
}, function (props) {
    if (props.route === props.current) {
        return "#E23428";
    }
    else {
        return "#799283";
    }
});
exports.Link = Link;
var NavigationDescription = styled_components_1["default"].p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    padding-left: 15%;\n    overflow: hidden;\n    font-family: var(--font-poppins);\n    font-weight: 600;\n    color: #212121;\n"], ["\n    padding-left: 15%;\n    overflow: hidden;\n    font-family: var(--font-poppins);\n    font-weight: 600;\n    color: #212121;\n"])));
exports.NavigationDescription = NavigationDescription;
var NavigationRights = styled_components_1["default"].p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    padding-left: 15%;\n    overflow: hidden;\n    color: #799283;\n    font-size: 14px;\n"], ["\n    padding-left: 15%;\n    overflow: hidden;\n    color: #799283;\n    font-size: 14px;\n"])));
exports.NavigationRights = NavigationRights;
var NavigationAuthor = styled_components_1["default"].p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    padding-left: 15%;\n    overflow: hidden;\n    color: #799283;\n    font-size: 14px;\n    margin-top: 30px;\n"], ["\n    padding-left: 15%;\n    overflow: hidden;\n    color: #799283;\n    font-size: 14px;\n    margin-top: 30px;\n"])));
exports.NavigationAuthor = NavigationAuthor;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
