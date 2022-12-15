"use strict";
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
var react_1 = __importStar(require("react"));
var RoomRow_1 = __importDefault(require("./RoomRow"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var Blocks_1 = require("../Blocks/Blocks");
var RoomTable = function (_a) {
    var data = _a.data;
    var _b = (0, react_1.useState)(data), items = _b[0], setItems = _b[1];
    (0, react_1.useEffect)(function () {
        setItems(data);
    }, [data]);
    var moveRow = (0, react_1.useCallback)(function (dragIndex, hoverIndex) {
        setItems(function (prevItems) { return (0, immutability_helper_1["default"])(prevItems, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, prevItems[dragIndex]],
            ]
        }); });
    }, []);
    var renderItem = (0, react_1.useCallback)(function (item, index) {
        return (react_1["default"].createElement(RoomRow_1["default"], { key: item.id, id: item.id, room: item, index: index, moveRow: moveRow }));
    }, null);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Blocks_1.Table, null,
            react_1["default"].createElement("thead", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Room Name"),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Bed Type"),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Facilities"),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Rate"),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Offer Price"),
                    react_1["default"].createElement(Blocks_1.HeaderTitle, null, "Status"))),
            react_1["default"].createElement("tbody", null,
                react_1["default"].createElement(react_dnd_1.DndProvider, { backend: react_dnd_html5_backend_1.HTML5Backend }, items.map(function (obj, index) { return (renderItem(obj, index)); }))))));
};
exports["default"] = RoomTable;
