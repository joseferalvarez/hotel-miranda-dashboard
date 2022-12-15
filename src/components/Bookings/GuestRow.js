"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var bs_1 = require("react-icons/bs");
var Blocks_1 = require("../Blocks/Blocks");
var Button_1 = __importDefault(require("../Blocks/Button"));
var GuestRowStyled_1 = require("./GuestRowStyled");
var GuestRow = function (_a) {
    var guest = _a.guest;
    return (react_1["default"].createElement(GuestRowStyled_1.Row, null,
        react_1["default"].createElement(GuestRowStyled_1.DataContainerCheckbox, null,
            react_1["default"].createElement(GuestRowStyled_1.CheckboxContainer, null,
                react_1["default"].createElement(Blocks_1.Checkbox, null,
                    react_1["default"].createElement("input", { type: "checkbox" }),
                    react_1["default"].createElement("label", null,
                        react_1["default"].createElement("span", null))))),
        react_1["default"].createElement("td", null,
            react_1["default"].createElement(GuestRowStyled_1.GuestContainer, null,
                react_1["default"].createElement("img", { src: guest.photo, alt: '' }),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(GuestRowStyled_1.GuestName, null, guest.name),
                    react_1["default"].createElement(GuestRowStyled_1.GuestId, null,
                        "#",
                        guest.id)))),
        react_1["default"].createElement(GuestRowStyled_1.DataContainer, { className: 'data-container__text' },
            react_1["default"].createElement("p", null, guest.order)),
        react_1["default"].createElement(GuestRowStyled_1.DataContainer, { className: 'data-container__text' },
            react_1["default"].createElement("p", null, guest.checkin)),
        react_1["default"].createElement(GuestRowStyled_1.DataContainer, { className: 'data-container__text' },
            react_1["default"].createElement("p", null, guest.checkout)),
        react_1["default"].createElement("td", null,
            react_1["default"].createElement(Button_1["default"], { typeButton: "notes", text: "View Notes", enabled: guest.description ? true : false, click: "" })),
        react_1["default"].createElement(GuestRowStyled_1.DataContainer, { className: 'data-container__text' },
            react_1["default"].createElement("p", null,
                guest.typeroom,
                " - ",
                guest.numroom)),
        react_1["default"].createElement("td", null,
            react_1["default"].createElement(GuestRowStyled_1.Status, { typeStatus: guest.state }, guest.state)),
        react_1["default"].createElement(GuestRowStyled_1.DataContainerButton, null,
            react_1["default"].createElement("button", null,
                react_1["default"].createElement(bs_1.BsThreeDotsVertical, { className: 'icon' })))));
};
exports["default"] = GuestRow;
