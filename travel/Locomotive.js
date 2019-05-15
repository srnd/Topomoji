"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLocomotive = function SvgLocomotive(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "locomotive_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 3.999,
    y1: 8.328,
    x2: 56.252,
    y2: 8.328
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#locomotive_svg__a)",
    d: "M55.918 4.531c-2.045.261-3.23-.813-4.629.389-.893-.456-2.086-.298-2.764.472-.961-.788-2.369-.931-3.5-.436-1.344-2.416-5.129-3.116-7.184-1.7-.736-.625-2.193-.965-3.34-.35-1.563-1.443-4.681-1.104-5.918.594-1.989-.987-5.015-.453-6.432 1.768-1.06.035-3.646.945-4.151 1.857-1.515-.83-5.921-.542-7 2.811C9.121 9.104 4.292 11.351 4 14c6.167 1.476 14 0 14 0s2.308.554 3.151-.064c1.021.637 3.105.876 4.197-1.098 1.069.443 2.715.276 3.463-.545.627.509 2.752.321 3.256-.393 1.197 1.571 5.359 1.338 6.39-.073 1.211 1.12 5.168.558 6.082-1.321 1.627 1.089 4.232.569 4.906-1.555 1.957.649 3.148-.679 3.148-1.723 2.501.282 4.47-2.843 3.325-2.697z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M25 24.32h2v4h-2v-4z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M24.5 27.117h3v2h-3v-2z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M24.5 19.32h3v6h-3v-1.959h1l-1-2.22V19.32z"
  }), _react["default"].createElement("path", {
    fill: "#FF000E",
    d: "M26 16.32l-3 3h6z"
  }), _react["default"].createElement("linearGradient", {
    id: "locomotive_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 3.999,
    y1: 21.5,
    x2: 18,
    y2: 21.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.171,
    stopColor: "#4f555f"
  }), _react["default"].createElement("stop", {
    offset: 0.47,
    stopColor: "#3e3f4b"
  }), _react["default"].createElement("stop", {
    offset: 0.753,
    stopColor: "#34313f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#locomotive_svg__b)",
    d: "M4 14v3l3 5v7h8v-7l3-5v-3z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M4.634 37.584v-5.168c-1.407 0-1.407 5.168 0 5.168zM6 50h6v6h40v-6h8v-4h2v-1H6v5z"
  }), _react["default"].createElement("circle", {
    fill: "#E03636",
    cx: 36,
    cy: 54,
    r: 8
  }), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 36,
    cy: 54,
    r: 8
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M6 43h56v2H6v-2z"
  }), _react["default"].createElement("circle", {
    fill: "#E03636",
    cx: 52,
    cy: 54,
    r: 8
  }), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 52,
    cy: 54,
    r: 8
  }), _react["default"].createElement("linearGradient", {
    id: "locomotive_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 20.711,
    y1: 43,
    x2: 20.711,
    y2: 28
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.378,
    stopColor: "#454854"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#555e67"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#locomotive_svg__c)",
    d: "M6 28c-2.104 0-2.104 15 0 15h31V28H6z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.799 48.411a7.102 7.102 0 0 0-1.389 1.387l4.855 3.47-3.466-4.857zM57.59 49.797a7.02 7.02 0 0 0-1.389-1.387l-3.469 4.857 4.858-3.47zM52.98 47.077c-.32-.046-.646-.077-.98-.077s-.658.031-.98.077l.98 5.886.98-5.886zM45.076 53.02A6.848 6.848 0 0 0 45 54c0 .334.031.66.078.982L50.963 54l-5.887-.98zM58.924 53.018l-5.889.983 5.889.979c.045-.321.076-.647.076-.98 0-.334-.031-.661-.076-.982zM46.412 58.203c.395.525.861.992 1.387 1.387l3.469-4.855-4.856 3.468zM56.203 59.588a6.984 6.984 0 0 0 1.387-1.387l-4.857-3.469 3.47 4.856zM51.021 60.924c.321.045.647.076.979.076.334 0 .662-.031.982-.077L52 55.036l-.979 5.888zM31.798 48.411a7.102 7.102 0 0 0-1.389 1.387l4.856 3.47-3.467-4.857zM41.59 49.797a7.02 7.02 0 0 0-1.389-1.387l-3.469 4.857 4.858-3.47zM36.98 47.077c-.32-.046-.646-.077-.98-.077s-.658.031-.98.077l.98 5.886.98-5.886zM29.076 53.02A6.706 6.706 0 0 0 29 54c0 .334.031.66.078.982L34.963 54l-5.887-.98zM42.924 53.018l-5.889.983 5.889.979c.045-.321.076-.647.076-.98 0-.334-.031-.661-.076-.982zM30.412 58.203c.395.525.861.992 1.387 1.387l3.469-4.855-4.856 3.468zM40.203 59.588a6.984 6.984 0 0 0 1.387-1.387l-4.857-3.469 3.47 4.856zM35.021 60.924c.321.045.647.076.979.076.334 0 .662-.031.982-.077L36 55.036l-.979 5.888z"
  }), _react["default"].createElement("circle", {
    fill: "#9E0505",
    cx: 52,
    cy: 54,
    r: 3
  }), _react["default"].createElement("linearGradient", {
    id: "locomotive_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 14.999,
    y1: 43,
    x2: 14.999,
    y2: 28
  }, _react["default"].createElement("stop", {
    offset: 0.327,
    stopColor: "#de9400"
  }), _react["default"].createElement("stop", {
    offset: 0.51,
    stopColor: "#e7a606"
  }), _react["default"].createElement("stop", {
    offset: 0.813,
    stopColor: "#f3be0e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f7c711"
  })), _react["default"].createElement("path", {
    fill: "url(#locomotive_svg__d)",
    d: "M14 28h2v15h-2z"
  }), _react["default"].createElement("linearGradient", {
    id: "locomotive_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 26,
    y1: 43,
    x2: 26,
    y2: 28
  }, _react["default"].createElement("stop", {
    offset: 0.327,
    stopColor: "#de9400"
  }), _react["default"].createElement("stop", {
    offset: 0.51,
    stopColor: "#e7a606"
  }), _react["default"].createElement("stop", {
    offset: 0.813,
    stopColor: "#f3be0e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f7c711"
  })), _react["default"].createElement("path", {
    fill: "url(#locomotive_svg__e)",
    d: "M25 28h2v15h-2z"
  }), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 18,
    cy: 57,
    r: 5
  }), _react["default"].createElement("path", {
    fill: "#9E0505",
    d: "M18 53a4.002 4.002 0 1 0 .004 8.004A4.002 4.002 0 0 0 18 53zm0 7a3.002 3.002 0 0 1-.002-6.002 3 3 0 0 1 3.002 3V57c0 1.654-1.344 3-3 3z"
  }), _react["default"].createElement("circle", {
    fill: "#9E0505",
    cx: 36,
    cy: 54,
    r: 3
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M52 54H36.303l-6-2H27v2h2.697l6 2H52a1 1 0 1 0 0-2z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M19 50h8v6h-8v-6z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M12 48H6v2h1.64L2 60h10V48z"
  }), _react["default"].createElement("path", {
    fill: "#9E0505",
    d: "M10 58H8l2-8v8zm-1-8l-2 8H5l4-8z"
  }), _react["default"].createElement("linearGradient", {
    id: "locomotive_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 3.999,
    y1: 16.5,
    x2: 18,
    y2: 16.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f7c711"
  }), _react["default"].createElement("stop", {
    offset: 0.187,
    stopColor: "#f3be0e"
  }), _react["default"].createElement("stop", {
    offset: 0.49,
    stopColor: "#e7a606"
  }), _react["default"].createElement("stop", {
    offset: 0.673,
    stopColor: "#de9400"
  })), _react["default"].createElement("path", {
    fill: "url(#locomotive_svg__f)",
    d: "M4 16h14v1H4v-1z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M58 32c-1.994 0-3-1-3-3V17H36v26h24V32h-2zm-7-2h-9V20h9v10z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M42 26h3v4h-3v-4z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M55 34H41c-2.1 0-2.1 6 0 6h14c2.1 0 2.1-6 0-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "locomotive_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 47,
    y1: 18,
    x2: 47,
    y2: 14
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cf0000"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#dd0004"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#locomotive_svg__g)",
    d: "M37 14c-3.025 0-3 2-3 4h26v-4H37z"
  }));
};

var _default = SvgLocomotive;
exports["default"] = _default;