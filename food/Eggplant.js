"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEggplant = function SvgEggplant(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "eggplant_svg__a",
    cx: 141.185,
    cy: 2.213,
    r: 38.113,
    gradientTransform: "matrix(.7279 .685 -.305 .3187 -69.641 -69.92)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#8f4dad"
  }), _react["default"].createElement("stop", {
    offset: 0.375,
    stopColor: "#8c4aab"
  }), _react["default"].createElement("stop", {
    offset: 0.636,
    stopColor: "#8441a3"
  }), _react["default"].createElement("stop", {
    offset: 0.862,
    stopColor: "#763296"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#69248a"
  })), _react["default"].createElement("path", {
    fill: "url(#eggplant_svg__a)",
    d: "M61.799 52.895c2.574-17.4-20.027-18.104-41.698-43.868-5.937-9-20.284.714-17.171 8.812 26.369 54.808 56.935 48.112 58.869 35.056z"
  }), _react["default"].createElement("radialGradient", {
    id: "eggplant_svg__b",
    cx: 618.484,
    cy: -260.719,
    r: 17.039,
    gradientTransform: "matrix(.0181 .6616 1.5842 1.19 431.612 -68.224)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#db8cff"
  }), _react["default"].createElement("stop", {
    offset: 0.308,
    stopColor: "#d383f8",
    stopOpacity: 0.674
  }), _react["default"].createElement("stop", {
    offset: 0.809,
    stopColor: "#be6be4",
    stopOpacity: 0.145
  }), _react["default"].createElement("stop", {
    offset: 0.946,
    stopColor: "#b763de",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#eggplant_svg__b)",
    d: "M30.073 42.006c14.909 11.203 26.857 15.229 26.681 9-.168-6.225-12.391-20.351-27.297-31.549-14.914-11.201-26.859-15.231-26.684-9 .164 6.222 12.393 20.353 27.3 31.549z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M8.055 2.18c-.769-.631-3.457.531-2.807 1.472 5.197 7.562 4.724.093 2.807-1.472z"
  }), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M8.091 4.896c-9.819 4.743-4.502 12.726-5.744 17.711C8.455 19.779 6.233 10.139 9.094 6.7c3.869-.998 9.556 7.064 15.306 3.189C16.98 8.046 17.669.271 8.091 4.896z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M8.908 21.024c11.986-9.479 2.46-18-.817-16.128-5.038 2.878 1.618 5.962.817 16.128z"
  }));
};

var _default = SvgEggplant;
exports["default"] = _default;