"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCandy = function SvgCandy(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F6BEC1",
    d: "M41.954 22.046c-5.486-5.488-4.366-15.506-.668-19.204 3.695-3.694 3.254 5.646 8.742 11.131 5.486 5.489 14.826 5.043 11.129 8.742-3.695 3.695-13.715 4.816-19.203-.669z"
  }), _react["default"].createElement("path", {
    fill: "#FDE0DA",
    d: "M53.927 17.525c-.512-2.343.768-4.562-1.061-6.391-1.829-1.825-4.051-.549-6.389-1.061-4.863-1.067-5.191-7.231-5.191-7.231-3.697 3.698-5.83 14.728-.344 20.217 5.488 5.484 16.521 3.351 20.215-.345 0 .001-6.162-.327-7.23-5.189z"
  }), _react["default"].createElement("linearGradient", {
    id: "candy_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -347.457,
    y1: 105.515,
    x2: -347.457,
    y2: 100.748,
    gradientTransform: "scale(-1) rotate(-14.999 -676.86 -1098.382)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f6bec1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fde0da"
  })), _react["default"].createElement("path", {
    fill: "url(#candy_svg__a)",
    d: "M53.093 23.826c-.393-1.47-5.076-4.412-10.557-1.592-.139 6.287 10.557 1.592 10.557 1.592z"
  }), _react["default"].createElement("linearGradient", {
    id: "candy_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -281.291,
    y1: 269.14,
    x2: -281.291,
    y2: 264.374,
    gradientTransform: "matrix(-.5296 .9555 .8229 .599 -326.925 125.434)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f6bec1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fde0da"
  })), _react["default"].createElement("path", {
    fill: "url(#candy_svg__b)",
    d: "M42.442 10.392c1.252.911 2.596 6.934-1.67 11.906-5.9-1.932 1.67-11.906 1.67-11.906z"
  }), _react["default"].createElement("path", {
    fill: "#F6BEC1",
    d: "M22.046 41.954c5.486 5.488 4.366 15.506.668 19.204-3.695 3.695-3.254-5.646-8.742-11.131-5.486-5.488-14.826-5.043-11.129-8.741 3.694-3.696 13.715-4.817 19.203.668z"
  }), _react["default"].createElement("path", {
    fill: "#FDE0DA",
    d: "M10.072 46.475c.513 2.343-.767 4.563 1.062 6.391 1.828 1.825 4.05.549 6.389 1.062 4.863 1.067 5.191 7.23 5.191 7.23 3.697-3.698 5.83-14.728.344-20.217-5.488-5.483-16.521-3.351-20.216.345 0-.001 6.163.327 7.23 5.189z"
  }), _react["default"].createElement("linearGradient", {
    id: "candy_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 85.978,
    y1: 211.765,
    x2: 85.978,
    y2: 206.998,
    gradientTransform: "rotate(-14.999 -588.585 389.924)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f6bec1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fde0da"
  })), _react["default"].createElement("path", {
    fill: "url(#candy_svg__c)",
    d: "M10.905 40.174c.395 1.47 5.077 4.412 10.559 1.592.139-6.287-10.559-1.592-10.559-1.592z"
  }), _react["default"].createElement("linearGradient", {
    id: "candy_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: -31.995,
    y1: -112.606,
    x2: -31.995,
    y2: -117.372,
    gradientTransform: "matrix(.5296 -.9555 -.8229 -.599 -55.242 -51.882)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f6bec1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fde0da"
  })), _react["default"].createElement("path", {
    fill: "url(#candy_svg__d)",
    d: "M21.558 53.608c-1.253-.91-2.596-6.934 1.669-11.906 5.901 1.932-1.669 11.906-1.669 11.906z"
  }), _react["default"].createElement("circle", {
    fill: "#FDE0DA",
    cx: 31.999,
    cy: 32.001,
    r: 14.164
  }), _react["default"].createElement("path", {
    fill: "#E03636",
    d: "M18.066 29.517c-.144.807-.23 1.635-.231 2.484.001 1.191.164 2.343.44 3.45L28.55 45.725c1.105.275 2.256.44 3.449.44a14.404 14.404 0 0 0 2.484-.231L18.066 29.517zM23.529 20.667a14.221 14.221 0 0 0-2.862 2.863L40.47 43.333a14.211 14.211 0 0 0 2.862-2.861L23.529 20.667zM31.999 17.837c-.85 0-1.676.086-2.484.23l16.418 16.417a14.05 14.05 0 0 0 .232-2.486c0-1.188-.162-2.34-.441-3.445L35.448 18.276a14.11 14.11 0 0 0-3.449-.439z"
  }), _react["default"].createElement("path", {
    fill: "#F6BEC1",
    d: "M19.539 25.264a13.85 13.85 0 0 0-.87 1.992l18.076 18.075a13.86 13.86 0 0 0 1.992-.869L19.539 25.264zM27.255 18.669a13.89 13.89 0 0 0-1.993.87l19.2 19.199c.343-.636.625-1.305.869-1.992L27.255 18.669z"
  }), _react["default"].createElement("radialGradient", {
    id: "candy_svg__e",
    cx: 26.125,
    cy: 29.044,
    r: 18.582,
    gradientTransform: "rotate(45.002 30.312 32.3) scale(1.0119 1.0623)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.661,
    stopColor: "#1a1626",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("circle", {
    opacity: 0.4,
    fill: "url(#candy_svg__e)",
    cx: 31.999,
    cy: 32,
    r: 14.164
  }), _react["default"].createElement("linearGradient", {
    id: "candy_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: -31.722,
    y1: 227.245,
    x2: -31.722,
    y2: 214.211,
    gradientTransform: "rotate(-45.001 -234.33 52.195)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "url(#candy_svg__f)",
    d: "M32.936 19.722c15.63 1.387-11.82 28.844-13.211 13.211-.621-6.938 6.272-13.827 13.211-13.211z"
  }));
};

var _default = SvgCandy;
exports["default"] = _default;