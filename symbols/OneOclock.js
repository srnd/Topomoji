"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOneOclock = function SvgOneOclock(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "one-oclock_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 16.998,
    y1: 6.016,
    x2: 47.002,
    y2: 57.985
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("circle", {
    fill: "url(#one-oclock_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("linearGradient", {
    id: "one-oclock_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 19.498,
    y1: 10.346,
    x2: 44.502,
    y2: 53.654
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9e0e4"
  }), _react["default"].createElement("stop", {
    offset: 0.232,
    stopColor: "#d6dde1"
  }), _react["default"].createElement("stop", {
    offset: 0.571,
    stopColor: "#c2cacd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a2aaad"
  })), _react["default"].createElement("circle", {
    fill: "url(#one-oclock_svg__b)",
    cx: 32,
    cy: 32,
    r: 25
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 32,
    cy: 32,
    r: 22
  }), _react["default"].createElement("linearGradient", {
    id: "one-oclock_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 28.569,
    y1: 32.826,
    x2: 35.699,
    y2: 45.174,
    gradientTransform: "rotate(-150 32 32)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#one-oclock_svg__c)",
    d: "M39.5 19.01a2 2 0 0 1 .732 2.732L33.732 33l-3.464-2 6.5-11.258a1.999 1.999 0 0 1 2.732-.732z"
  }), _react["default"].createElement("linearGradient", {
    id: "one-oclock_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 27.219,
    y1: 14.451,
    x2: 36.513,
    y2: 30.549
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#one-oclock_svg__d)",
    d: "M34 32h-4V14a2 2 0 1 1 4 0v18z"
  }), _react["default"].createElement("linearGradient", {
    id: "one-oclock_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 30,
    y1: 28.535,
    x2: 34.001,
    y2: 35.465
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("circle", {
    fill: "url(#one-oclock_svg__e)",
    cx: 32,
    cy: 32,
    r: 4
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M34.5 32c0 1.378-1.12 2.5-2.5 2.5s-2.5-1.122-2.5-2.5 1.12-2.5 2.5-2.5 2.5 1.122 2.5 2.5z"
  }));
};

var _default = SvgOneOclock;
exports["default"] = _default;