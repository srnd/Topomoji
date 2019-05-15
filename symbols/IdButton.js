"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIdButton = function SvgIdButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "id-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bc2af7"
  }), _react["default"].createElement("stop", {
    offset: 0.216,
    stopColor: "#b928f3"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#b121e6"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#a217d2"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#8e08b5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#8400a6"
  })), _react["default"].createElement("path", {
    fill: "url(#id-button_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.4 0-8-3.601-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M14.67 17h3.856c.654 0 1.018.364 1.018 1.019v27.964c0 .652-.364 1.018-1.018 1.018H14.67c-.654 0-1.018-.365-1.018-1.018V18.019c0-.655.364-1.019 1.018-1.019zM52.348 32c0 8.432-6.191 15-14.463 15H26.151c-.653 0-1.017-.365-1.017-1.018V18.019c0-.654.364-1.019 1.017-1.019h11.733c8.272 0 14.464 6.567 14.464 15zm-5.678 0c0-5.54-3.578-9.343-8.785-9.343h-6.858v18.686h6.858c5.207 0 8.785-3.804 8.785-9.343z"
  }));
};

var _default = SvgIdButton;
exports["default"] = _default;