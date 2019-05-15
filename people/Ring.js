"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRing = function SvgRing(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M21.898 7.608c-1.093.393-3.347 1.698-3.347 1.698-.049.529 8.267 15.244 9.088 16.211 4.914-2.838-5.549-16.987-5.741-17.909z"
  }), _react["default"].createElement("radialGradient", {
    id: "ring_svg__a",
    cx: 44.745,
    cy: 44.207,
    r: 24.175,
    gradientTransform: "matrix(-.7724 .7228 -.5897 -.4994 92.904 34.157)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.77,
    stopColor: "#eef8ff"
  }), _react["default"].createElement("stop", {
    offset: 0.818,
    stopColor: "#e8f2f8"
  }), _react["default"].createElement("stop", {
    offset: 0.886,
    stopColor: "#d6dfe5"
  }), _react["default"].createElement("stop", {
    offset: 0.968,
    stopColor: "#bac2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#adb4b8"
  })), _react["default"].createElement("path", {
    fill: "url(#ring_svg__a)",
    d: "M33.692 22.003C-8.38 35.68 4.851 72.389 35.075 59.178c35.255-15.409 22.896-41.445-1.383-37.175zm-.139 35.808c-31.427 10.618-28.209-22.013.828-29.343 27.255-6.882 26.072 20.258-.828 29.343z"
  }), _react["default"].createElement("linearGradient", {
    id: "ring_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 25.172,
    y1: 18.347,
    x2: 31.703,
    y2: 35.789
  }, _react["default"].createElement("stop", {
    offset: 0.261,
    stopColor: "#edf8ff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#eef8ff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#ring_svg__b)",
    d: "M12.238 40.291c6.588-7.526 13.857-11.692 22.428-13.797 6.563-1.613 13.178-1.08 17.809 2.271 3.031 2.193.992-1.648-1.165-3.559-4.173-3.047-10.362-4.479-17.621-3.203-10.332 3.359-17.323 8.11-21.552 13.168-3.144 4.213-4.738 10.653.101 5.12z"
  }), _react["default"].createElement("linearGradient", {
    id: "ring_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 14.845,
    y1: 59.447,
    x2: 55.342,
    y2: 36.067
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6f2f7"
  }), _react["default"].createElement("stop", {
    offset: 0.121,
    stopColor: "#858c8f"
  }), _react["default"].createElement("stop", {
    offset: 0.63,
    stopColor: "#eef8ff"
  }), _react["default"].createElement("stop", {
    offset: 0.674,
    stopColor: "#e7f1f8"
  }), _react["default"].createElement("stop", {
    offset: 0.738,
    stopColor: "#d5dfe5"
  }), _react["default"].createElement("stop", {
    offset: 0.812,
    stopColor: "#b8c1c6"
  }), _react["default"].createElement("stop", {
    offset: 0.891,
    stopColor: "#919a9e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#dae7ed"
  })), _react["default"].createElement("path", {
    fill: "url(#ring_svg__c)",
    d: "M51.093 29.883c3.548 7.108-2.96 19.648-18.913 25.273-12.411 4.376-19.176 1.401-20.899-4.118.258 7.11 7.485 12.058 22.395 7.022 19.008-6.421 25.051-22.101 17.417-28.177z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M41.252 2.908c-5.854-.425.201 7.163.434 5.934s-.173-5.804-.434-5.934z"
  }), _react["default"].createElement("path", {
    fill: "#B5E9FF",
    d: "M21.1 16.684c5.354 9.785 16.504 8.016 16.504 8.016s8.74-1.506 10.145-10.869C47.34 8.619 22.811 2.849 21.1 16.684z"
  }), _react["default"].createElement("path", {
    fill: "#1FB7FF",
    d: "M34.674 21.848l2.931 2.852 3.04-3.974c-2.171-1.012-5.971 1.122-5.971 1.122z"
  }), _react["default"].createElement("path", {
    fill: "#E8F8FF",
    d: "M29.232 21.439l3.479 3.175 1.962-2.767c-2.169-1.01-5.441-.408-5.441-.408z"
  }), _react["default"].createElement("path", {
    fill: "#6ED1FF",
    d: "M40.645 20.726l2.15 1.6 1.909-3.921c-2.171-1.011-4.059 2.321-4.059 2.321z"
  }), _react["default"].createElement("path", {
    fill: "#E6F7FF",
    d: "M23.662 13.691l3.977-1.827-2.35-3.374z"
  }), _react["default"].createElement("path", {
    fill: "#6ED1FF",
    d: "M29.611 16.586l4.415-3.286-6.387-1.436zM22.077 8.584l3.212-.094 2.245-3.673z"
  }), _react["default"].createElement("path", {
    fill: "#A8E6FF",
    d: "M23.662 13.691l1.627-5.201-3.212.094s-1.731 2.531-1.744 5.465l3.329-.358z"
  }), _react["default"].createElement("path", {
    fill: "#1FB7FF",
    d: "M23.662 13.691l-3.329.357s.002 1.543.768 2.635l2.561-2.992z"
  }), _react["default"].createElement("path", {
    fill: "#6ED1FF",
    d: "M21.1 16.684s1.101 1.764 3.182 2.997l-.62-5.989-2.562 2.992z"
  }), _react["default"].createElement("path", {
    fill: "#1FB7FF",
    d: "M24.282 19.681s2.037 1.496 4.396 1.789l.933-4.884-5.329 3.095z"
  }), _react["default"].createElement("path", {
    fill: "#6ED1FF",
    d: "M29.611 16.586l-.933 4.884c3.046.291 5.996.378 5.996.378l-5.063-5.262z"
  }), _react["default"].createElement("path", {
    fill: "#C7EEFF",
    d: "M39.086 4.097l-5.878-.882-5.674 1.602-2.245 3.673 2.35 3.374 6.387 1.436 6.094-2.216 1.786-3.637z"
  }), _react["default"].createElement("path", {
    fill: "#6ED1FF",
    d: "M44.356 12.396l-4.236-1.312 1.786-3.637z"
  }), _react["default"].createElement("path", {
    fill: "#E6F7FF",
    d: "M38.934 16.008L34.026 13.3l6.094-2.216z"
  }), _react["default"].createElement("path", {
    fill: "#6ED1FF",
    d: "M44.87 7.383l-2.964.064-2.82-3.35z"
  }), _react["default"].createElement("path", {
    fill: "#B5E9FF",
    d: "M44.356 12.396l-2.45-4.949 2.964-.064s2.347 2.049 2.84 4.955l-3.354.058z"
  }), _react["default"].createElement("path", {
    fill: "#E6F7FF",
    d: "M44.356 12.396l3.354-.059s.243 1.521-.34 2.699l-3.014-2.64z"
  }), _react["default"].createElement("path", {
    fill: "#6ED1FF",
    d: "M47.37 15.037s-.802 1.884-2.666 3.367l-.348-6.008 3.014 2.641z"
  }), _react["default"].createElement("path", {
    fill: "#1FB7FF",
    d: "M44.704 18.404s-1.767 1.731-4.06 2.321l-1.711-4.718 5.771 2.397z"
  }), _react["default"].createElement("path", {
    fill: "#6ED1FF",
    d: "M38.934 16.008l1.711 4.718c-2.971.663-5.971 1.122-5.971 1.122l4.26-5.84z"
  }), _react["default"].createElement("linearGradient", {
    id: "ring_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 26.487,
    y1: 23.697,
    x2: 34.381,
    y2: 23.697
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#858c8f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#eef8ff"
  })), _react["default"].createElement("path", {
    fill: "url(#ring_svg__d)",
    d: "M31.249 21.675s1.985 4.16 3.132 6.793c-1.93 1.848-1.519 1.152-3.253.96-.234-.026-1.382-3.481-4.641-8.626 2.399-1.272 5.105-3.124 5.105-3.124s-.429 3.888-.343 3.997z"
  }), _react["default"].createElement("linearGradient", {
    id: "ring_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 36.237,
    y1: 20.329,
    x2: 50.958,
    y2: 20.329
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#eef8ff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#858c8f"
  })), _react["default"].createElement("path", {
    fill: "url(#ring_svg__e)",
    d: "M46.773 15.888c.573-.746-.107-1.302-1.486-2.51 3.059-.078 5.671-1.152 5.671-1.152-2.836 6.802-12.043 15.884-12.493 16.181-.227.148-2.228-.364-2.228-.364s5.238-5.264 10.536-12.155z"
  }), _react["default"].createElement("linearGradient", {
    id: "ring_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: -5.59,
    y1: 62.264,
    x2: -1.634,
    y2: 62.264,
    gradientTransform: "rotate(18.439 145.218 141.49)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#919a9e"
  }), _react["default"].createElement("stop", {
    offset: 0.401,
    stopColor: "#bcc5cb"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#e0eaf1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#eef8ff"
  })), _react["default"].createElement("path", {
    fill: "url(#ring_svg__f)",
    d: "M30.434 21.47l-3.947-.668 2.314-3.678 2.791.554z"
  }), _react["default"].createElement("linearGradient", {
    id: "ring_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 46.181,
    y1: 12.542,
    x2: 50.306,
    y2: 13.625
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#eef8ff"
  }), _react["default"].createElement("stop", {
    offset: 0.206,
    stopColor: "#e0eaf1"
  }), _react["default"].createElement("stop", {
    offset: 0.599,
    stopColor: "#bcc5cb"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#919a9e"
  })), _react["default"].createElement("path", {
    fill: "url(#ring_svg__g)",
    d: "M50.958 12.226l-1.696 2.696-3.975-1.544 1.827-1.989z"
  }), _react["default"].createElement("linearGradient", {
    id: "ring_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: -16.754,
    y1: 54.451,
    x2: -11.951,
    y2: 54.451,
    gradientTransform: "rotate(18.439 145.218 141.49)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#919a9e"
  }), _react["default"].createElement("stop", {
    offset: 0.401,
    stopColor: "#bcc5cb"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#e0eaf1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#eef8ff"
  })), _react["default"].createElement("path", {
    fill: "url(#ring_svg__h)",
    d: "M22.077 10.446l-3.526-1.139L21.1 6.559l2.925 1.515z"
  }), _react["default"].createElement("linearGradient", {
    id: "ring_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: 37.986,
    y1: 4.783,
    x2: 39.486,
    y2: 2.075
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#eef8ff"
  }), _react["default"].createElement("stop", {
    offset: 0.206,
    stopColor: "#e0eaf1"
  }), _react["default"].createElement("stop", {
    offset: 0.599,
    stopColor: "#bcc5cb"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#919a9e"
  })), _react["default"].createElement("path", {
    fill: "url(#ring_svg__i)",
    d: "M39.715 4.958l-3.174-.895.76-2.063 3.951.908z"
  }));
};

var _default = SvgRing;
exports["default"] = _default;