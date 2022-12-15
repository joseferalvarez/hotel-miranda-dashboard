"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Blocks_1 = require("../Blocks/Blocks");
var UsersRow_1 = __importDefault(require("./UsersRow"));
var Blocks_2 = require("../Blocks/Blocks");
var UsersTable = function (_a) {
    var data = _a.data;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Blocks_1.Table, null,
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null,
                        react_1["default"].createElement(Blocks_2.Checkbox, null,
                            react_1["default"].createElement("input", { type: "checkbox", className: "checkbox-input", id: "checkbox" }),
                            react_1["default"].createElement("label", null,
                                react_1["default"].createElement("span", { className: "checkbox" })))),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Name"),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Job Desk"),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Contact"),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Status"),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null))),
            react_1["default"].createElement("tbody", null, data.map(function (obj, index) { return (react_1["default"].createElement(UsersRow_1["default"], { key: index, user: obj })); })))));
};
exports["default"] = UsersTable;
