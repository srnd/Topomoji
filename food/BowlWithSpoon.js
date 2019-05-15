"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBowlWithSpoon = function SvgBowlWithSpoon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M46.787 54.846H15.211s.412 2.817 4.63 5.103C21.4 60.789 25.109 62 31 62c5.892 0 9.603-1.211 11.16-2.052 4.215-2.285 4.627-5.102 4.627-5.102z"
  }), _react["default"].createElement("linearGradient", {
    id: "bowl-with-spoon_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 46.764,
    x2: 60,
    y2: 46.764
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5000d"
  }), _react["default"].createElement("stop", {
    offset: 0.245,
    stopColor: "#f2000c"
  }), _react["default"].createElement("stop", {
    offset: 0.46,
    stopColor: "#e7000a"
  }), _react["default"].createElement("stop", {
    offset: 0.664,
    stopColor: "#d50106"
  }), _react["default"].createElement("stop", {
    offset: 0.859,
    stopColor: "#bc0101"
  }), _react["default"].createElement("stop", {
    offset: 0.903,
    stopColor: "#b50100"
  })), _react["default"].createElement("path", {
    fill: "url(#bowl-with-spoon_svg__a)",
    d: "M60 33.724H2s.755 7.731 8.499 17.384c2.866 3.57 9.683 8.695 20.501 8.695 10.828 0 17.642-5.125 20.501-8.695C59.246 41.455 60 33.724 60 33.724z"
  }), _react["default"].createElement("ellipse", {
    fill: "#F44336",
    cx: 31,
    cy: 33.78,
    rx: 28.998,
    ry: 5.355
  }), _react["default"].createElement("linearGradient", {
    id: "bowl-with-spoon_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 5.14,
    y1: 33.745,
    x2: 56.858,
    y2: 33.745
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#600"
  }), _react["default"].createElement("stop", {
    offset: 0.462,
    stopColor: "#980b0a"
  }), _react["default"].createElement("stop", {
    offset: 0.818,
    stopColor: "#c21413"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#bowl-with-spoon_svg__b)",
    cx: 31,
    cy: 33.745,
    rx: 25.858,
    ry: 4.396
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#302C3B",
    d: "M47.438 29.35s-2.984 4.998-3.515 8.204c0 0 1.35-.144 2.468-.276.381-2.472 1.438-5.584 3.941-7.489-1.271-.234-2.894-.439-2.894-.439z"
  }), _react["default"].createElement("linearGradient", {
    id: "bowl-with-spoon_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 38.102,
    y1: 28.992,
    x2: 62,
    y2: 28.992
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.382,
    stopColor: "#cbd5da"
  }), _react["default"].createElement("stop", {
    offset: 0.749,
    stopColor: "#c0ccd0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("path", {
    fill: "url(#bowl-with-spoon_svg__c)",
    d: "M61.637 21.131c2.566 2.712-8.951 3.156-19.657 16.604-2.064.147-3.877.249-3.877.249 7.96-13.423 19.623-20.989 23.534-16.853z"
  }));
};

var _default = SvgBowlWithSpoon;
exports["default"] = _default;