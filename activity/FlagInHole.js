"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFlagInHole = function SvgFlagInHole(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "flag-in-hole_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 26,
    y1: 9.792,
    x2: 46.428,
    y2: 9.792
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.728,
    stopColor: "#dd0004"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#flag-in-hole_svg__a)",
    d: "M46.428 16.708c-6.81 2.49-13.618-2.49-20.428 0V2.875c6.81-2.489 13.618 2.49 20.428 0v13.833z"
  }), _react["default"].createElement("linearGradient", {
    id: "flag-in-hole_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 49.721,
    x2: 62,
    y2: 49.721
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9be022"
  }), _react["default"].createElement("stop", {
    offset: 0.522,
    stopColor: "#7fbd23"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#69a123"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#flag-in-hole_svg__b)",
    cx: 32,
    cy: 49.721,
    rx: 30,
    ry: 12.279
  }), _react["default"].createElement("radialGradient", {
    id: "flag-in-hole_svg__c",
    cx: 26.625,
    cy: 51.565,
    r: 4.452,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.333,
    stopColor: "#eef2f5"
  }), _react["default"].createElement("stop", {
    offset: 0.567,
    stopColor: "#e4e8ea"
  }), _react["default"].createElement("stop", {
    offset: 0.971,
    stopColor: "#c9ccce"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c7cacc"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#flag-in-hole_svg__c)",
    cx: 26.625,
    cy: 51.564,
    rx: 5.805,
    ry: 2.438
  }), _react["default"].createElement("path", {
    opacity: 0.1,
    fill: "#302C3B",
    d: "M33.645 37.441l-.91.005-7.174 11.749v4.813c1.35.048 2.568-.035 2.568-.035v-4.804h-.01c.575-1.542 3.188-8.377 5.526-11.728z"
  }), _react["default"].createElement("radialGradient", {
    id: "flag-in-hole_svg__d",
    cx: 26.625,
    cy: 50.607,
    r: 4.236,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.273,
    stopColor: "#464057"
  }), _react["default"].createElement("stop", {
    offset: 0.482,
    stopColor: "#433d54"
  }), _react["default"].createElement("stop", {
    offset: 0.652,
    stopColor: "#3a354a"
  }), _react["default"].createElement("stop", {
    offset: 0.808,
    stopColor: "#2b2639"
  }), _react["default"].createElement("stop", {
    offset: 0.927,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#flag-in-hole_svg__d)",
    d: "M26.625 50.173c2.777 0 5.096.819 5.667 1.915a1.12 1.12 0 0 0 .138-.523c0-1.346-2.599-2.438-5.805-2.438-3.205 0-5.805 1.093-5.805 2.438 0 .18.05.354.137.523.571-1.096 2.89-1.915 5.668-1.915z"
  }), _react["default"].createElement("linearGradient", {
    id: "flag-in-hole_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 25,
    y1: 9.233,
    x2: 27,
    y2: 9.233
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.728,
    stopColor: "#dd0004"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#flag-in-hole_svg__e)",
    d: "M27 3.061c0-1.414-2-1.414-2-.002v13.409h2V3.061z"
  }), _react["default"].createElement("linearGradient", {
    id: "flag-in-hole_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 25,
    y1: 35.253,
    x2: 27,
    y2: 35.253
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fdd674"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6b53c"
  })), _react["default"].createElement("path", {
    fill: "url(#flag-in-hole_svg__f)",
    d: "M25 16.467v37.437s1 .222 2 .096V16.467h-2z"
  }));
};

var _default = SvgFlagInHole;
exports["default"] = _default;