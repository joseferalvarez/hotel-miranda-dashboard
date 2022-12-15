"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var hi_1 = require("react-icons/hi");
var bs_1 = require("react-icons/bs");
var Blocks_1 = require("../Blocks/Blocks");
var UsersRowStyled_jsx_1 = require("./UsersRowStyled.jsx");
var UsersRow = function (_a) {
    var user = _a.user;
    return (react_1["default"].createElement(UsersRowStyled_jsx_1.Row, null,
        react_1["default"].createElement(UsersRowStyled_jsx_1.DataContainer, null,
            react_1["default"].createElement(UsersRowStyled_jsx_1.CheckboxContainer, null,
                react_1["default"].createElement(Blocks_1.Checkbox, null,
                    react_1["default"].createElement("input", { type: "checkbox" }),
                    react_1["default"].createElement("label", null,
                        react_1["default"].createElement("span", null))))),
        react_1["default"].createElement("td", null,
            react_1["default"].createElement(UsersRowStyled_jsx_1.UserNameContainer, null,
                react_1["default"].createElement("img", { src: user.photo, alt: "" }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(UsersRowStyled_jsx_1.UserName, null, user.name),
                    react_1["default"].createElement(UsersRowStyled_jsx_1.UserData, null,
                        "#",
                        user.id),
                    react_1["default"].createElement(UsersRowStyled_jsx_1.UserData, null,
                        "Joined on ",
                        user.date)))),
        react_1["default"].createElement(UsersRowStyled_jsx_1.DataContainer, null,
            react_1["default"].createElement("p", { className: 'data__description' }, user.description)),
        react_1["default"].createElement(UsersRowStyled_jsx_1.DataContainer, null,
            react_1["default"].createElement("p", { className: 'data__contact' },
                react_1["default"].createElement(hi_1.HiOutlinePhone, null),
                react_1["default"].createElement("span", null, user.phone)),
            react_1["default"].createElement("p", { className: 'data__contact' },
                react_1["default"].createElement(hi_1.HiOutlineMail, null),
                react_1["default"].createElement("span", null, user.email))),
        react_1["default"].createElement(UsersRowStyled_jsx_1.DataContainer, null,
            react_1["default"].createElement(UsersRowStyled_jsx_1.UserStatus, { status: user.state ? "#5AD07A" : "#E23428" }, user.state ? "ACTIVE" : "INACTIVE")),
        react_1["default"].createElement(UsersRowStyled_jsx_1.DataContainerButton, null,
            react_1["default"].createElement("button", null,
                react_1["default"].createElement(bs_1.BsThreeDotsVertical, { className: 'icon' })))));
};
exports["default"] = UsersRow;
