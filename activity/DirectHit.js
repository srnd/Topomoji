"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDirectHit = function SvgDirectHit(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "direct-hit_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 32,
    x2: 62,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.728,
    stopColor: "#dd0004"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("circle", {
    fill: "url(#direct-hit_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 32,
    cy: 32,
    r: 22
  }), _react["default"].createElement("linearGradient", {
    id: "direct-hit_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 17,
    y1: 32,
    x2: 47,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.728,
    stopColor: "#dd0004"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("circle", {
    fill: "url(#direct-hit_svg__b)",
    cx: 32,
    cy: 32,
    r: 15
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 32,
    cy: 32,
    r: 7
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#302C3B",
    d: "M31 31.667s1 19.5 12.867 27.893c0 0 4.918-1.955 9.066-6.073C48.848 43.563 41.098 43.063 31 31.667z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M32.739 32.76c-.826.826-2.322-.673-1.498-1.498 4.749-4.751 6.247-3.252 1.498 1.498z"
  }), _react["default"].createElement("linearGradient", {
    id: "direct-hit_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 43.867,
    y1: 14.551,
    x2: 62,
    y2: 14.551
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#009af7"
  }), _react["default"].createElement("stop", {
    offset: 0.121,
    stopColor: "#0da3f4"
  }), _react["default"].createElement("stop", {
    offset: 0.495,
    stopColor: "#30baec"
  }), _react["default"].createElement("stop", {
    offset: 0.802,
    stopColor: "#46c9e8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4ecee6"
  })), _react["default"].createElement("path", {
    fill: "url(#direct-hit_svg__c)",
    d: "M55.555 8.445L43.867 20.132s9.287 2.419 14.805-3.1c9.006-9.005-3.117-8.587-3.117-8.587z"
  }), _react["default"].createElement("linearGradient", {
    id: "direct-hit_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 42.745,
    y1: 16.802,
    x2: 47.199,
    y2: 21.256
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#2289c7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#005687"
  })), _react["default"].createElement("path", {
    fill: "url(#direct-hit_svg__d)",
    d: "M37.768 30.687c-3.986 3.986-8.439-.468-4.453-4.454C41.227 18.319 56.59 5.806 57.393 6.607c.8.802-11.713 16.166-19.625 24.08z"
  }), _react["default"].createElement("linearGradient", {
    id: "direct-hit_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 43.34,
    y1: 10.184,
    x2: 55.551,
    y2: 10.184
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#009af7"
  }), _react["default"].createElement("stop", {
    offset: 0.121,
    stopColor: "#0da3f4"
  }), _react["default"].createElement("stop", {
    offset: 0.495,
    stopColor: "#30baec"
  }), _react["default"].createElement("stop", {
    offset: 0.802,
    stopColor: "#46c9e8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4ecee6"
  })), _react["default"].createElement("path", {
    fill: "url(#direct-hit_svg__e)",
    d: "M43.533 18.286c-.396-2.991-.561-8.963 3.434-12.958 7.691-7.69 8.508.028 8.584 2.445.012.415-11.867 11.652-12.018 10.513z"
  }));
};

var _default = SvgDirectHit;
exports["default"] = _default;