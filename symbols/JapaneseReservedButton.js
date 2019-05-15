"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseReservedButton = function SvgJapaneseReservedButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-reserved-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#47de00"
  }), _react["default"].createElement("stop", {
    offset: 0.281,
    stopColor: "#45da00"
  }), _react["default"].createElement("stop", {
    offset: 0.573,
    stopColor: "#41cd00"
  }), _react["default"].createElement("stop", {
    offset: 0.868,
    stopColor: "#39b900"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#35ad00"
  })), _react["default"].createElement("path", {
    fill: "url(#japanese-reserved-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M29.576 32.404h18.553v17.439h-4.504V48.34h-9.734V50h-4.314V32.404zm4.315 3.782v2.354h9.734v-2.354h-9.734zm9.734 8.488v-2.545h-9.734v2.545h9.734zM28.279 34.373c-1.49.424-2.979.85-4.506 1.273v9.375c0 2.275-.383 3.357-1.68 4.09-1.26.695-3.092.811-5.766.811-.113-1.158-.725-3.01-1.26-4.205 1.488.076 3.016.076 3.514.076.533-.037.725-.193.725-.734v-8.217l-4.238 1.08L14 33.563c1.527-.348 3.359-.771 5.307-1.234V25.46h-4.734v-4.242h4.734V14h4.467v7.217h3.893v4.242h-3.893v5.789c1.336-.348 2.672-.695 3.971-1.041l.534 4.166zM43.395 26.076c1.91 0 2.215-.617 2.482-4.436.955.693 2.863 1.428 4.123 1.658-.572 5.44-1.908 6.908-6.26 6.908h-7.406c-5.307 0-6.682-1.313-6.682-5.75V14h4.543v5.055c3.816-.965 7.635-2.199 10.154-3.395l3.359 3.316c-3.895 1.584-8.971 2.894-13.514 3.822v1.619c0 1.467.381 1.658 2.557 1.658h6.644z"
  }));
};

var _default = SvgJapaneseReservedButton;
exports["default"] = _default;