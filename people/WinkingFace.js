"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWinkingFace = function SvgWinkingFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "winking-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#winking-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.252 27.092a4.501 4.501 0 0 1 0 9 4.5 4.5 0 0 1 0-9z"
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M52.982 23.226c-4.381-2.159-10.892-2.207-14.174-1.374-.735.187-.839 2.893-.224 2.728 4.172-1.112 10.08-.873 14.467.393.623.18.632-1.402-.069-1.747zM9.452 24.448c2.812-4.434 8.043-8.055 11.637-8.316.758-.057 2.096 2.347 1.469 2.473-4.808.98-9.5 3.597-12.357 7.516-.383.529-1.173-1.008-.749-1.673z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M24.659 50.003c7.75 2.007 17.272-1.016 21.293-7.304.329-.516-.183-1.063-.7-.654-4.201 3.316-13.118 5.785-19.648 3.876-2.5-.732-3.587 3.397-.945 4.082zM50.341 35.949c.534.152.759-.282.294-.615-3.522-2.52-7.205-2.944-7.205-3.424 0-.368 2.745-2.167 7-3.276.503-.131.384-.66-.192-.653-9.013.118-14.351 5.257-14.351 5.88 0 .545 6.975-.037 14.454 2.088z"
  }));
};

var _default = SvgWinkingFace;
exports["default"] = _default;