"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVsButton = function SvgVsButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "vs-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.287,
    stopColor: "#ff9500"
  }), _react["default"].createElement("stop", {
    offset: 0.585,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.887,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff6a00"
  })), _react["default"].createElement("path", {
    fill: "url(#vs-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.399 0-8-3.6-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M19.644 43.758l-7.592-23.267c-.178-.579.106-.953.712-.953h3.569c.471 0 .81.205.952.703l5.617 18.504 5.616-18.504c.144-.499.481-.703.953-.703h3.57c.604 0 .889.374.711.953L26.16 43.758c-.142.463-.48.703-.952.703h-4.61c-.473 0-.811-.24-.954-.703zM34.367 37.66c-.035-.578.293-.88.836-.88h3.215c.506 0 .783.275.871.819.303 1.699 1.727 2.571 4.139 2.571 2.502 0 3.676-1.077 3.676-2.519 0-1.771-1.992-2.546-4.361-3.383-3.586-1.264-7.965-2.679-7.965-7.975 0-4.771 3.951-7.236 8.1-7.236 4.111 0 7.967 2.252 8.375 7.147.035.579-.293.881-.836.881h-3.215c-.506 0-.781-.276-.871-.81-.293-1.647-1.531-2.448-3.453-2.448-2.021 0-3.205 1.032-3.205 2.465 0 1.833 1.719 2.643 4.014 3.489 3.615 1.3 8.314 2.608 8.314 7.869 0 4.779-3.943 7.289-8.572 7.289-4.62.002-8.652-2.293-9.062-7.279z"
  }));
};

var _default = SvgVsButton;
exports["default"] = _default;