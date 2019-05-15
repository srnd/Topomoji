"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPen = function SvgPen(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M2.465 60.801c-.754 1.415-.646 1.466.734.734l-.734-.734z"
  }), _react["default"].createElement("linearGradient", {
    id: "pen_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -254.204,
    y1: 243.049,
    x2: -251.965,
    y2: 243.049,
    gradientTransform: "rotate(45.001 95.616 461.517)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e9f0f5"
  }), _react["default"].createElement("stop", {
    offset: 0.434,
    stopColor: "#b6bdc1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7578"
  })), _react["default"].createElement("path", {
    fill: "url(#pen_svg__a)",
    d: "M5.016 60.57l-1.584-1.583-.967 1.813.734.734 1.817-.964z"
  }), _react["default"].createElement("radialGradient", {
    id: "pen_svg__b",
    cx: 67.834,
    cy: -438.829,
    r: 4.881,
    gradientTransform: "matrix(.707 .7069 -8.484 8.4828 -3725.304 3692.871)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.174,
    stopColor: "#49555f"
  }), _react["default"].createElement("stop", {
    offset: 0.457,
    stopColor: "#3a3d4a"
  }), _react["default"].createElement("stop", {
    offset: 0.618,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#pen_svg__b)",
    d: "M32.053 25.348l6.601 6.602 19.989-21.313-5.278-5.283z"
  }), _react["default"].createElement("radialGradient", {
    id: "pen_svg__c",
    cx: 67.834,
    cy: -405.44,
    r: 5.349,
    gradientTransform: "matrix(.707 .7069 -8.484 8.4828 -3465.64 3433.244)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.174,
    stopColor: "#49555f"
  }), _react["default"].createElement("stop", {
    offset: 0.457,
    stopColor: "#3a3d4a"
  }), _react["default"].createElement("stop", {
    offset: 0.618,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#pen_svg__c)",
    d: "M9.107 49.612l5.284 5.282 21.045-20.261-6.067-6.068z"
  }), _react["default"].createElement("linearGradient", {
    id: "pen_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 63.685,
    y1: -385.673,
    x2: 71.154,
    y2: -385.673,
    gradientTransform: "rotate(45.001 -495.754 -236.684)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#889194"
  }), _react["default"].createElement("stop", {
    offset: 0.037,
    stopColor: "#949ca0"
  }), _react["default"].createElement("stop", {
    offset: 0.198,
    stopColor: "#c2cace"
  }), _react["default"].createElement("stop", {
    offset: 0.323,
    stopColor: "#dee6ea"
  }), _react["default"].createElement("stop", {
    offset: 0.394,
    stopColor: "#e9f0f5"
  }), _react["default"].createElement("stop", {
    offset: 0.643,
    stopColor: "#b5bec1"
  }), _react["default"].createElement("stop", {
    offset: 0.849,
    stopColor: "#889194"
  })), _react["default"].createElement("path", {
    fill: "url(#pen_svg__d)",
    d: "M2.988 59.226l1.789 1.79 9.614-6.122-5.284-5.282z"
  }), _react["default"].createElement("linearGradient", {
    id: "pen_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 62.751,
    y1: -422.531,
    x2: 72.088,
    y2: -422.531,
    gradientTransform: "rotate(45.001 -495.754 -236.684)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#889194"
  }), _react["default"].createElement("stop", {
    offset: 0.002,
    stopColor: "#899295"
  }), _react["default"].createElement("stop", {
    offset: 0.101,
    stopColor: "#b2babe"
  }), _react["default"].createElement("stop", {
    offset: 0.19,
    stopColor: "#d0d8dc"
  }), _react["default"].createElement("stop", {
    offset: 0.267,
    stopColor: "#e2eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#e9f0f5"
  }), _react["default"].createElement("stop", {
    offset: 0.597,
    stopColor: "#b5bec1"
  }), _react["default"].createElement("stop", {
    offset: 0.824,
    stopColor: "#889194"
  })), _react["default"].createElement("path", {
    fill: "url(#pen_svg__e)",
    d: "M32.053 25.348l6.597 6.603-2.947 2.949-6.601-6.601z"
  }), _react["default"].createElement("radialGradient", {
    id: "pen_svg__f",
    cx: 67.895,
    cy: -456.017,
    r: 4.282,
    gradientTransform: "matrix(.707 .7069 -.8707 .8705 -387.167 355.206)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.174,
    stopColor: "#49555f"
  }), _react["default"].createElement("stop", {
    offset: 0.457,
    stopColor: "#3a3d4a"
  }), _react["default"].createElement("stop", {
    offset: 0.618,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#pen_svg__f)",
    d: "M55.334 3.387l5.277 5.281c3.936-3.934-1.345-9.213-5.277-5.281z"
  }), _react["default"].createElement("linearGradient", {
    id: "pen_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 63.369,
    y1: -455.215,
    x2: 71.47,
    y2: -455.215,
    gradientTransform: "rotate(45.001 -495.754 -236.684)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#889194"
  }), _react["default"].createElement("stop", {
    offset: 0.002,
    stopColor: "#899295"
  }), _react["default"].createElement("stop", {
    offset: 0.101,
    stopColor: "#b2babe"
  }), _react["default"].createElement("stop", {
    offset: 0.19,
    stopColor: "#d0d8dc"
  }), _react["default"].createElement("stop", {
    offset: 0.267,
    stopColor: "#e2eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#e9f0f5"
  }), _react["default"].createElement("stop", {
    offset: 0.597,
    stopColor: "#b5bec1"
  }), _react["default"].createElement("stop", {
    offset: 0.824,
    stopColor: "#889194"
  })), _react["default"].createElement("path", {
    fill: "url(#pen_svg__g)",
    d: "M53.143 5.131l5.724 5.73 1.969-1.967-5.727-5.73z"
  }), _react["default"].createElement("linearGradient", {
    id: "pen_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 63.499,
    y1: -391.235,
    x2: 71.343,
    y2: -391.235,
    gradientTransform: "rotate(45.001 -495.754 -236.684)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#889194"
  }), _react["default"].createElement("stop", {
    offset: 0.002,
    stopColor: "#899295"
  }), _react["default"].createElement("stop", {
    offset: 0.101,
    stopColor: "#b2babe"
  }), _react["default"].createElement("stop", {
    offset: 0.19,
    stopColor: "#d0d8dc"
  }), _react["default"].createElement("stop", {
    offset: 0.267,
    stopColor: "#e2eaee"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#e9f0f5"
  }), _react["default"].createElement("stop", {
    offset: 0.597,
    stopColor: "#b5bec1"
  }), _react["default"].createElement("stop", {
    offset: 0.824,
    stopColor: "#889194"
  })), _react["default"].createElement("path", {
    fill: "url(#pen_svg__h)",
    d: "M9.346 49.111l5.545 5.545-.737.74-5.547-5.546z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M55.348 6.144c-.115-.595-1.664-1.622-2.117-1.305-3.663 2.554-13.881 11.249-18.973 16.487.127.859 1.283 1.054 2.15.605.67-.344 3.139-2.299 2.566-2.962 0 0 11.822-11.161 14.41-12.467.291-.146 1.047-.2 1.367.258.167.237.628-.447.597-.616z"
  }), _react["default"].createElement("linearGradient", {
    id: "pen_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: -259.303,
    y1: 180.703,
    x2: -254.86,
    y2: 180.703,
    gradientTransform: "rotate(45.001 95.616 461.517)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9eaaae"
  }), _react["default"].createElement("stop", {
    offset: 0.061,
    stopColor: "#b3bdc1"
  }), _react["default"].createElement("stop", {
    offset: 0.166,
    stopColor: "#d0d9de"
  }), _react["default"].createElement("stop", {
    offset: 0.257,
    stopColor: "#e2eaef"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#e9f0f5"
  }), _react["default"].createElement("stop", {
    offset: 0.674,
    stopColor: "#b5c0c4"
  }), _react["default"].createElement("stop", {
    offset: 0.824,
    stopColor: "#9eaaae"
  })), _react["default"].createElement("path", {
    fill: "url(#pen_svg__i)",
    d: "M55.348 6.144c-.084-.851-1.775-1.924-2.588-1.419-.766.475-17.985 14.802-18.471 16.479-.135.468 1.227.849 2.377-.335 4.84-4.979 16.451-15.452 17.645-15.497.464-.019 1.037.772 1.037.772z"
  }));
};

var _default = SvgPen;
exports["default"] = _default;