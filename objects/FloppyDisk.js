"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFloppyDisk = function SvgFloppyDisk(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "floppy-disk_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 59,
    x2: 32.001,
    y2: 5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.502,
    stopColor: "#312e3d"
  }), _react["default"].createElement("stop", {
    offset: 0.682,
    stopColor: "#363543"
  }), _react["default"].createElement("stop", {
    offset: 0.811,
    stopColor: "#3f404d"
  }), _react["default"].createElement("stop", {
    offset: 0.915,
    stopColor: "#4c515c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#floppy-disk_svg__a)",
    d: "M58.363 11.563l-5.926-5.928C52.088 5.286 51.395 5 50.9 5H50v.45s-12.047 2.196-30 0h-7.8V5H5.899A.9.9 0 0 0 5 5.899v51.3C5 57.693 6.304 59 6.8 59h50.401C57.695 59 59 57.693 59 57.199V13.1c0-.496-.285-1.187-.637-1.537z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M13.999 54V33.8c0-.989.811-1.8 1.801-1.8h32.401c.988 0 1.799.811 1.799 1.8V54H13.999z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M20 5.45V24c0 .989 1.01 2 2 2h26c.988 0 2-1.011 2-2V5.45H20z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M36 7h8v16h-8z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M57.201 54.5c0-.496-.406-.9-.9-.9H54.5c-.496 0-.9.404-.9.9v1.799c0 .494.404.9.9.9h1.801c.494 0 .9-.406.9-.9V54.5z"
  }), _react["default"].createElement("path", {
    fill: "#FF1C29",
    d: "M13.999 54H50v5H13.999zM18 48h28v2H18zM18 42h28v2H18zM18 36h28v2H18z"
  }));
};

var _default = SvgFloppyDisk;
exports["default"] = _default;