"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPencil = function SvgPencil(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M7.911 47.883L44.67 11.125l8.207 8.207-36.758 36.757z"
  }), _react["default"].createElement("radialGradient", {
    id: "pencil_svg__a",
    cx: 32.678,
    cy: -31.929,
    r: 7.411,
    gradientTransform: "matrix(.9176 -.0824 -.0824 .9176 22.696 37.087)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff709b"
  }), _react["default"].createElement("stop", {
    offset: 0.258,
    stopColor: "#f96d97"
  }), _react["default"].createElement("stop", {
    offset: 0.608,
    stopColor: "#e8638b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cc5478"
  })), _react["default"].createElement("path", {
    fill: "url(#pencil_svg__a)",
    d: "M60.353 4.689l-1.044-1.042c-1.979-1.979-4.767-2.394-7.133-.03l-3.547 3.551 8.205 8.206 3.549-3.551c2.363-2.363 1.946-5.154-.03-7.134z"
  }), _react["default"].createElement("linearGradient", {
    id: "pencil_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 82.511,
    y1: 31.426,
    x2: 74.443,
    y2: 23.138,
    gradientTransform: "translate(-28.016 -13.625)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e787a"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#d6dbde"
  }), _react["default"].createElement("stop", {
    offset: 0.693,
    stopColor: "#d2d8da"
  }), _react["default"].createElement("stop", {
    offset: 0.768,
    stopColor: "#c7cdd0"
  }), _react["default"].createElement("stop", {
    offset: 0.841,
    stopColor: "#b4bbbe"
  }), _react["default"].createElement("stop", {
    offset: 0.912,
    stopColor: "#9aa2a4"
  }), _react["default"].createElement("stop", {
    offset: 0.981,
    stopColor: "#788284"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e787a"
  })), _react["default"].createElement("path", {
    fill: "url(#pencil_svg__b)",
    d: "M56.834 15.374l-8.208-8.208-4.655 4.654 8.209 8.209z"
  }), _react["default"].createElement("linearGradient", {
    id: "pencil_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -160.432,
    y1: 224.215,
    x2: -166.808,
    y2: 217.665,
    gradientTransform: "rotate(45.001 196.731 376.942)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e787a"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#d6dbde"
  }), _react["default"].createElement("stop", {
    offset: 0.693,
    stopColor: "#d2d8da"
  }), _react["default"].createElement("stop", {
    offset: 0.768,
    stopColor: "#c7cdd0"
  }), _react["default"].createElement("stop", {
    offset: 0.841,
    stopColor: "#b4bbbe"
  }), _react["default"].createElement("stop", {
    offset: 0.912,
    stopColor: "#9aa2a4"
  }), _react["default"].createElement("stop", {
    offset: 0.981,
    stopColor: "#788284"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e787a"
  })), _react["default"].createElement("path", {
    fill: "url(#pencil_svg__c)",
    d: "M56.834 15.374l-8.208-8.208c-.353-.352-1.341.639-.989.99l8.207 8.206c.352.353 1.342-.636.99-.988z"
  }), _react["default"].createElement("linearGradient", {
    id: "pencil_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: -160.431,
    y1: 225.614,
    x2: -166.806,
    y2: 219.065,
    gradientTransform: "rotate(45.001 196.731 376.942)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e787a"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#d6dbde"
  }), _react["default"].createElement("stop", {
    offset: 0.693,
    stopColor: "#d2d8da"
  }), _react["default"].createElement("stop", {
    offset: 0.768,
    stopColor: "#c7cdd0"
  }), _react["default"].createElement("stop", {
    offset: 0.841,
    stopColor: "#b4bbbe"
  }), _react["default"].createElement("stop", {
    offset: 0.912,
    stopColor: "#9aa2a4"
  }), _react["default"].createElement("stop", {
    offset: 0.981,
    stopColor: "#788284"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e787a"
  })), _react["default"].createElement("path", {
    fill: "url(#pencil_svg__d)",
    d: "M55.844 16.362c-1.406-1.406-6.657-6.658-8.207-8.206-.352-.352-1.341.638-.989.988l8.207 8.208c.352.353 1.341-.637.989-.99z"
  }), _react["default"].createElement("linearGradient", {
    id: "pencil_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: -160.431,
    y1: 227.015,
    x2: -166.807,
    y2: 220.465,
    gradientTransform: "rotate(45.001 196.731 376.942)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e787a"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#d6dbde"
  }), _react["default"].createElement("stop", {
    offset: 0.693,
    stopColor: "#d2d8da"
  }), _react["default"].createElement("stop", {
    offset: 0.768,
    stopColor: "#c7cdd0"
  }), _react["default"].createElement("stop", {
    offset: 0.841,
    stopColor: "#b4bbbe"
  }), _react["default"].createElement("stop", {
    offset: 0.912,
    stopColor: "#9aa2a4"
  }), _react["default"].createElement("stop", {
    offset: 0.981,
    stopColor: "#788284"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e787a"
  })), _react["default"].createElement("path", {
    fill: "url(#pencil_svg__e)",
    d: "M54.854 17.352l-8.207-8.206c-.352-.353-1.343.637-.991.988l8.209 8.208c.353.352 1.342-.637.989-.99z"
  }), _react["default"].createElement("path", {
    fill: "#FFE463",
    d: "M43.979 11.829L46.3 14.15 10.23 50.206l-2.322-2.322z"
  }), _react["default"].createElement("path", {
    fill: "#EA8800",
    d: "M49.862 17.714l2.323 2.324L16.11 56.082l-2.323-2.325z"
  }), _react["default"].createElement("linearGradient", {
    id: "pencil_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 33.898,
    y1: 65.841,
    x2: 39.401,
    y2: 71.976,
    gradientTransform: "translate(-28.016 -13.625)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fed0ac"
  }), _react["default"].createElement("stop", {
    offset: 0.245,
    stopColor: "#fccda8"
  }), _react["default"].createElement("stop", {
    offset: 0.503,
    stopColor: "#f5c39b"
  }), _react["default"].createElement("stop", {
    offset: 0.766,
    stopColor: "#ebb286"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#de9e6d"
  })), _react["default"].createElement("path", {
    fill: "url(#pencil_svg__f)",
    d: "M7.912 47.883L3.104 58.44l2.445 2.463 10.569-4.813c.23-2.579-1.967-1.272-1.828-2.816.124-1.384-2.176-3.687-3.561-3.563-1.766.159-.223-2.062-2.817-1.828z"
  }), _react["default"].createElement("linearGradient", {
    id: "pencil_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 30.907,
    y1: 71.619,
    x2: 34.12,
    y2: 74.76,
    gradientTransform: "translate(-28.016 -13.625)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.374,
    stopColor: "#3f4450"
  }), _react["default"].createElement("stop", {
    offset: 0.738,
    stopColor: "#343241"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#pencil_svg__g)",
    d: "M2.26 60.285c-.665 1.466-.009 2.12 1.454 1.455l5.126-2.334-4.241-4.245-2.339 5.124z"
  }));
};

var _default = SvgPencil;
exports["default"] = _default;