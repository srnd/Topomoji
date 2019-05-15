"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCoolButton = function SvgCoolButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "cool-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00abf1"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#00a7ef"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#009ae9"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#0086e0"
  }), _react["default"].createElement("stop", {
    offset: 0.95,
    stopColor: "#0069d3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0062d0"
  })), _react["default"].createElement("path", {
    fill: "url(#cool-button_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M8 32c0-3.549 2.651-6.309 6.331-6.309 2.713 0 5.029 1.67 5.775 4.108.074.282-.073.465-.355.465h-1.688c-.23 0-.369-.113-.468-.326-.543-1.181-1.801-1.922-3.264-1.922-2.382 0-3.943 1.649-3.943 3.983s1.562 3.983 3.943 3.983c1.463 0 2.721-.741 3.264-1.923.099-.212.238-.325.468-.325h1.688c.282 0 .434.17.36.431-.72 2.441-3.05 4.143-5.78 4.143C10.651 38.309 8 35.549 8 32zM21.05 32c0-3.549 2.807-6.309 6.309-6.309S33.668 28.45 33.668 32c0 3.549-2.807 6.309-6.309 6.309S21.05 35.549 21.05 32zm10.232 0c0-2.334-1.719-3.983-3.923-3.983S23.436 29.666 23.436 32s1.719 3.983 3.923 3.983 3.923-1.649 3.923-3.983zM34.793 32c0-3.549 2.807-6.309 6.309-6.309S47.41 28.451 47.41 32c0 3.549-2.807 6.309-6.309 6.309s-6.308-2.76-6.308-6.309zm10.23 0c0-2.334-1.717-3.983-3.922-3.983-2.203 0-3.922 1.649-3.922 3.983s1.719 3.983 3.922 3.983c2.206 0 3.922-1.649 3.922-3.983zM56 36.195v1.467c0 .266-.148.412-.412.412h-6.074c-.266 0-.414-.146-.414-.412V26.337c0-.265.148-.412.414-.412h1.563c.264 0 .41.146.41.412v9.446h4.102c.263 0 .411.149.411.412z"
  }));
};

var _default = SvgCoolButton;
exports["default"] = _default;