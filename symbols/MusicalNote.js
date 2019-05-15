"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMusicalNote = function SvgMusicalNote(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "musical-note_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 21.153,
    y1: 9.859,
    x2: 47.407,
    y2: 55.333
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#musical-note_svg__a)",
    d: "M20.333 10.333v29.343a9.109 9.109 0 0 0-4.167-1.009A9.167 9.167 0 0 0 16.167 57a9.167 9.167 0 0 0 9.167-9.167V19.879L52 17.454v18.889a9.11 9.11 0 0 0-4.167-1.01c-5.063 0-9.166 4.104-9.166 9.167A9.167 9.167 0 1 0 57 44.5V7l-36.667 3.333z"
  }));
};

var _default = SvgMusicalNote;
exports["default"] = _default;