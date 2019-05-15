"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTomato = function SvgTomato(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "tomato_svg__a",
    cx: 25.665,
    cy: 31.015,
    r: 32.58,
    gradientTransform: "matrix(1 0 0 .9797 0 -4.327)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.4,
    stopColor: "#f5000d"
  }), _react["default"].createElement("stop", {
    offset: 0.618,
    stopColor: "#f2010d"
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#ea040e"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#db0a10"
  }), _react["default"].createElement("stop", {
    offset: 0.984,
    stopColor: "#c61213"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c21413"
  })), _react["default"].createElement("path", {
    fill: "url(#tomato_svg__a)",
    d: "M45.246 15.272c-6.83-2.562-20.538-2.089-26.617 0C10.406 16.715 2 20.568 2 34.353c0 37.646 60 36.073 60 0 0-13.779-8.473-17.635-16.754-19.081z"
  }), _react["default"].createElement("radialGradient", {
    id: "tomato_svg__b",
    cx: 279.154,
    cy: -536.597,
    r: 14.029,
    gradientTransform: "matrix(1.0169 -.0948 -.1721 -.9845 -358.692 -470.854)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff7a70"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff7a70",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#tomato_svg__b)",
    d: "M31.795 29.629c-1.332-7.627-8.8-13.215-16.676-12.479-7.883.734-13.189 7.512-11.857 15.14 1.335 7.629 8.803 13.214 16.682 12.48 7.879-.734 13.185-7.512 11.851-15.141z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M31.5 18.876c-7.97-7.936-18.231-7.331-13.845-6.227 5.596 1.408 7.371 4.416 8.9 6.296-10.105-1.848-16.908 1.98-17.246 4.345-.198 1.394 5.403-5.687 19.489-1.97 1.659.438 2.82 1.773 4.534 6.531.682 1.89 1.881-2.872.115-6.809 11.951-7.663 18.809-2.789 18.457-3.213-.734-.879-8.354-4.975-16.699.837 3.482-7.1 7.947-6.571 7.195-6.918-1.23-.571-5.759.062-10.9 7.128z"
  }), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M24.639 2.632c-2.18 1.693 1.886 1.52 3.805 14.027-6.016 4.587 11.857 3.535 3.867-.301C28.599 3.319 27.342.53 24.639 2.632z"
  }));
};

var _default = SvgTomato;
exports["default"] = _default;