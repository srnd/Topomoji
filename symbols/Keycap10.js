"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgKeycap10 = function SvgKeycap10(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "keycap-10_svg__a",
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
    fill: "url(#keycap-10_svg__a)",
    d: "M62 54c0 4.399-3.6 8-8 8H10c-4.399 0-8-3.601-8-8V10c0-4.4 3.601-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M18.592 16.594h4.302c.671 0 1.045.374 1.045 1.046v28.72c0 .672-.374 1.046-1.045 1.046h-3.961c-.671 0-1.045-.374-1.045-1.046V22.69l-5.954 3.268c-.715.419-1.254.077-1.254-.715v-3.84c0-.551.22-.969.715-1.255l5.898-3.225c.418-.252.803-.329 1.299-.329zM28.672 32c0-9.508 4.466-16 12.324-16S53.32 22.492 53.32 32c0 9.507-4.467 16-12.324 16s-12.324-6.493-12.324-16zm18.596 0c0-6.515-2.145-10.103-6.271-10.103S34.725 25.485 34.725 32c0 6.514 2.145 10.102 6.271 10.102S47.268 38.514 47.268 32z"
  }));
};

var _default = SvgKeycap10;
exports["default"] = _default;