"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEnvelope = function SvgEnvelope(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "envelope_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 50,
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
    fill: "url(#envelope_svg__a)",
    d: "M2 14h60v36H2z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M32 20L2 50h60z"
  }), _react["default"].createElement("linearGradient", {
    id: "envelope_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 50,
    x2: 32.001,
    y2: 21.201
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
    fill: "url(#envelope_svg__b)",
    d: "M32 21.2L2 50h60z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M30.68 39.162L2 14h60L33.318 39.162a2 2 0 0 1-2.638 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "envelope_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 37.742,
    x2: 32.001,
    y2: -51.608
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
    fill: "url(#envelope_svg__c)",
    d: "M30.713 38.119L2 14h60L33.285 38.119a1.998 1.998 0 0 1-2.572 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "envelope_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 38.588,
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
    fill: "url(#envelope_svg__d)",
    d: "M30.713 38.119L2 14h60L33.285 38.119a1.998 1.998 0 0 1-2.572 0z"
  }));
};

var _default = SvgEnvelope;
exports["default"] = _default;