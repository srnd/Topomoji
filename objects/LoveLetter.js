"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLoveLetter = function SvgLoveLetter(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "love-letter_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 49.998,
    x2: 32.001,
    y2: 14.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 0.512,
    stopColor: "#dbe2e5"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ccd5d9"
  })), _react["default"].createElement("path", {
    fill: "url(#love-letter_svg__a)",
    d: "M2 14h60v35.998H2z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M32 20L2 49.998h60z"
  }), _react["default"].createElement("linearGradient", {
    id: "love-letter_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 49.998,
    x2: 32.001,
    y2: 21.2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 0.26,
    stopColor: "#e3e9eb"
  }), _react["default"].createElement("stop", {
    offset: 0.454,
    stopColor: "#dae1e4"
  }), _react["default"].createElement("stop", {
    offset: 0.576,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#love-letter_svg__b)",
    d: "M32 21.199L2 49.998h60z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M30.68 39.16L2 14h60L33.318 39.16a2 2 0 0 1-2.638 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "love-letter_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 37.74,
    x2: 32.001,
    y2: -51.603
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b9c2c7"
  }), _react["default"].createElement("stop", {
    offset: 0.046,
    stopColor: "#c2cacf"
  }), _react["default"].createElement("stop", {
    offset: 0.203,
    stopColor: "#dce2e5"
  }), _react["default"].createElement("stop", {
    offset: 0.297,
    stopColor: "#e6ebed"
  })), _react["default"].createElement("path", {
    fill: "url(#love-letter_svg__c)",
    d: "M30.713 38.119L2 14h60L33.285 38.119a2.003 2.003 0 0 1-2.572 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "love-letter_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 38.586,
    x2: 32.001,
    y2: 14.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 0.582,
    stopColor: "#e3e9ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#dae3e8"
  })), _react["default"].createElement("path", {
    fill: "url(#love-letter_svg__d)",
    d: "M30.713 38.119L2 14h60L33.285 38.119a2.003 2.003 0 0 1-2.572 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "love-letter_svg__e",
    cx: -578.731,
    cy: 411.047,
    r: 4.832,
    gradientTransform: "matrix(2.9059 0 0 -3.1362 1713.81 1311.852)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff1c23"
  }), _react["default"].createElement("stop", {
    offset: 0.621,
    stopColor: "#f6151b"
  }), _react["default"].createElement("stop", {
    offset: 0.952,
    stopColor: "#dd0404"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d90100"
  })), _react["default"].createElement("path", {
    fill: "url(#love-letter_svg__e)",
    d: "M32 24.227c-3.451-5.695-13-3.471-13 3.681 0 4.798 4.404 8.007 13 15.092 8.594-7.085 13-10.294 13-15.092 0-7.152-9.551-9.377-13-3.681z"
  }));
};

var _default = SvgLoveLetter;
exports["default"] = _default;