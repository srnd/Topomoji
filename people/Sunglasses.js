"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSunglasses = function SvgSunglasses(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M36.123 24.626c-2.357 1.182-5.893 1.182-8.249 0-2.517-1.3-5.592-2.131-9.274-2.455-3.593-.317-11.215-.307-15.025 1.043-.438.153-.867.353-1.285.566-.234.119-.28.208-.28.648v.569c0 1.068-.134.653.628 1.099 1.48.871 2.319 3.134 2.771 6.247.642 4.539 2.854 7.382 6.452 8.741a14.377 14.377 0 0 0 10.385-.113c1.811-.728 3.4-1.879 4.663-3.745 2.219-3.273 1.553-5.315 2.695-8.127.996-2.454 3.796-2.454 4.795 0 1.144 2.813.479 4.854 2.695 8.127 1.259 1.866 2.853 3.018 4.663 3.745a14.372 14.372 0 0 0 10.383.113c3.598-1.358 5.813-4.202 6.454-8.741.449-3.113 1.29-5.376 2.771-6.247.76-.445.627-.03.627-1.099v-.569c0-.44-.048-.529-.28-.648a10.484 10.484 0 0 0-1.284-.566c-3.812-1.35-11.434-1.361-15.026-1.043-3.687.325-6.763 1.156-9.279 2.455"
  }), _react["default"].createElement("linearGradient", {
    id: "sunglasses_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 46.793,
    y1: 39.435,
    x2: 46.793,
    y2: 24.409
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.234,
    stopColor: "#50606a"
  }), _react["default"].createElement("stop", {
    offset: 0.381,
    stopColor: "#576872"
  }), _react["default"].createElement("stop", {
    offset: 0.503,
    stopColor: "#647681"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#758a95"
  }), _react["default"].createElement("stop", {
    offset: 0.713,
    stopColor: "#8ca3b0"
  }), _react["default"].createElement("stop", {
    offset: 0.806,
    stopColor: "#a7c2d1"
  }), _react["default"].createElement("stop", {
    offset: 0.893,
    stopColor: "#c7e6f7"
  }), _react["default"].createElement("stop", {
    offset: 0.909,
    stopColor: "#ceedff"
  })), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "url(#sunglasses_svg__a)",
    d: "M37.697 26.619c-1.434 1.251-.132 10.294 4.221 11.969 2.715 1.043 8.053 1.676 11.742-1.521 3.021-2.615 3.672-10.536 1.525-11.767-2.359-1.354-14.423-1.354-17.488 1.319z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunglasses_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 17.394,
    y1: 39.438,
    x2: 17.394,
    y2: 24.412
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.234,
    stopColor: "#50606a"
  }), _react["default"].createElement("stop", {
    offset: 0.381,
    stopColor: "#576872"
  }), _react["default"].createElement("stop", {
    offset: 0.503,
    stopColor: "#647681"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#758a95"
  }), _react["default"].createElement("stop", {
    offset: 0.713,
    stopColor: "#8ca3b0"
  }), _react["default"].createElement("stop", {
    offset: 0.806,
    stopColor: "#a7c2d1"
  }), _react["default"].createElement("stop", {
    offset: 0.893,
    stopColor: "#c7e6f7"
  }), _react["default"].createElement("stop", {
    offset: 0.909,
    stopColor: "#ceedff"
  })), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "url(#sunglasses_svg__b)",
    d: "M26.489 26.622c1.434 1.25.132 10.296-4.219 11.968-2.716 1.045-8.052 1.677-11.743-1.519-3.021-2.615-3.673-10.536-1.526-11.768 2.36-1.353 14.423-1.353 17.488 1.319z"
  }));
};

var _default = SvgSunglasses;
exports["default"] = _default;